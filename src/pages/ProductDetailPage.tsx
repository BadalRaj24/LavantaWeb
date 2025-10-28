import { useState } from 'react';
import { Star, Leaf, ShieldCheck, Heart, Sparkles, ChevronLeft } from 'lucide-react';
import Button from '../components/Button';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export default function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: productId,
    name: 'Lavanta Glow Face Serum',
    price: 599,
    rating: 4.8,
    reviews: 324,
    volume: '30ml',
    images: [
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience radiant, glowing skin with our premium Lavanta Glow Face Serum. Infused with natural botanical extracts and Aloe Vera, this serum deeply nourishes your skin while promoting a healthy, luminous complexion.',
    benefits: [
      'Brightens and evens skin tone',
      'Deep hydration for 24 hours',
      'Reduces fine lines and wrinkles',
      'Nourishes with natural extracts',
      '100% toxin-free formula',
      'Dermatologically tested'
    ],
    ingredients: 'Aloe Vera, Vitamin C, Hyaluronic Acid, Green Tea Extract, Niacinamide, Natural Botanical Oils',
    usage: 'Apply 2-3 drops to clean, dry skin. Gently massage in upward circular motions until fully absorbed. Use morning and evening for best results.',
    skinTypes: 'All skin types including sensitive skin'
  };

  const customerReviews = [
    {
      name: 'Ananya Verma',
      rating: 5,
      date: 'March 15, 2025',
      review: 'This serum completely transformed my skin! Within just two weeks, I noticed my complexion was brighter and my dark spots were fading. The texture is lightweight and absorbs quickly without any greasiness. Best part - it\'s completely natural and toxin-free!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Rohan Gupta',
      rating: 5,
      date: 'March 10, 2025',
      review: 'I have sensitive skin and was worried about trying new products, but this serum is so gentle! No irritation at all. My skin feels hydrated and looks healthier. The natural ingredients give me confidence that I\'m using something safe.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Priya Singh',
      rating: 5,
      date: 'March 5, 2025',
      review: 'Worth every rupee! The glow is real and noticeable. My friends keep asking what I\'m using. I love that Lavanta Naturals is transparent about their ingredients. This is now a permanent part of my skincare routine.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('products')}
          className="flex items-center space-x-2 text-gray-600 hover:text-[#6DBE45] transition-colors mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="relative bg-gradient-to-br from-[#DFC5FE]/20 to-[#F8F8F8] rounded-3xl p-8 mb-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <Leaf className="absolute top-10 right-10 w-32 h-32 text-[#6DBE45] transform rotate-45" />
                <Leaf className="absolute bottom-10 left-10 w-24 h-24 text-[#6DBE45] transform -rotate-12" />
              </div>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-contain relative z-10"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#6DBE45] scale-105' : 'border-gray-200 hover:border-[#DFC5FE]'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-[#6DBE45] text-white text-xs px-3 py-1 rounded-full font-medium">Best Seller</span>
              <span className="bg-[#DFC5FE] text-[#6DBE45] text-xs px-3 py-1 rounded-full font-medium">Toxin-Free</span>
            </div>

            <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>

            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-[#6DBE45] text-[#6DBE45]' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-3 text-gray-600">({product.reviews} reviews)</span>
            </div>

            <div className="text-4xl font-bold text-[#6DBE45] mb-6">₹{product.price}</div>

            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            <div className="bg-[#DFC5FE]/10 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-[#6DBE45] mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#6DBE45] font-bold text-xl hover:scale-110 transition-transform"
                  >
                    -
                  </button>
                  <span className="font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#6DBE45] font-bold text-xl hover:scale-110 transition-transform"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-600">Volume: {product.volume}</div>
            </div>

            <div className="flex space-x-4 mb-8">
              <Button className="flex-1" onClick={() => alert('Added to cart!')}>
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1">
                Buy Now
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-[#6DBE45]" />
                <span className="text-gray-700">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#6DBE45]" />
                <span className="text-gray-700">Dermatologically Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-[#6DBE45]" />
                <span className="text-gray-700">Cruelty-Free</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-[#6DBE45] mb-4">Ingredients</h2>
            <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-[#6DBE45] mb-4">How to Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{product.usage}</p>
            <p className="text-sm text-gray-600">
              <strong>Suitable for:</strong> {product.skinTypes}
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl font-bold text-[#6DBE45] mb-8 text-center">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {customerReviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#DFC5FE] shadow-md"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#6DBE45] text-[#6DBE45]" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">&ldquo;{review.review}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
