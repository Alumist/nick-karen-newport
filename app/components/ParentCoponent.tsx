import React from 'react';
import Hero from './hero';

const ParentComponent: React.FC = () => {
  const getImages = () => {
    return ['097A7631.jpg']
  };

  const images = getImages();

  return <Hero images={images} />;
};

export default ParentComponent;