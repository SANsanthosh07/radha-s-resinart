import React, { useState, useEffect } from "react";
import { Heart, Eye } from "lucide-react";
import galleryData from "../components/gallaryImages";

const images = import.meta.glob("../assets/**/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [modalImage, setModalImage] = useState(null);
  const [likes, setLikes] = useState({});
  const [animateId, setAnimateId] = useState(null);

  const categories = [
    "all",
    "Miniature",
    "Wooden Frames",
    "Clock",
    "Key Chains",
    "Preservation",
    "Resin Trays",
    "New Born preservation",
    "Resin Candle Holders",
  ];

  // Load likes from localStorage once
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likes")) || {};
    setLikes(stored);
  }, []);

  // Handle like action
  const handleLike = (id) => {
    const updated = { ...likes, [id]: (likes[id] || 0) + 1 };
    setLikes(updated);
    localStorage.setItem("likes", JSON.stringify(updated));
    setAnimateId(id);
    setTimeout(() => setAnimateId(null), 400);
  };

  const artPieces = galleryData.map((piece) => ({
    ...piece,
    image: images[`../assets/${piece.image}`],
  }));

  const filteredPieces =
    selectedCategory === "all"
      ? artPieces
      : selectedCategory === ""
      ? []
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
              onClick={() =>
                setSelectedCategory((prev) =>
                  prev === category ? "" : category
                )
              }
              className={`hover:cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
        {filteredPieces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPieces.map((piece) => (
              <div
                key={piece.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image + Preview Icon */}
                <div className="relative overflow-hidden group cursor-pointer">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                    onClick={() => setModalImage(piece.image)}
                  />
                  <button
                    onClick={() => setModalImage(piece.image)}
                    className="absolute inset-0 flex items-center gap-2 justify-center font-bold   bg-gary-200 hover:bg-opacity-80 text-black animate-pulse"
                  >
                    <Eye className="w-6 h-6  " />
                    <p className="text-black font-bold">Preview</p>
                  </button>
                </div>

                {/* Title + Likes */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {piece.title}
                  </h3>
                  <div className="flex items-center text-gray-500 space-x-2">
                    <button
                      onClick={() => handleLike(piece.id)}
                      className={`transition-transform duration-300 ${
                        animateId === piece.id ? "scale-125 animate-ping" : ""
                      }`}
                    >
                      <Heart className="w-5 h-5 text-red-500" />
                    </button>
                    <span className="font-medium">
                      {likes[piece.id] ?? piece.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-purple-400 font-semibold text-xl mt-12">
            Click a category to view artworks.
          </p>
        )}
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
