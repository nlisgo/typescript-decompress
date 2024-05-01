import { createReadStream, promises as fs } from 'fs';
import unzipper from 'unzipper';

// Path to the meca file and output directory
const mecaPath = './content.meca';
const outputPath = './unzipper/';

// Function to decompress the meca file
const unzipperMeca = async (path: string, outputDir: string) => {
  await fs.rm(outputDir, { recursive: true, force: true });
  await createReadStream(path)
    .pipe(unzipper.Extract({ path: outputDir }))
    .promise()
    .then(() => {
      console.log('Meca successfully extracted with unzipper');
    });
};

unzipperMeca(mecaPath, outputPath);
