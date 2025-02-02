import fs from 'fs';
import path from 'path';

export const getAdelynsPhotos = (): string[] => {
  const imagesDir = path.join(process.cwd(), 'public/images/adelynsphotos');
  const images = fs
    .readdirSync(imagesDir)
    .filter((file) => file.endsWith('.jpg'));
  return images;
};

