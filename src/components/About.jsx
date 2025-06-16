import React from "react";
import { Award, Users, Palette, Clock } from "lucide-react";
import MainLogo from "../assets/MainLogo.png";
const About = () => {
  const stats = [
    { icon: Palette, number: "500+", label: "Artworks Created" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Award, number: "7", label: "Awards Won" },
    { icon: Clock, number: "3", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={MainLogo}
                alt="Artist at work"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-20 -z-10"></div>
          </div>

          {/* Content side */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About the Artist
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I'm Radha K, a passionate resin artist with over 2.5 years
                of experience in creating stunning liquid art pieces. My journey
                began with a fascination for how colors flow and blend, forming
                unique patterns that can never be exactly replicated.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I hold a Bachelor of Engineering in Information Technology (BE
                IT), but my heart has always belonged to the world of art. Each
                piece I create is crafted with intention, emotion, and countless
                hours of dedication. I believe art should not only be beautiful
                but should also tell a story and evoke emotions in those who
                experience it.
              </p>
              <p className="text-lg text-gray-600">
                From abstract ocean scenes to intricate geode replicas, every
                artwork I produce is a unique expression of creativity, passion,
                and craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
