import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// Gallery Items with Title and Description
const galleryItems = [
  {
    type: "video",
    src: " https://www.youtube.com/embed/MwIFIZRzBm8 ",
    alt: "Artwork 1",
    title: "pubg mobile game play",
    description: "Game play edit using different edting tools",
  },
  {
    type: "video",
    src: " https://www.youtube.com/embed/Hf1fLYKNLxI ",
    title: "Trivia shorts for children ",
    description: "I used canva and eleven labs to make this shorts",
  },
  {
    type: "video",
    src: " https://www.youtube.com/embed/Pi_VdikyRdE",
    title: "How to fix blank page problem",
    description: "Fixing blank page problem in google  docs",
  },
  {
    type: "video",
    src: "  https://www.youtube.com/embed/BaW0T3QfiCg",
    title: "Bribery educational video",
    description:
      "A collection of motion graphics projects created in After Effects.",
  },
];

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center relative"
      id="home"
    >
      {/* Title */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Notable Graphic Designs & Artwork
        </p>
        <p className="hero_tag text-gray_gradient">
          A showcase of creativity and innovation
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative gallery-item"
            onClick={() => openModal(item)}
            style={{
              animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`,
              opacity: 0,
            }}
          >
            {/* Media */}
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-md cursor-pointer hover:scale-105 transition transform duration-300"
              />
            ) : (
              <iframe
                src={item.src}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-auto rounded-md cursor-pointer hover:scale-105 transition transform duration-300"
              ></iframe>
            )}

            {/* Title and Description */}
            <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal open={open} onClose={closeModal} center>
          <div className="modal-container">
            {/* Media */}
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-auto object-contain"
              />
            ) : (
              <iframe
                src={selectedItem.src}
                title={selectedItem.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80"
              ></iframe>
            )}

            {/* Title and Description */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">{selectedItem.title}</h3>
              <p className="text-md text-gray-500">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Hero;
