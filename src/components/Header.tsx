import { Search, ShoppingCart, User, Menu, CreditCard, MapPin, Phone, LogIn } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLoginDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Face', value: 'face' },
    { label: 'Hair', value: 'hair' },
    { label: 'Body', value: 'body' },
    { label: 'Combos', value: 'combos' },
    { label: 'Ingredients', value: 'ingredients' },
    { label: 'About Us', value: 'about' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <img 
                src="/src/lavantalogo.jpg" 
                alt="Lavanta Naturals Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="flex">
                  <div className="relative flex-1 group">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#6DBE45] focus:border-transparent transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-300 transform peer-focus:scale-75 peer-focus:-translate-y-2 peer-focus:text-[#6DBE45] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 origin-left">
                      Search for skincare products...
                    </label>
                  </div>
                  <button className="bg-[#6DBE45] text-white px-6 py-3 rounded-r-lg hover:bg-[#5da838] transition-colors flex items-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Search</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
              {/* Cart */}
              <button className="flex items-center space-x-3 text-gray-600 hover:text-[#6DBE45] transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-[#6DBE45] relative">
                <ShoppingCart className="w-7 h-7" />
                <span className="font-semibold text-lg">Cart</span>
                <span className="absolute -top-2 -right-2 bg-[#6DBE45] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-600 hover:text-[#6DBE45] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-6 h-6" />
              </button>

              {/* Login Dropdown */}
              <div className="relative hidden md:block" ref={dropdownRef}>
                <button 
                  className="flex items-center space-x-3 text-gray-600 hover:text-[#6DBE45] transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-[#6DBE45]"
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                >
                  <User className="w-7 h-7" />
                  <span className="font-semibold text-lg">Login</span>
                </button>
                
                {loginDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="py-2">
                      <button 
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          onNavigate('profile');
                          setLoginDropdownOpen(false);
                        }}
                      >
                        <User className="w-5 h-5 text-[#6DBE45]" />
                        <span className="text-gray-700">Your Profile</span>
                      </button>
                      
                      <button 
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          onNavigate('orders');
                          setLoginDropdownOpen(false);
                        }}
                      >
                        <ShoppingCart className="w-5 h-5 text-[#6DBE45]" />
                        <span className="text-gray-700">Your Orders</span>
                      </button>
                      
                      <button 
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          onNavigate('cards');
                          setLoginDropdownOpen(false);
                        }}
                      >
                        <CreditCard className="w-5 h-5 text-[#6DBE45]" />
                        <span className="text-gray-700">Saved Cards</span>
                      </button>
                      
                      <button 
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          onNavigate('address');
                          setLoginDropdownOpen(false);
                        }}
                      >
                        <MapPin className="w-5 h-5 text-[#6DBE45]" />
                        <span className="text-gray-700">Manage Address</span>
                      </button>
                      
                      <button 
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          onNavigate('contact');
                          setLoginDropdownOpen(false);
                        }}
                      >
                        <Phone className="w-5 h-5 text-[#6DBE45]" />
                        <span className="text-gray-700">Contact Us</span>
                      </button>
                      
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <button 
                          className="w-full mx-4 bg-[#6DBE45] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5da838] transition-colors flex items-center justify-center space-x-2"
                          onClick={() => {
                            onNavigate('login');
                            setLoginDropdownOpen(false);
                          }}
                        >
                          <LogIn className="w-4 h-4" />
                          <span>LOGIN</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
          </div>

      {/* Bottom Navigation Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 py-3 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#6DBE45] hover:scale-110 transform whitespace-nowrap ${
                  currentPage === item.value ? 'text-[#6DBE45] font-semibold' : 'text-gray-700'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </nav>
          </div>
        </div>

      {/* Mobile Menu */}
        {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 transform ${
                    currentPage === item.value ? 'bg-[#DFC5FE] text-[#6DBE45] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          </div>
        )}
    </header>
  );
}
