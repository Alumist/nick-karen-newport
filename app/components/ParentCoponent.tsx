import React from 'react';
import { getAdelynsPhotos } from './images';
import Hero from './hero';

const ParentComponent: React.FC = () => {
  const getImages = () => {
    return [ ...getAdelynsPhotos()];
  };

  const images = getImages();

  return <Hero images={images} />;
};

export default ParentComponent;