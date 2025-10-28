import { useState } from 'react';
import { Mail, Instagram, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F8F8F8]">
      <div className="bg-gradient-to-r from-[#DFC5FE] to-[#6DBE45]/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#6DBE45] mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-700">
            Have questions? We&apos;re here to help and would love to hear from you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#6DBE45] mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our customer support team is always ready to assist you with any questions about our products, orders, or skincare advice.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Email Us</h3>
                  <a href="mailto:lavantaskincare.co@gmail.com" className="text-[#6DBE45] hover:underline">
                    lavantaskincare.co@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] p-3 rounded-xl">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/lavanta.naturals?igsh=MXVjdXN4YjhkMDJwYg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6DBE45] hover:underline"
                  >
                    @lavantanaturals
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Join our community on Instagram</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Customer Support</h3>
                  <p className="text-gray-700">Monday - Friday: 9 AM - 6 PM IST</p>
                  <p className="text-sm text-gray-600 mt-1">Saturday: 10 AM - 4 PM IST</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-700">India</p>
                  <p className="text-sm text-gray-600 mt-1">Shipping available nationwide</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#DFC5FE]/20 to-[#6DBE45]/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="font-serif text-3xl font-bold text-[#6DBE45] mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-[#6DBE45]/10 border-2 border-[#6DBE45] rounded-2xl p-8 text-center">
                  <div className="bg-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6DBE45] focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6DBE45] focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6DBE45] focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6DBE45] focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6DBE45] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#DFC5FE] to-[#6DBE45] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Need Skincare Advice?
          </h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Our skincare experts are here to help you find the perfect products for your skin type and concerns.
          </p>
          <Button variant="outline" className="bg-white text-[#6DBE45] border-white hover:bg-gray-100">
            Chat with an Expert
          </Button>
        </div>
      </div>
    </div>
  );
}
