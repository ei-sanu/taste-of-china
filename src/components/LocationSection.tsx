import { getBusinessHoursStatus } from '@/lib/businessHours';
import { Clock, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const LocationSection = () => {
  const [hoursStatus, setHoursStatus] = useState(getBusinessHoursStatus());

  useEffect(() => {
    // Update status every minute
    const interval = setInterval(() => {
      setHoursStatus(getBusinessHoursStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Find <span className="text-secondary glow-text-gold">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us at our location in the heart of Bhubaneswar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="glass-card overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9982264292207!2d85.83461251034372!3d20.25890831369707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a747916a0581%3A0xfae38e7766fdfbab!2sTaste%20of%20China!5e0!3m2!1sen!2sin!4v1768746439209!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taste of China Location"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="glass-card p-6 border-glow-red">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Our Address</h3>
                  <p className="text-muted-foreground">
                    142, Near Water Tank Lane, Bapuji Nagar,<br />
                    Bhubaneswar, Odisha 751009
                  </p>
                  <a
                    href="https://maps.google.com/?q=142,+Water+Tank+Ln,+Bapuji+Nagar,+Bhubaneswar,+Odisha+751009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-card p-6 border-glow-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Every Day</span>
                      <span className="text-foreground font-medium">12:00 PM - 10:30 PM</span>
                    </div>
                    <div className={`mt-2 text-xs font-medium ${hoursStatus.statusColor}`}>
                      {hoursStatus.statusText}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Reservations</h3>
                  <p className="text-muted-foreground mb-2">Call us to book your table</p>
                  <a
                    href="tel:+916746550550"
                    className="text-xl font-display font-bold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    +91 6746 550 550
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
