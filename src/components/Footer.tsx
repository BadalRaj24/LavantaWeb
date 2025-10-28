import { Facebook, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#CFAFF7] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/src/lavantalogo.jpg" 
                alt="Lavanta Naturals Logo" 
                className="w-18 h-18 object-contain bg-white rounded-full p-1"
              />
            </div>
            <p className="text-sm text-white/90">Pure, natural, and sustainable skincare for everyone.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#6DBE45] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-[#6DBE45] transition-colors">Best Sellers</button></li>
              <li><button onClick={() => onNavigate('combos')} className="hover:text-[#6DBE45] transition-colors">Combos</button></li>
              <li><button onClick={() => onNavigate('ingredients')} className="hover:text-[#6DBE45] transition-colors">Ingredients</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#6DBE45] transition-colors">Contact Us</button></li>
              <li><button className="hover:text-[#6DBE45] transition-colors">Shipping & Returns</button></li>
              <li><button className="hover:text-[#6DBE45] transition-colors">FAQs</button></li>
              <li><button className="hover:text-[#6DBE45] transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About Lavanta</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#6DBE45] transition-colors">Our Story</button></li>
              <li><button className="hover:text-[#6DBE45] transition-colors">Sustainability</button></li>
              <li><button className="hover:text-[#6DBE45] transition-colors">Certifications</button></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/lavantanaturals" target="_blank" rel="noopener noreferrer" className="hover:text-[#6DBE45] transition-colors transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6DBE45] transition-colors transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:lavantaskincare.co@gmail.com" className="hover:text-[#6DBE45] transition-colors transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; 2025 Lavanta Naturals. All rights reserved. Crafted with love by Badal Raj & Aditi Bundela.</p>
        </div>
      </div>
    </footer>
  );
}
