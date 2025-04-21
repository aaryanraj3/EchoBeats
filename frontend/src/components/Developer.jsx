import React from "react";
import { Github, Linkedin, X } from "lucide-react";
import aaryan from"../assets/aaryan.png"

const DeveloperModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const developers = [
    {
      name: "Aaryan Raj",
      image: aaryan,
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Naina Shukal",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      name: "Riteek Raj Tiwari",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      github: "https://github.com/maxraven",
      linkedin: "https://linkedin.com/in/maxraven",
    },
    {
      name: "Rohit Kumar",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      github: "https://github.com/maxraven",
      linkedin: "https://linkedin.com/in/maxraven",
    },
    {
      name: "Vishal Kumar",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      github: "https://github.com/maxraven",
      linkedin: "https://linkedin.com/in/maxraven",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-3xl w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-red-500 transition"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Meet Team Raven
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <div key={index} className="text-center">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 "
              />
              <h3 className="text-lg font-semibold text-black">{dev.name}</h3>
              <div className="flex justify-center gap-4 mt-2">
                <a href={dev.github} target="_blank" rel="noreferrer">
                  <Github className="text-black hover:text-gray-700 transition" />
                </a>
                <a href={dev.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="text-blue-600 hover:text-blue-800 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperModal;
