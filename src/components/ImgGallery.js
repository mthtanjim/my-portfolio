// ImgGallery.js

import React, { useState } from 'react';
import './styles/ImgGallery.scss';
import imgGalleryData from './assets/galleryData';

const ImgGallery = () => {
  // Demo array of imgGalleryData and titles
//   const imgGalleryData = [
//     { src: '/assets/gallery/img.jpg', title: 'Image 1' },
//     { src: '/assets/gallery/img1.jpg', title: 'Image 2' },
//     { src: '/assets/gallery/img2.jpg', title: 'Image 3' },
//   ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imgGalleryData.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? imgGalleryData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='container' >
        <h1>Digital Display</h1>
    <div className="img-gallery">
      <div className={`lightbox ${selectedImageIndex !== null ? 'open' : ''}`}>
        {selectedImageIndex !== null && (
          <>
            <span className="close-btn" onClick={closeLightbox}>×</span>
            <button className="prev-btn" onClick={prevImage}>&lt;</button>
            <button className="next-btn" onClick={nextImage}>&gt;</button>
            <img
              className="lightbox-image"
              src={imgGalleryData[selectedImageIndex].src}
              alt={imgGalleryData[selectedImageIndex].title}
            />
            <p className="image-title">{imgGalleryData[selectedImageIndex].title}</p>
          </>
        )}
      </div>
      <div className="gallery">
        {imgGalleryData.map((image, index) => (
            <div className='imgBox' >
          <img
            key={index}
            className="gallery-image"
            src={image.src}
            alt={image.title}
            onClick={() => openLightbox(index)}
          />
          </div>
        ))}
      </div>
      <div> 
            <h2>

            </h2>

            <p>

            </p>

      </div>
    </div>
    </div>
  );
};

export default ImgGallery;
