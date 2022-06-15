import { tensorAsBase64, tensorAsBuffer } from './index';
import * as tf from '@tensorflow/tfjs';

describe('tensorAsBuffer', () => {
  it('gets a tensor as a buffer', async () => {
    const t: tf.Tensor3D = tf.tensor([[[1, 2, 3]]]);
    const buffer = await tensorAsBuffer(t);
    expect(Array.from(buffer)).toEqual([1, 2, 3, 255]);
  });
});

// describe('tensorAsBase64', () => {
//   it('gets a tensor as a base64 string', async () => {
//     const t: tf.Tensor3D = tf.tensor([[[1, 2, 3]]]);
//     const src = await tensorAsBase64(t);
//     expect(src).toEqual('foo');
//   });
// });
