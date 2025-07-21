'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageCarousel from './ImageCarousel';

export default function MasonryGallery({ items }) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <div id="gallery-root">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {items.map((item, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <div
              className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => openCarousel(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500 * (item.aspectRatio || 1)}
                className="w-full object-cove hover:transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 hover:text-secondary">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.description && (
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageCarousel
        isOpen={isCarouselOpen}
        onClose={closeCarousel}
        items={items}
        initialIndex={currentIndex}
      />
    </div>
  );
}