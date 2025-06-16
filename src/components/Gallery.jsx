import React, { useState } from "react";
import { Heart } from "lucide-react";
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
import Tray1 from "../assets/Tray1.png";
import Tray2 from "../assets/Tray2.png";
import Tray3 from "../assets/Tray3.png";
import Tray4 from "../assets/Tray4.png";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalImage, setModalImage] = useState(null);

  const categories = [
    "All",
    "Miniature",
    "Wooden Frames",
    "Clock",
    "Key Chains",
    "Preservation",
    "Resin Trays",
  ];

  const artPieces = [
    {
      id: 1,
      title: "Flower Preservation",
      category: "Preservation",
      image: FlowerPre1,
      likes: 124,
    },
    {
      id: 2,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood3,
      likes: 89,
    },
    {
      id: 3,
      title: "Customized Clock",
      category: "Clock",
      image: ClockBlack,
      likes: 70,
    },
    {
      id: 4,
      title: "Customized Clock",
      category: "Clock",
      image: Clock2,
      likes: 123,
    },
    {
      id: 5,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood1,
      likes: 134,
    },
    {
      id: 6,
      title: "Custom KeyChains",
      category: "Key Chains",
      image: KeyChain3,
      likes: 175,
    },
    {
      id: 7,
      title: "Custom KeyChains",
      category: "Key Chains",
      image: KeyChain2,
      likes: 162,
    },
    {
      id: 8,
      title: "Custom KeyChains",
      category: "Key Chains",
      image: KeyChain1,
      likes: 125,
    },
    {
      id: 9,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood4,
      likes: 89,
    },
    {
      id: 10,
      title: "Wooden varmala preservation",
      category: "Wooden Frames",
      image: Wood2,
      likes: 89,
    },
    {
      id: 11,
      title: "Miniature",
      category: "Miniature",
      image: Miniature1,
      likes: 89,
    },
    {
      id: 12,
      title: "Miniature",
      category: "Miniature",
      image: Miniature2,
      likes: 89,
    },
    {
      id: 13,
      title: "Miniature",
      category: "Miniature",
      image: Miniature3,
      likes: 189,
    },
    {
      id: 14,
      title: "Miniature",
      category: "Miniature",
      image: Miniature4,
      likes: 146,
    },
    {
      id: 15,
      title: "Miniature",
      category: "Miniature",
      image: Miniature5,
      likes: 349,
    },
    {
      id: 16,
      title: "Miniature",
      category: "Miniature",
      image: Miniature6,
      likes: 145,
    },
    {
      id: 17,
      title: "Flower Preservation",
      category: "Preservation",
      image: FlowerPre2,
      likes: 124,
    },
    {
      id: 18,
      title: "Flower Preservation",
      category: "Preservation",
      image: FlowerPre3,
      likes: 124,
    },
    {
      id: 19,
      title: "Resin Tray",
      category: "Resin Trays",
      image: Tray1,
      likes: 124,
    },
    {
      id: 20,
      title: "Resin Tray",
      category: "Resin Trays",
      image: Tray2,
      likes: 124,
    },
    {
      id: 21,
      title: "Resin Tray",
      category: "Resin Trays",
      image: Tray3,
      likes: 124,
    },
    {
      id: 22,
      title: "Resin Tray",
      category: "Resin Trays",
      image: Tray4,
      likes: 124,
    },
  ];

  const filteredPieces =
    selectedCategory.toLowerCase() === "all"
      ? artPieces
      : artPieces.filter((piece) => piece.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Art Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of unique resin art pieces, each one a
            masterpiece of color and creativity.
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
              {category}
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
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  onClick={() => setModalImage(piece.image)}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {piece.title}
                </h3>
                <div className="flex items-center text-gray-500">
                  <Heart className="w-4 h-4 mr-1" />
                  <span>{piece.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Large view"
            className="max-w-3xl max-h-[80vh] object-contain border-4 border-white rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
