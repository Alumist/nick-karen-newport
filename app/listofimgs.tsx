
import fs from 'fs';
import path from 'path';

export default function getImages() {
  const folderPath = path.join(process.cwd(), 'public/images/adelynsphotos');
  const listOfFiles = fs.readdirSync(folderPath);
  return listOfFiles;
}