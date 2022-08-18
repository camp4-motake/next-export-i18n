import ImageCompress from './lib/ImageCompress.mjs';

/**
 * compress image & webp generate
 */
new ImageCompress({
  src: ['./src/assets/**/*.{jpg,jpeg,png,svg}', '!**/_*/**'],
  dest: './public/assets',
  option: {
    base: './src/assets',
    cacheDir: './node_modules/.cache/images',
  },
});
