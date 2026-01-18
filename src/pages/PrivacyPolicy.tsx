import { Database, Eye, Lock, Mail, Shield, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
                            <Shield className="w-10 h-10 text-primary" />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Last updated: January 18, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Introduction */}
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                At Taste of China, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our restaurant or use our services.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Database className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Information We Collect
                                    </h2>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary mb-2">Personal Information</h3>
                                            <p className="leading-relaxed">
                                                We may collect personal information that you voluntarily provide to us when you:
                                            </p>
                                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                                <li>Make a reservation</li>
                                                <li>Place an order for delivery or takeout</li>
                                                <li>Sign up for our newsletter or loyalty program</li>
                                                <li>Contact us through our website or social media</li>
                                                <li>Provide feedback or participate in surveys</li>
                                            </ul>
                                            <p className="mt-2 leading-relaxed">
                                                This information may include your name, email address, phone number, delivery address, and payment information.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary mb-2">Automatically Collected Information</h3>
                                            <p className="leading-relaxed">
                                                When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <UserCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        How We Use Your Information
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <p className="leading-relaxed">We use the information we collect to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Process and fulfill your orders and reservations</li>
                                            <li>Communicate with you about your orders, reservations, or inquiries</li>
                                            <li>Send you marketing communications (with your consent)</li>
                                            <li>Improve our services and customer experience</li>
                                            <li>Detect and prevent fraud or security issues</li>
                                            <li>Comply with legal obligations</li>
                                            <li>Analyze website usage and optimize our online presence</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Information Sharing */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Eye className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Information Sharing and Disclosure
                                    </h2>
                                    <div className="space-y-4 text-gray-300">
                                        <p className="leading-relaxed">
                                            We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li><strong className="text-white">Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, delivery services, or marketing assistance.</li>
                                            <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.</li>
                                            <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                                            <li><strong className="text-white">Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or that of our customers or others.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Data Security */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Lock className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Data Security
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <p className="leading-relaxed">
                                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Encryption of sensitive data during transmission</li>
                                            <li>Secure storage systems with restricted access</li>
                                            <li>Regular security assessments and updates</li>
                                            <li>Employee training on data protection practices</li>
                                        </ul>
                                        <p className="leading-relaxed mt-3">
                                            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Your Rights and Choices
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <p className="leading-relaxed">You have the right to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                                            <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                            <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                                            <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                                            <li><strong className="text-white">Data Portability:</strong> Request transfer of your data to another service provider</li>
                                        </ul>
                                        <p className="leading-relaxed mt-3">
                                            To exercise these rights, please contact us using the information provided below.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cookies */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Cookies and Tracking Technologies
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-relaxed">
                                        We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our website.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Children's Privacy */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Children's Privacy
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-relaxed">
                                        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Changes to Policy */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Changes to This Privacy Policy
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-relaxed">
                                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date. We encourage you to review this policy periodically.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Contact Us
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <p className="leading-relaxed">
                                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                                        </p>
                                        <div className="space-y-2 mt-4">
                                            <p className="text-white font-semibold">Taste of China</p>
                                            <p>Near Water Tank Lane, Bapuji Nagar</p>
                                            <p>Bhubaneswar, Odisha</p>
                                            <p>Phone: <a href="tel:+916746550550" className="text-secondary hover:underline">+91 6746 550 550</a></p>
                                            <p>Email: <a href="mailto:info@tasteofchina.in" className="text-secondary hover:underline">info@tasteofchina.in</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
