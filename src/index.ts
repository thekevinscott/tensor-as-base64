import * as tf from '@tensorflow/tfjs';

export const tensorAsBuffer = async (tensor: tf.Tensor3D) => {
  const [height, width] = tensor.shape;
  const buffer = new Uint8ClampedArray(width * height * 4);
  const imageData = new ImageData(width, height);
  const data = await tensor.data();
  let i = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pos = (y * width + x) * 4;
      buffer[pos] = data[i]; // R
      buffer[pos + 1] = data[i + 1]; // G
      buffer[pos + 2] = data[i + 2]; // B
      buffer[pos + 3] = 255; // Alpha
      i += 3;
    }
  }
  imageData.data.set(buffer);
  return imageData;
};

export const tensorAsBase64 = async (tensor: tf.Tensor3D) => {
  const [height, width] = tensor.shape;
  const imageData = await tensorAsBuffer(tensor);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};
