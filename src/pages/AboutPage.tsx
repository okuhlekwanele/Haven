import React from 'react';
import { Heart, Users, Award, Globe, Sparkles, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Fashion industry veteran with 15 years of experience in luxury retail and sustainable fashion.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Operations expert specializing in supply chain optimization and customer experience.'
    },
    {
      name: 'Emily Thompson',
      role: 'Lead Stylist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Professional stylist and fashion consultant helping customers discover their unique style.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'Every piece in our collection is carefully selected for its exceptional quality and craftsmanship.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We provide personalized service and support every step of the way.'
    },
    {
      icon: Globe,
      title: 'Sustainable Fashion',
      description: 'We are committed to ethical practices and supporting brands that care about environmental responsibility.'
    },
    {
      icon: Sparkles,
      title: 'Style Innovation',
      description: 'We stay ahead of trends while honoring timeless elegance, bringing you the best of both worlds.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About StyleCraft Boutique</h1>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Where passion meets fashion. We're more than just a boutique—we're your style partners, 
          curating exceptional pieces that celebrate your individuality and confidence.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                StyleCraft Boutique was born from a simple belief: everyone deserves to feel confident and beautiful in what they wear. Founded in 2020, we started as a small online boutique with a big dream—to make high-quality, stylish fashion accessible to everyone.
              </p>
              <p>
                Our journey began when our founder, Sarah Chen, noticed a gap in the market for curated fashion that balanced quality, style, and affordability. With her background in luxury retail and passion for sustainable fashion, she set out to create a boutique that would redefine the shopping experience.
              </p>
              <p>
                Today, StyleCraft Boutique has grown into a trusted destination for fashion lovers worldwide, but we've never lost sight of our core mission: to help you discover and express your unique style with confidence.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="StyleCraft Boutique Story"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">4+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
          <p className="text-xl text-gray-600">Guiding principles that drive everything we do</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-blue-800 text-lg leading-relaxed">
              To empower individuals through thoughtfully curated fashion that celebrates personal style and quality craftsmanship. We strive to create a shopping experience that's personal, sustainable, and inspiring—helping our customers feel confident and beautiful every day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-emerald-900">Our Vision</h3>
            </div>
            <p className="text-emerald-800 text-lg leading-relaxed">
              To become the world's most trusted boutique for conscious fashion lovers who value quality, sustainability, and timeless design. We envision a future where every purchase contributes to a more beautiful and sustainable fashion industry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">The foundation of everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The passionate people behind StyleCraft Boutique</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">1,200+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">5,000+</div>
              <div className="text-blue-100">Orders Fulfilled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">4.9</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-blue-100">Curated Brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600">Honored to be recognized by industry leaders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl">
            <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">Best Online Boutique 2023</h3>
            <p className="text-amber-800">Fashion Retail Excellence Awards</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl">
            <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Sustainable Fashion Leader</h3>
            <p className="text-emerald-800">Green Business Council 2023</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Customer Choice Award</h3>
            <p className="text-blue-800">E-commerce Excellence 2023</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-50 p-12 rounded-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Discover Your Style?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have found their perfect pieces with StyleCraft Boutique. 
          Let us help you build a wardrobe that reflects your unique personality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Shop Our Collection
          </a>
          <a
            href="mailto:hello@stylecraftboutique.com"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;