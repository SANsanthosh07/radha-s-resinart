import React, { useState } from "react";
import { Heart } from "lucide-react";
import galleryData from "../components/gallaryImages";

const images = import.meta.glob("../assets/**/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

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
    "New Born preservation",
    "Resin Candle Holders",
  ];

  // add full image src to each item
  const artPieces = galleryData.map((piece) => ({
    ...piece,
    image: images[`../assets/${piece.image}`],
  }));

  const filteredPieces =
    selectedCategory.toLowerCase() === "all"
      ? artPieces
      : artPieces.filter((piece) => piece.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Art Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of unique resin art pieces, each one a
            masterpiece.
          </p>
        </div>

        {/* Category Buttons */}
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

      {/* Modal View */}
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
