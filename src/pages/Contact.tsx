import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getBusinessHoursStatus } from '@/lib/businessHours';
import { CheckCircle2, Clock, Download, Instagram, Mail, MapPin, Phone, RefreshCw, Send, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [hoursStatus, setHoursStatus] = useState(getBusinessHoursStatus());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaValid, setCaptchaValid] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [ticketData, setTicketData] = useState<any>(null);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed similar looking characters
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaAnswer('');
    setCaptchaValid(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHoursStatus(getBusinessHoursStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Auto-download PDF when modal opens
  useEffect(() => {
    if (showSuccess && ticketData) {
      // Generate QR code for display
      import('qrcode').then(({ default: QRCode }) => {
        const container = document.getElementById('qr-code-container');
        if (container) {
          container.innerHTML = '';
          QRCode.toCanvas(
            `Ticket: ${ticketData.ticketId}\nName: ${ticketData.name}\nEmail: ${ticketData.email}`,
            {
              width: 60,
              margin: 1,
              color: {
                dark: '#000000',
                light: '#FFFFFF'
              }
            }
          ).then((canvas: HTMLCanvasElement) => {
            container.appendChild(canvas);
          });
        }
      });

      // Auto-download PDF
      setTimeout(() => {
        downloadTicketPDF(ticketData);
      }, 500);
    }
  }, [showSuccess, ticketData]);

  const downloadTicketPDF = async (ticketData: any) => {
    try {
      const { jsPDF } = await import('jspdf');
      const QRCode = (await import('qrcode')).default;

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      const isReservation = ticketData.reason === 'reservation';

      // Header
      pdf.setFillColor(239, 68, 68);
      pdf.rect(0, 0, pageWidth, 40, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('TASTE OF CHINA', pageWidth / 2, 20, { align: 'center' });
      pdf.setFontSize(12);
      pdf.text(isReservation ? 'Table Reservation Confirmation' : 'Support Case Registration', pageWidth / 2, 30, { align: 'center' });

      pdf.setTextColor(0, 0, 0);
      let yPos = 55;

      // Title
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text(isReservation ? 'BOOKING CONFIRMATION' : 'CASE REGISTRATION CONFIRMATION', pageWidth / 2, yPos, { align: 'center' });
      yPos += 15;

      // Ticket/Booking ID Box
      pdf.setFillColor(234, 179, 8);
      pdf.rect(margin, yPos, pageWidth - 2 * margin, 15, 'F');
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(255, 255, 255);
      pdf.text((isReservation ? 'Booking ID: ' : 'Ticket ID: ') + ticketData.ticketId, pageWidth / 2, yPos + 10, { align: 'center' });
      pdf.setTextColor(0, 0, 0);
      yPos += 25;

      // Date and Time
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Date: ' + ticketData.formattedDate, margin, yPos);
      pdf.text('Time: ' + ticketData.formattedTime, pageWidth - margin, yPos, { align: 'right' });
      yPos += 15;

      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 10;

      // Customer Details
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(isReservation ? 'GUEST DETAILS' : 'CUSTOMER DETAILS', margin, yPos);
      yPos += 8;

      pdf.setFontSize(10);
      const addField = (label: string, value: string, withCheckmark = false) => {
        if (withCheckmark && isReservation) {
          pdf.setTextColor(34, 197, 94);
          pdf.text('✓', margin, yPos);
          pdf.setTextColor(0, 0, 0);
        }
        pdf.setFont('helvetica', 'bold');
        pdf.text(label + ':', margin + (withCheckmark && isReservation ? 6 : 0), yPos);
        pdf.setFont('helvetica', 'normal');
        const textWidth = pdf.getTextWidth(label + ': ');
        pdf.text(value, margin + textWidth + (withCheckmark && isReservation ? 6 : 0), yPos);
        yPos += 7;
      };

      addField('Name', ticketData.name, isReservation);
      addField('Email', ticketData.email, isReservation);
      if (ticketData.phone) {
        addField('Phone', ticketData.phone, isReservation);
      }
      if (!isReservation) {
        addField('Category', ticketData.reason.replace(/_/g, ' ').toUpperCase());
      }

      yPos += 5;

      // Message/Special Requests Section
      pdf.setFont('helvetica', 'bold');
      pdf.text(isReservation ? 'SPECIAL REQUESTS:' : 'MESSAGE:', margin, yPos);
      yPos += 7;
      pdf.setFont('helvetica', 'normal');
      const splitMessage = pdf.splitTextToSize(ticketData.message, pageWidth - 2 * margin);
      pdf.text(splitMessage, margin, yPos);
      yPos += splitMessage.length * 5 + 10;

      // Status Section
      pdf.setFillColor(34, 197, 94);
      pdf.rect(margin, yPos, pageWidth - 2 * margin, 20, 'F');
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(255, 255, 255);
      pdf.text(isReservation ? '✓ RESERVATION CONFIRMED' : '✓ CASE REGISTERED SUCCESSFULLY', pageWidth / 2, yPos + 8, { align: 'center' });
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text(isReservation ? 'Your table has been reserved. We look forward to serving you!' : 'Your request has been received and assigned to our support team.', pageWidth / 2, yPos + 15, { align: 'center' });
      pdf.setTextColor(0, 0, 0);
      yPos += 30;

      // QR Code
      const qrCodeDataUrl = await QRCode.toDataURL(
        `${isReservation ? 'Booking' : 'Ticket'}: ${ticketData.ticketId}\nName: ${ticketData.name}\nEmail: ${ticketData.email}`,
        { width: 200, margin: 1 }
      );

      const qrSize = 30;
      pdf.addImage(qrCodeDataUrl, 'PNG', margin, yPos, qrSize, qrSize);
      pdf.setFontSize(8);
      pdf.text(isReservation ? 'Scan at arrival' : 'Scan to track ticket', margin + qrSize / 2, yPos + qrSize + 5, { align: 'center' });

      // Manager Details
      const managerX = pageWidth - margin - 50;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Authorized By:', managerX, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Manager: Somesh', managerX, yPos + 7);
      pdf.text('Taste of China', managerX, yPos + 14);

      yPos += qrSize + 20;

      // Footer
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 7;

      pdf.setFontSize(8);
      pdf.setTextColor(100, 100, 100);
      pdf.text('142, Near Water Tank Lane, Bapuji Nagar, Bhubaneswar, Odisha 751009', pageWidth / 2, yPos, { align: 'center' });
      pdf.text('Phone: +91 6746 550 550 | Email: info@tasteofchina.in', pageWidth / 2, yPos + 5, { align: 'center' });

      // Save PDF
      pdf.save(`Taste-of-China-${isReservation ? 'Booking' : 'Ticket'}-${ticketData.ticketId}.pdf`);

      toast({
        title: "Download Started",
        description: `Your ${isReservation ? 'booking confirmation' : 'ticket'} PDF is being downloaded.`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Please try again using the download button.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    if (captchaAnswer.length === 6) {
      setCaptchaValid(captchaAnswer.toUpperCase() === captchaCode);
    } else {
      setCaptchaValid(null);
    }
  }, [captchaAnswer, captchaCode]);

  const generateTicketId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `TOC-${timestamp}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha
    if (captchaAnswer.toUpperCase() !== captchaCode) {
      toast({
        title: "Incorrect Captcha",
        description: "Please enter the correct captcha code.",
        variant: "destructive"
      });
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    const ticketId = generateTicketId();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9c4dbdf0-8c38-47a5-aab1-9e3b06b196db',
          subject: `New Contact Form Submission - Ticket #${ticketId}`,
          from_name: 'Taste of China Contact Form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          message: formData.message,
          ticket_id: ticketId,
          submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        }),
      });

      const result = await response.json();

      if (result.success) {
        const currentDate = new Date();
        setTicketData({
          ticketId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          message: formData.message,
          timestamp: currentDate.toISOString(),
          formattedDate: currentDate.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          formattedTime: currentDate.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        });
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', reason: '', message: '' });
        setCaptchaAnswer('');
        generateCaptcha();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="section-title text-foreground mb-4 fade-in-up">
              Contact <span className="text-secondary glow-text-gold">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Have questions or want to make a reservation? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 border-glow-gold">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      required
                      className="bg-background/50 border-border focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="bg-background/50 border-border focus:border-secondary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="youremail@example.com"
                    required
                    className="bg-background/50 border-border focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Reason for Reaching Out</label>
                  <Select
                    value={formData.reason}
                    onValueChange={(value) => setFormData({ ...formData, reason: value })}
                    required
                  >
                    <SelectTrigger className="bg-background/50 border-border focus:border-secondary">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="reservation">Make a Reservation</SelectItem>
                      <SelectItem value="catering">Catering Inquiry</SelectItem>
                      <SelectItem value="feedback">Feedback or Review</SelectItem>
                      <SelectItem value="order">Order Related Query</SelectItem>
                      <SelectItem value="complaint">Complaint or Issue</SelectItem>
                      <SelectItem value="menu">Menu Information</SelectItem>
                      <SelectItem value="delivery">Delivery or Takeaway</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to know..."
                    rows={5}
                    required
                    className="bg-background/50 border-border focus:border-secondary resize-none"
                  />
                </div>

                {/* Captcha Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm text-muted-foreground">Security Check</label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={generateCaptcha}
                      className="text-secondary hover:text-secondary/80"
                    >
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Refresh
                    </Button>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <p className="text-sm text-muted-foreground mb-2">
                        Enter the code shown below:
                      </p>
                      <div className="bg-background/80 rounded-lg p-3 border-2 border-border inline-block">
                        <p className="text-3xl font-mono font-bold text-secondary tracking-widest select-none">
                          {captchaCode}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        type="text"
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value.toUpperCase())}
                        placeholder="Enter captcha code"
                        maxLength={6}
                        required
                        className="bg-background/50 border-border focus:border-secondary text-center text-xl font-mono font-bold tracking-widest uppercase pr-12"
                      />
                      {captchaValid !== null && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          {captchaValid ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          ) : (
                            <X className="w-6 h-6 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting || captchaValid !== true} className="w-full btn-primary-glow">
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Success Modal with Ticket */}
            <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
              <DialogContent className="sm:max-w-sm bg-background border-border">
                <div className="text-center py-3">
                  <h2 className="font-display text-lg font-bold text-foreground mb-3">
                    Message Sent Successfully!
                  </h2>

                  {/* Ticket Card */}
                  {ticketData && (
                    <div>
                      <div
                        id="ticket-card"
                        className="relative bg-gradient-to-br from-secondary/20 via-background to-primary/20 rounded-lg p-3 text-left border-2 border-secondary/40 shadow-lg mx-auto overflow-hidden"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)'
                        }}
                      >
                        {/* Success Checkmark Badge - Fixed Position */}
                        <div className="absolute top-2 right-2 z-10">
                          <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 border-2 border-green-500/40">
                            <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                          </div>
                        </div>

                        {/* Header */}
                        <div className="mb-2 pt-1">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shadow">
                              <span className="text-sm font-display font-bold text-white">T</span>
                            </div>
                            <div>
                              <h3 className="font-display text-xs font-bold text-foreground">Taste of China</h3>
                              <p className="text-xs text-muted-foreground">Support Ticket</p>
                            </div>
                          </div>
                          <div className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent my-2"></div>
                        </div>

                        {/* Ticket ID */}
                        <div className="mb-2 bg-background/60 rounded p-1.5 border border-secondary/30">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Ticket ID</p>
                          <p className="font-mono text-xs font-bold text-secondary">{ticketData.ticketId}</p>
                        </div>

                        {/* Details Grid */}
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Name</p>
                              <p className="text-xs font-semibold text-foreground truncate">{ticketData.name}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Date & Time</p>
                              <p className="text-xs font-medium text-foreground">{ticketData.formattedDate}</p>
                              <p className="text-xs text-muted-foreground">{ticketData.formattedTime}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                            <p className="text-xs font-semibold text-foreground break-all">{ticketData.email}</p>
                          </div>

                          {ticketData.phone && (
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                              <p className="text-xs font-semibold text-foreground">{ticketData.phone}</p>
                            </div>
                          )}

                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Category</p>
                            <p className="text-xs font-semibold text-foreground capitalize">{ticketData.reason.replace(/_/g, ' ')}</p>
                          </div>

                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Message</p>
                            <p className="text-xs text-foreground leading-relaxed line-clamp-3">{ticketData.message}</p>
                          </div>
                        </div>

                        {/* QR Code Section */}
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border/50">
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground mb-0.5">Scan to track:</p>
                            <div id="qr-code-container" className="bg-white p-1 rounded inline-block"></div>
                          </div>
                          <div className="flex-1 text-right">
                            <p className="text-xs text-muted-foreground">Manager</p>
                            <p className="text-xs font-semibold text-foreground">Somesh</p>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-2">
                          <p className="text-xs text-center text-muted-foreground">
                            ✓ Ticket sent to our team
                          </p>
                        </div>
                      </div>

                      {/* Warning Message */}
                      <div className="mt-3 p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                        <p className="text-xs text-amber-600 dark:text-amber-400 text-center font-medium">
                          ⚠️ Please download your ticket! It's not saved in our backend - this is a one-time download.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-3">
                        <Button
                          type="button"
                          onClick={() => downloadTicketPDF(ticketData)}
                          variant="outline"
                          className="flex-1 border-secondary/50 hover:bg-secondary/10"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button
                          onClick={() => setShowSuccess(false)}
                          className="flex-1 btn-primary-glow"
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="glass-card overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9982264292207!2d85.83461251034372!3d20.25890831369707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a747916a0581%3A0xfae38e7766fdfbab!2sTaste%20of%20China!5e0!3m2!1sen!2sin!4v1768746439209!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Taste of China Location"
                />
              </div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Address */}
                <div className="glass-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        142, Near Water Tank Lane,<br />
                        Bapuji Nagar, Bhubaneswar,<br />
                        Odisha 751009
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+916746550550" className="text-sm text-secondary hover:text-secondary/80 transition-colors">
                        +91 6746 550 550
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="glass-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@tasteofchina.in" className="text-sm text-secondary hover:text-secondary/80 transition-colors">
                        info@tasteofchina.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="glass-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Every Day: 12PM - 10:30PM<br />
                        <span className={`font-medium ${hoursStatus.statusColor}`}>{hoursStatus.statusText}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tasteofchinalovers"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 card-hover block"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Follow us on Instagram</h3>
                  <p className="text-sm text-secondary">@tasteofchinalovers</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
