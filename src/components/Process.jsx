import React from "react";
import { Lightbulb, Palette, Droplets, Sparkles } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Consultation",
      description:
        "We discuss your vision, space, and preferences to create the perfect design concept.",
    },
    {
      icon: Palette,
      title: "Color Selection",
      description:
        "Choose from our extensive color palette or create custom colors to match your aesthetic.",
    },
    {
      icon: Droplets,
      title: "Resin Pouring",
      description:
        "The magic happens as layers of resin are carefully poured and manipulated to create your artwork.",
    },
    {
      icon: Sparkles,
      title: "Finishing",
      description:
        "Final touches, curing, and quality inspection ensure your piece meets our high standards.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Creative Process
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every masterpiece follows a carefully crafted process that ensures
            quality, uniqueness, and your complete satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-x-1/2"></div>
                )}
              </div>

              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Commission
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
