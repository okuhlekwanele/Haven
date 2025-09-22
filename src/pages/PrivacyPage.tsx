import React from 'react';
import { Shield, Eye, Lock, Database } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600">Last updated: January 1, 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-emerald-50 p-6 rounded-lg mb-8">
          <p className="text-emerald-800 mb-0">
            At StyleCraft Boutique, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>
        </div>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Database className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Create an account on our website</li>
                <li>Make a purchase or attempt to make a purchase</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Types of Personal Data:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-blue-700 space-y-1">
                  <li>• Name and contact information</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Email address and phone number</li>
                </ul>
                <ul className="text-blue-700 space-y-1">
                  <li>• Payment information</li>
                  <li>• Order history and preferences</li>
                  <li>• Communication preferences</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages viewed and time spent on our site</li>
                <li>Referring website and search terms used</li>
                <li>Cookie and tracking technology data</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Eye className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Uses</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Process and fulfill your orders</li>
                <li>Communicate about your orders and account</li>
                <li>Provide customer service and support</li>
                <li>Send marketing communications (with consent)</li>
                <li>Improve our products and services</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Marketing Communications</h4>
                <ul className="text-amber-700 space-y-1">
                  <li>• New product announcements</li>
                  <li>• Special offers and promotions</li>
                  <li>• Style tips and fashion trends</li>
                  <li>• Exclusive member benefits</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Service Improvements</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Website functionality optimization</li>
                  <li>• Product recommendation algorithms</li>
                  <li>• Customer experience enhancement</li>
                  <li>• Quality assurance programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing & Disclosure</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">We DO NOT sell your personal information</h4>
              <p className="text-red-700">
                StyleCraft Boutique does not sell, trade, or rent your personal information to third parties for their marketing purposes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limited Sharing</h3>
              <p className="text-gray-600 mb-4">We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Service Providers:</strong> Trusted partners who help us operate our business (shipping, payment processing, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Protection:</strong> To protect our rights, safety, and property</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> Any other sharing with your explicit permission</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Lock className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">4. Data Security</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-600">
              We implement comprehensive security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">Technical Safeguards</h4>
                <ul className="text-emerald-700 space-y-1">
                  <li>• SSL encryption for all transactions</li>
                  <li>• Secure data storage and transmission</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Firewall and intrusion detection</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Administrative Controls</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Limited employee access to data</li>
                  <li>• Regular staff training on privacy</li>
                  <li>• Confidentiality agreements</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-amber-800">
                <strong>Important Note:</strong> While we use industry-standard security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but continuously work to protect your information.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Privacy Rights</h2>
          
          <div className="space-y-6">
            <p className="text-gray-600">
              You have several rights regarding your personal information:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Access & Correction</h4>
                  <p className="text-blue-700">Request access to your personal data and correct any inaccuracies</p>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Data Portability</h4>
                  <p className="text-emerald-700">Request a copy of your data in a structured, machine-readable format</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Deletion</h4>
                  <p className="text-amber-700">Request deletion of your personal data (subject to legal requirements)</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Marketing Opt-Out</h4>
                  <p className="text-purple-700">Unsubscribe from marketing communications at any time</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Exercise Your Rights</h3>
              <p className="text-gray-600 mb-4">To exercise any of these rights, please contact us at:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-center space-y-2">
                  <p className="font-medium">Privacy Team</p>
                  <p className="text-gray-600">Email: privacy@stylecraftboutique.com</p>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Cookies & Tracking</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                <li><strong>Performance Cookies:</strong> Help us analyze website usage and improve performance</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and enhance user experience</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with your consent)</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Cookie Management</h4>
              <p className="text-blue-700">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-green-800 mb-2">Account Data</h4>
                <p className="text-green-700">Retained while account is active plus 3 years</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-blue-800 mb-2">Order History</h4>
                <p className="text-blue-700">Retained for 7 years for tax and legal purposes</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-purple-800 mb-2">Marketing Data</h4>
                <p className="text-purple-700">Retained until you opt-out or 2 years of inactivity</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. International Data Transfers</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Your personal information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Transfer Protections</h4>
              <ul className="text-amber-700 space-y-1">
                <li>• Adequacy decisions by relevant authorities</li>
                <li>• Standard contractual clauses</li>
                <li>• Binding corporate rules</li>
                <li>• Certification schemes and codes of conduct</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Updates to This Policy</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Notification of Changes</h4>
              <p className="text-emerald-700">
                We will notify you of any material changes by email and/or by posting a notice on our website. Changes become effective 30 days after posting.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
          
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="space-y-2">
              <p className="font-medium">StyleCraft Boutique - Privacy Team</p>
              <p className="text-gray-600">123 Fashion Street, Style City, SC 12345</p>
              <p className="text-gray-600">Email: privacy@stylecraftboutique.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                For urgent privacy matters, please mark your communication as "URGENT - PRIVACY" and we will respond within 48 hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;