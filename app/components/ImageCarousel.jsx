'use client';

import { useEffect } from 'react';
import Modal from 'react-modal';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import Slider from 'react-slick';

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-secondary"
    aria-label="Next image"
  >
    <FiChevronRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-secondary"
    aria-label="Previous image"
  >
    <FiChevronLeft size={24} />
  </button>
);

export default function ImageCarousel({
  isOpen,
  onClose,
  items,
  initialIndex,
}) {
  useEffect(() => {
    // Set app element when component mounts
    Modal.setAppElement('#gallery-root');
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialIndex,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
      contentLabel="Image Carousel"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-red-600"
        aria-label="Close carousel"
      >
        <FiX size={24} />
      </button>

      <div className="h-[90vh] w-full">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="relative h-[70vh]">
              <div className="flex h-full items-center justify-center p-4 ">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                  className="md:object-cover w-full md:h-full"
                    
                  />
              </div>
              <div className="mt-4 px-4 text-center">
                <h3 className="text-xl font-semibold text-secondary">{item.title}</h3>
                {item.description && (
                  <p className="mt-2 text-gray-600">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Modal>
  );
}