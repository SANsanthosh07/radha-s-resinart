import React from "react";
import { Palette, Users, Home, Gift } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom Artwork",
      description:
        "Personalized resin art pieces tailored to your vision, color preferences, and space requirements.",
      price: "Starting at ₹200",
      features: [
        "Custom size options",
        "Color consultation",
        "Unique design",
        "Quality guarantee",
      ],
    },
    {
      icon: Users,
      title: "Workshops",
      description:
        "Learn the art of resin pouring in our hands-on workshops suitable for all skill levels.",
      price: "Starting at ₹500",
      features: [
        "All materials included",
        "Small group classes",
        "Take home your creation",
        "Follow-up support",
      ],
    },
    {
      icon: Home,
      title: "Interior Design",
      description:
        "Complete interior art solutions for homes, offices, and commercial spaces.",
      price: "Starting at ₹2000",
      features: [
        "Space consultation",
        "Multiple pieces",
        "Installation included",
        "Design coordination",
      ],
    },
    {
      icon: Gift,
      title: "Gift Commissions",
      description:
        "Perfect gifts for special occasions with personalized touches and elegant packaging.",
      price: "Starting at ₹100",
      features: [
        "Gift wrapping",
        "Personal message",
        "Rush delivery",
        "Satisfaction guarantee",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From custom artwork to educational workshops, we offer a range of
            services to bring resin art into your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {service.price}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
