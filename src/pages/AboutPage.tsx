import { Mail, Linkedin, Instagram, Facebook, Target, Eye, Heart, Award, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const founders = [
    {
      name: 'Badal Raj',
      role: 'Founder and CEO',
      image: '/src/badalraj.jpg',
      email: 'badalraj1824@gmail.com',
      linkedin: 'https://www.linkedin.com/in/badal-raj-045921290',
      instagram: 'https://www.instagram.com/badal_raj.45?igsh=Zmt1OWM4cjJqanR2',
      facebook: 'https://www.facebook.com/share/19ww28tBM4/',
      bio: 'Passionate about creating safe and effective skincare solutions, Badal founded Lavanta Naturals with a vision to make toxin-free products accessible to everyone. With a background in business and a deep commitment to quality, he leads the company towards innovation and customer trust.'
    },
    {
      name: 'Aditi Bundela',
      role: 'Co-Founder',
      image: '/src/aditi.jpg',
      email: 'aditibundela094@gmail.com',
      linkedin: 'https://www.linkedin.com/in/aditi-bundela-5519a82aa',
      instagram: 'https://www.instagram.com/aditi_bundela___?igsh=MTd1MG56aGU0cTc5NA==',
      facebook: 'https://facebook.com',
      bio: 'With a keen eye for product development and customer experience, Aditi brings creativity and strategic thinking to Lavanta Naturals. Her dedication to natural ingredients and sustainable practices shapes the brand\'s commitment to quality and authenticity.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every product is crafted with our customers\' wellbeing in mind'
    },
    {
      icon: Sparkles,
      title: 'Quality Excellence',
      description: 'Rigorous testing and premium natural ingredients in every formulation'
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'Complete honesty about ingredients, sourcing, and manufacturing'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuously researching and developing better skincare solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F8F8F8]">
      <div className="bg-gradient-to-r from-[#DFC5FE] to-[#6DBE45]/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#6DBE45] mb-6">Our Story</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Founded by young entrepreneurs with a passion for natural beauty and wellness
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[#6DBE45] mb-6 text-center">About Lavanta Naturals</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Lavanta Naturals is a skincare startup founded by young entrepreneurs with a vision to make skincare safe, effective, and trustworthy. Our focus is on creating toxin-free and dermatologically tested products that are suitable for all skin types.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With quality, innovation, and customer trust at the core, Lavanta Naturals aims to build a strong presence in the skincare industry. We believe that everyone deserves access to premium skincare products that are both natural and effective.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment to transparency, sustainability, and excellence drives everything we do. From sourcing the finest natural ingredients to rigorous testing protocols, we ensure that every product meets the highest standards of quality and safety.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#DFC5FE] to-[#DFC5FE]/50 rounded-2xl p-8 text-center shadow-lg">
            <Target className="w-12 h-12 text-[#6DBE45] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide safe, effective, and toxin-free skincare solutions that enhance natural beauty and promote healthy skin for everyone.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#6DBE45]/20 to-[#6DBE45]/10 rounded-2xl p-8 text-center shadow-lg">
            <Eye className="w-12 h-12 text-[#6DBE45] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted leader in the natural skincare industry, known for innovation, quality, and unwavering commitment to customer wellbeing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#DFC5FE]/50 to-white rounded-2xl p-8 text-center shadow-lg">
            <Heart className="w-12 h-12 text-[#6DBE45] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Our Values</h3>
            <p className="text-gray-700 leading-relaxed">
              Transparency, quality, sustainability, and customer trust guide every decision we make and every product we create.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#6DBE45] mb-12 text-center">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45]/20 p-8 text-center">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto border-8 border-white shadow-xl"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-gray-800 text-center mb-1">{founder.name}</h3>
                  <p className="text-[#6DBE45] font-semibold text-center mb-4">{founder.role}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{founder.bio}</p>

                  <div className="space-y-3 mb-6">
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex items-center space-x-3 text-gray-600 hover:text-[#6DBE45] transition-colors group"
                    >
                      <div className="bg-[#DFC5FE]/30 p-2 rounded-full group-hover:bg-[#DFC5FE] transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{founder.email}</span>
                    </a>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#DFC5FE]/30 p-3 rounded-full hover:bg-[#DFC5FE] transition-colors transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-[#6DBE45]" />
                    </a>
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#DFC5FE]/30 p-3 rounded-full hover:bg-[#DFC5FE] transition-colors transform hover:scale-110"
                    >
                      <Instagram className="w-5 h-5 text-[#6DBE45]" />
                    </a>
                    <a
                      href={founder.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#DFC5FE]/30 p-3 rounded-full hover:bg-[#DFC5FE] transition-colors transform hover:scale-110"
                    >
                      <Facebook className="w-5 h-5 text-[#6DBE45]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8F8F8] to-white rounded-3xl p-8 md:p-12">
          <h2 className="font-serif text-3xl font-bold text-[#6DBE45] mb-8 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] p-3 rounded-xl">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
