import React, { useState } from "react";
import { Eye, Heart, ExternalLink } from "lucide-react";
import FlowerPre1 from "../assets/FlowerPre1.png";
import FlowerPre2 from "../assets/FlowerPre2.png";
import FlowerPre3 from "../assets/FlowerPre3.png";
import ClockBlack from "../assets/ClockBlack.png";
import Clock2 from "../assets/Clock2.png";
import KeyChain1 from "../assets/KeyChain1.png";
import KeyChain2 from "../assets/KeyChain2.png";
import KeyChain3 from "../assets/KeyChain3.png";
import Wood1 from "../assets/Wood1.png";
import Wood2 from "../assets/Wood2.png";
import Wood3 from "../assets/Wood3.png";
import Wood4 from "../assets/Wood4.png";
import Miniature1 from "../assets/Miniature1.png";
import Miniature2 from "../assets/Miniature2.png";
import Miniature3 from "../assets/Miniature3.png";
import Miniature4 from "../assets/Miniature4.png";
import Miniature5 from "../assets/Miniature5.png";
import Miniature6 from "../assets/Miniature6.png";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "All",
    "Miniature",
    "Wooden Frames",
    "Clock",
    "Key Chains",
    "Preservation",
  ];

  // const categories = [
  //   "All",
  //   "Flower Preservation",
  //   "Resin Clock",
  //   "Wodden Frames",
  //   "Key Chains",
  // ];
  const artPieces = [
    {
      id: 1,
      title: "Flower Preservation",
      category: "Preservation",
      image: FlowerPre1,
      // price: "₹499",
      likes: 124,
    },
    {
      id: 2,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood3,
      // price: "₹1299",
      likes: 89,
    },

    {
      id: 3,
      title: "Customized Clock",
      category: "Clock",
      image: ClockBlack,
      // price: "₹499",
      likes: 70,
    },
    {
      id: 4,
      title: "Customized Clock",
      category: "Clock",
      image: Clock2,
      // price: "₹599",
      likes: 123,
    },
    {
      id: 5,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood1,
      // price: "₹1100",
      likes: 134,
    },
    {
      id: 6,
      title: "Custom KeyChains",
      category: "Key Chains",
      image: KeyChain3,
      // price: "₹69",
      likes: 175,
    },
    {
      id: 7,
      title: "Custom KeyChains",
      category: "Key Chains",
      image: KeyChain2,
      // price: "₹49",
      likes: 162,
    },
    {
      id: 8,
      title: "Custom KeyChains",
      category: "Key Chains",
      image: KeyChain1,
      // price: "₹49",
      likes: 125,
    },
    {
      id: 9,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood4,
      // price: "₹1320",
      likes: 89,
    },
    {
      id: 10,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood2,
      // price: "₹1399",
      likes: 89,
    },
    {
      id: 11,
      title: "Miniature",
      category: "Miniature",
      image: Miniature1,
      // price: "₹1499",
      likes: 89,
    },
    {
      id: 12,
      title: "Miniature",
      category: "Miniature",
      image: Miniature2,
      // price: "₹1599",
      likes: 89,
    },
    {
      id: 13,
      title: "Miniature",
      category: "Miniature",
      image: Miniature3,
      // price: "₹1699",
      likes: 189,
    },
    {
      id: 14,
      title: "Miniature",
      category: "Miniature",
      image: Miniature4,
      // price: "₹1499",
      likes: 146,
    },
    {
      id: 15,
      title: "Miniature",
      category: "Miniature",
      image: Miniature5,
      // price: "₹1499",
      likes: 349,
    },
    {
      id: 16,
      title: "Miniature",
      category: "Miniature",
      image: Miniature6,
      // price: "₹1399",
      likes: 145,
    },
    {
      id: 17,
      title: "Flower Preservation",
      category: "Preservation",
      image: FlowerPre2,
      // price: "₹499",
      likes: 124,
    },
    {
      id: 18,
      title: "Flower Preservation",
      category: "Preservation",
      image: FlowerPre3,
      // price: "₹499",
      likes: 124,
    },
  ];

  const filteredPieces =
    selectedCategory === "All"
      ? artPieces
      : artPieces.filter((piece) => piece.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Art Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of unique resin art pieces, each one a
            masterpiece of color and creativity
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-purple-100 shadow-md"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay actions */}
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div> */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {piece.title}
                </h3>
                <div className="flex items-center">
                  {/* <span className="text-2xl font-bold text-purple-600">
                    {piece.price}
                  </span> */}
                  <div className="flex items-center text-gray-500">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>{piece.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
