import { promises as fs } from 'fs';
import decompress from 'decompress';

// Path to the meca file and output directory
const mecaPath = './content.meca';
const outputPath = './decompress/';

// Function to decompress the meca file
const decompressMeca = async (path: string, outputDir: string) => {
  await fs.rm(outputDir, { recursive: true, force: true });
  await decompress(path, outputDir).then(() => {
    console.log('Meca successfully extracted with decompress');
  });
};

decompressMeca(mecaPath, outputPath);
