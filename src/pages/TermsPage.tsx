import React from 'react';
import { FileText, Scale, Shield } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-xl text-gray-600">Last updated: January 1, 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-blue-800 mb-0">
            Welcome to StyleCraft Boutique. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions.
          </p>
        </div>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Scale className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p>
              By accessing and using StyleCraft Boutique's website (stylecraftboutique.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <p>
              These Terms of Service are effective as of January 1, 2024, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Website Usage</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Browse and purchase products for personal use</li>
                <li>Create user accounts with accurate information</li>
                <li>Contact customer service for support</li>
                <li>Leave reviews and feedback on purchased items</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Using the website for any unlawful purpose</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Reproducing, distributing, or reverse engineering our content</li>
                <li>Impersonating others or providing false information</li>
                <li>Interfering with the website's operation or security</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Product Information & Pricing</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Pricing Policy:</h4>
              <ul className="list-disc pl-5 text-amber-700 space-y-1">
                <li>All prices are in USD and include applicable taxes</li>
                <li>Prices may change without notice</li>
                <li>Sale prices are valid for limited periods</li>
                <li>We reserve the right to limit quantities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Orders & Payment</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Processing</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Order confirmation does not guarantee acceptance</li>
                <li>Processing typically takes 1-2 business days</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Payment is due at the time of order</li>
                <li>We accept PayPal and cash on delivery</li>
                <li>All transactions are processed securely</li>
                <li>Currency conversion fees may apply for international orders</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Shipping & Returns</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Detailed shipping and return policies are available on our <a href="/delivery" className="text-blue-600 hover:text-blue-800 underline">Delivery Information</a> page. Key points include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">Shipping</h4>
                <ul className="text-emerald-700 space-y-1">
                  <li>• Free shipping on orders over $100</li>
                  <li>• 1-7 business day delivery options</li>
                  <li>• International shipping available</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Returns</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• 30-day return window</li>
                  <li>• Items must be unused with tags</li>
                  <li>• Free return shipping provided</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">6. Intellectual Property</h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p>
              All content on this website, including text, graphics, logos, images, audio clips, and software, is the property of StyleCraft Boutique or its content suppliers and is protected by copyright laws.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Copyright Notice</h3>
              <p>
                © 2024 StyleCraft Boutique. All rights reserved. No part of this website may be reproduced, distributed, transmitted, or used without written permission from StyleCraft Boutique.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              StyleCraft Boutique shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or products.
            </p>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Disclaimers:</h4>
              <ul className="text-red-700 space-y-1">
                <li>• Products are sold "as is" without warranties</li>
                <li>• We are not responsible for typographical errors</li>
                <li>• Color variations may occur due to monitor differences</li>
                <li>• Sizing may vary between brands and styles</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Governing Law</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of the United States.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Changes to Terms</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              StyleCraft Boutique reserves the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the new terms.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 mb-0">
                <strong>Notification:</strong> Significant changes to these terms will be communicated via email to registered users and prominently displayed on our website.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Information</h2>
          
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            
            <div className="space-y-2">
              <p className="font-medium">StyleCraft Boutique</p>
              <p className="text-gray-600">123 Fashion Street, Style City, SC 12345</p>
              <p className="text-gray-600">Email: legal@stylecraftboutique.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;