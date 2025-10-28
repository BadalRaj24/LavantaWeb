import { Sparkles, Leaf, ShieldCheck, Award, Heart } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const bestSellers = [
    {
      id: '1',
      name: 'Lavanta Glow Face Serum',
      price: 599,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'Best Seller'
    },
    {
      id: '2',
      name: 'Natural Aloe Vera Face Wash',
      price: 399,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4046654/pexels-photo-4046654.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'New Launch'
    },
    {
      id: '3',
      name: 'Hydrating Night Cream',
      price: 799,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'Toxin-Free'
    },
    {
      id: '4',
      name: 'Vitamin C Brightening Serum',
      price: 699,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/5428835/pexels-photo-5428835.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'Best Seller'
    },
    {
      id: '5',
      name: 'Nourishing Hair Oil',
      price: 549,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'New Launch'
    },
    {
      id: '6',
      name: 'Body Butter - Lavender',
      price: 649,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'Toxin-Free'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'The Glow Face Serum transformed my skin in just 2 weeks! My complexion is brighter and more even. Best natural product I have used!'
    },
    {
      name: 'Rahul Mehta',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'Finally found a brand that is truly toxin-free and works! The aloe vera face wash is gentle yet effective. Highly recommended!'
    },
    {
      name: 'Sneha Kapoor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'Love the natural ingredients! My sensitive skin feels nourished and healthy. The night cream is my absolute favorite.'
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-r from-[#DFC5FE] to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#6DBE45] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DFC5FE] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#6DBE45] leading-tight">
              Glow Naturally with Lavanta Naturals
            </h1>
            <p className="text-xl text-gray-700">
              Crafted with Aloe Vera & Natural Extracts — For All Skin Types
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => onNavigate('products')}>Shop Now</Button>
              <Button variant="outline" onClick={() => onNavigate('about')}>Our Story</Button>
            </div>
            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <Leaf className="w-6 h-6 text-[#6DBE45]" />
                <span className="text-sm font-medium">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-6 h-6 text-[#6DBE45]" />
                <span className="text-sm font-medium">Toxin-Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-[#6DBE45]" />
                <span className="text-sm font-medium">Cruelty-Free</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DFC5FE]/30 to-[#6DBE45]/20 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Lavanta Naturals Face Serum"
              className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#6DBE45] mb-4">Our Best Sellers</h2>
          <p className="text-gray-600 text-lg">Discover our most loved skincare essentials</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => onNavigate('product', product.id)}
              onAddToCart={() => alert('Added to cart!')}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={() => onNavigate('products')}>View All Products</Button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#F8F8F8] to-[#DFC5FE]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#6DBE45] mb-4">Why Choose Lavanta?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe in pure, natural, and sustainable skincare that works for everyone
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Natural Ingredients</h3>
              <p className="text-gray-600">Only the finest botanical extracts, free from harmful chemicals</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Cruelty-Free</h3>
              <p className="text-gray-600">Never tested on animals, always made with compassion</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#DFC5FE] to-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Dermatologically Tested</h3>
              <p className="text-gray-600">Rigorously tested for safety and efficacy on all skin types</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#6DBE45] mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Real results from real people</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-[#DFC5FE]/20 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 fill-[#6DBE45] text-[#6DBE45]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.review}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#DFC5FE] to-[#6DBE45] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Save More with Nature&apos;s Combos
          </h2>
          <p className="text-white text-lg mb-6">
            Shop the Lavanta Glow Set and get complete skincare at exclusive prices
          </p>
          <Button variant="outline" className="bg-white text-[#6DBE45] border-white hover:bg-gray-100" onClick={() => onNavigate('combos')}>
            Explore Combos
          </Button>
        </div>
      </section>
    </div>
  );
}
