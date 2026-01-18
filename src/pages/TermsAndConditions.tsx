import { AlertCircle, CreditCard, FileText, Package, Scale, ShieldCheck } from 'lucide-react';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
                            <FileText className="w-10 h-10 text-secondary" />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            Terms <span className="text-secondary">& Conditions</span>
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
                                Welcome to Taste of China. These Terms and Conditions ("Terms") govern your use of our restaurant services, including dine-in, takeout, delivery, and online ordering. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
                            </p>
                        </div>

                        {/* Acceptance of Terms */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Acceptance of Terms
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <p className="leading-relaxed">
                                            By visiting our restaurant, placing an order, or using our services in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you should not use our services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Package className="w-6 h-6 text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Our Services
                                    </h2>
                                    <div className="space-y-4 text-gray-300">
                                        <p className="leading-relaxed">Taste of China offers the following services:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li><strong className="text-white">Dine-In Service:</strong> Enjoy authentic Chinese cuisine in our restaurant</li>
                                            <li><strong className="text-white">Takeout Orders:</strong> Order food for pickup at our location</li>
                                            <li><strong className="text-white">Delivery Service:</strong> Have your order delivered to your specified address</li>
                                            <li><strong className="text-white">Reservations:</strong> Book tables for your dining experience</li>
                                            <li><strong className="text-white">Catering:</strong> Special event and party catering services</li>
                                        </ul>
                                        <p className="leading-relaxed mt-3">
                                            We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Orders and Payments */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <CreditCard className="w-6 h-6 text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Orders and Payment
                                    </h2>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary mb-2">Order Placement</h3>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>All orders are subject to availability and acceptance</li>
                                                <li>We reserve the right to refuse or cancel any order at our discretion</li>
                                                <li>Order confirmations are sent via SMS, email, or phone</li>
                                                <li>Menu items and prices are subject to change without notice</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary mb-2">Payment Terms</h3>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>Payment is required at the time of order placement or upon delivery</li>
                                                <li>We accept cash, credit cards, debit cards, and digital payment methods</li>
                                                <li>All prices are listed in Indian Rupees (INR)</li>
                                                <li>Applicable taxes and delivery charges will be added to your order total</li>
                                                <li>You are responsible for ensuring accurate payment information</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary mb-2">Delivery</h3>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>Delivery times are estimates and not guaranteed</li>
                                                <li>Delivery fees vary based on distance and order value</li>
                                                <li>You must provide accurate delivery address and contact information</li>
                                                <li>Orders may be delayed due to weather, traffic, or other unforeseen circumstances</li>
                                                <li>We are not responsible for orders delivered to incorrect addresses provided by customers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cancellations and Refunds */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <AlertCircle className="w-6 h-6 text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Cancellations and Refunds
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li><strong className="text-white">Cancellations:</strong> Orders can be cancelled within 5 minutes of placement. After preparation begins, cancellations may not be possible.</li>
                                            <li><strong className="text-white">Refunds:</strong> Refunds are issued only in cases of order errors, quality issues, or non-delivery. Refund requests must be made within 24 hours.</li>
                                            <li><strong className="text-white">Quality Issues:</strong> If you're unsatisfied with your order quality, please contact us immediately with photos and details.</li>
                                            <li><strong className="text-white">Refund Processing:</strong> Approved refunds will be processed within 7-10 business days to the original payment method.</li>
                                            <li><strong className="text-white">No Refund After Consumption:</strong> Refunds are not available for food that has been partially or fully consumed unless there's a serious quality or safety issue.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Food Safety and Allergies */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Food Safety and Allergies
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>We follow strict food safety and hygiene standards</li>
                                        <li>Our menu may contain allergens including nuts, dairy, soy, gluten, and seafood</li>
                                        <li>Please inform us of any food allergies or dietary restrictions when ordering</li>
                                        <li>While we take precautions, we cannot guarantee complete allergen-free preparation due to shared kitchen facilities</li>
                                        <li>Customers with severe allergies should exercise caution and consult with our staff</li>
                                        <li>We are not liable for allergic reactions if allergen information was not disclosed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Reservations */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Reservations
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Reservations are subject to availability and must be confirmed by our staff</li>
                                        <li>We hold reservations for 15 minutes past the booking time</li>
                                        <li>Please notify us at least 2 hours in advance if you need to cancel or modify your reservation</li>
                                        <li>No-shows or late cancellations may affect future reservation privileges</li>
                                        <li>Group reservations (8+ guests) require advance booking and may require a deposit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Customer Conduct */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Customer Conduct
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-relaxed">
                                        We expect all customers to conduct themselves respectfully. We reserve the right to refuse service to anyone who:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Behaves in a disruptive, abusive, or threatening manner</li>
                                        <li>Is under the influence of alcohol or drugs to an unacceptable degree</li>
                                        <li>Violates health and safety regulations</li>
                                        <li>Engages in illegal activities on our premises</li>
                                        <li>Harasses staff or other customers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Liability */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Scale className="w-6 h-6 text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Limitation of Liability
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <p className="leading-relaxed">
                                            To the fullest extent permitted by law, Taste of China shall not be liable for:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Indirect, incidental, special, or consequential damages</li>
                                            <li>Loss of profits, data, or business opportunities</li>
                                            <li>Personal injury or property damage unless caused by our negligence</li>
                                            <li>Delays or failures in service due to circumstances beyond our control (force majeure)</li>
                                        </ul>
                                        <p className="leading-relaxed mt-3">
                                            Our total liability for any claim arising from our services shall not exceed the amount paid for the specific order or service in question.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Intellectual Property
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-relaxed">
                                        All content on our website, including text, graphics, logos, images, and recipes, is the property of Taste of China and protected by intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Changes to Terms */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Changes to Terms
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-relaxed">
                                        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div className="space-y-6">
                            <div className="bg-card/50 border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Governing Law
                                </h2>
                                <div className="space-y-3 text-gray-300">
                                    <p className="leading-relaxed">
                                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-lg p-6">
                                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                                    <FileText className="w-6 h-6 text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                                        Contact Information
                                    </h2>
                                    <div className="space-y-3 text-gray-300">
                                        <p className="leading-relaxed">
                                            For questions or concerns regarding these Terms and Conditions, please contact us:
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

                        {/* Acknowledgment */}
                        <div className="border-t border-border pt-8">
                            <p className="text-center text-gray-400 italic">
                                By using Taste of China's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
