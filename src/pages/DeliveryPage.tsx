import React from 'react';
import { Truck, Clock, Shield, RotateCcw, Package, Globe } from 'lucide-react';

const DeliveryPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Delivery Information</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about shipping, delivery, returns, and refunds
        </p>
      </div>

      <div className="space-y-12">
        {/* Delivery Methods */}
        <section>
          <div className="flex items-center mb-6">
            <Truck className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Delivery Methods</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Delivery</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Cost:</strong> R149.99 (Free on orders over R1500)</p>
                <p><strong>Time:</strong> 5-7 business days</p>
                <p><strong>Tracking:</strong> Included</p>
                <p><strong>Coverage:</strong> Nationwide</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Express Delivery</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Cost:</strong> R299.99</p>
                <p><strong>Time:</strong> 2-3 business days</p>
                <p><strong>Tracking:</strong> Real-time updates</p>
                <p><strong>Coverage:</strong> Major cities</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Next Day Delivery</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Cost:</strong> R449.99</p>
                <p><strong>Time:</strong> 1 business day</p>
                <p><strong>Tracking:</strong> Real-time updates</p>
                <p><strong>Coverage:</strong> Selected areas</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Shipping</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Cost:</strong> Starting from R599.99</p>
                <p><strong>Time:</strong> 7-14 business days</p>
                <p><strong>Tracking:</strong> International tracking</p>
                <p><strong>Coverage:</strong> 50+ countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Estimated Delivery Times */}
        <section>
          <div className="flex items-center mb-6">
            <Clock className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Estimated Delivery Times</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
                <p className="text-gray-600">1-2 business days</p>
                <p className="text-sm text-gray-500 mt-2">Orders placed by 2 PM EST ship same day</p>
              </div>
              
              <div className="text-center">
                <Truck className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">In Transit</h3>
                <p className="text-gray-600">2-7 business days</p>
                <p className="text-sm text-gray-500 mt-2">Depends on selected shipping method</p>
              </div>
              
              <div className="text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-600">During business hours</p>
                <p className="text-sm text-gray-500 mt-2">Signature required for orders over R3000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Return Policy */}
        <section>
          <div className="flex items-center mb-6">
            <RotateCcw className="h-8 w-8 text-amber-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Return Policy</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">30-Day Return Window</h3>
                <p className="text-gray-600 mb-4">
                  We offer a 30-day return policy from the date of delivery. Items must be returned in their original condition with all tags attached.
                </p>
                
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">What can be returned:</h4>
                  <ul className="text-emerald-700 space-y-1">
                    <li>• Unworn items with original tags</li>
                    <li>• Items in original packaging</li>
                    <li>• Accessories in new condition</li>
                    <li>• Defective or damaged items</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-red-800 mb-2">What cannot be returned:</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• Worn or altered items</li>
                    <li>• Items without original tags</li>
                    <li>• Personalized or custom items</li>
                    <li>• Undergarments for hygiene reasons</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Return</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Contact our customer service team at returns@stylecraftboutique.com</li>
                  <li>Receive your return authorization number and prepaid shipping label</li>
                  <li>Package your items securely with the return form</li>
                  <li>Drop off at any authorized shipping location</li>
                  <li>Track your return using the provided tracking number</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section>
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Refund Policy</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Processing</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Processing Time:</strong> 3-5 business days after we receive your return</p>
                  <p><strong>Credit Card Refunds:</strong> 5-10 business days to appear on your statement</p>
                  <p><strong>PayPal Refunds:</strong> 1-2 business days</p>
                  <p><strong>Store Credit:</strong> Immediate processing</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-900">Original Payment Method</p>
                      <p className="text-sm text-blue-700">Full refund to your original payment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
                    <div>
                      <p className="font-medium text-emerald-900">Store Credit</p>
                      <p className="text-sm text-emerald-700">110% value for future purchases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                    <div>
                      <p className="font-medium text-amber-900">Exchange</p>
                      <p className="text-sm text-amber-700">Direct exchange for different size/color</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Customer Service</h3>
              <p className="text-gray-600 mb-2">Available 24/7</p>
              <p className="font-medium">+1 (555) 123-4567</p>
              <p className="text-blue-600">support@stylecraftboutique.com</p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Returns Department</h3>
              <p className="text-gray-600 mb-2">Monday - Friday, 9 AM - 6 PM EST</p>
              <p className="font-medium">+1 (555) 123-4568</p>
              <p className="text-blue-600">returns@stylecraftboutique.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeliveryPage;