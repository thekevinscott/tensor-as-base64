import { tensorAsBuffer } from './index';
import * as tf from '@tensorflow/tfjs';

describe('tensorAsBuffer', () => {
  it('gets a tensor as a buffer', async () => {
    const t = tf.tensor([[[1, 2, 3]]]);
    const buffer = await tensorAsBuffer(t);
    expect(Array.from(buffer)).toEqual([1, 2, 3, 255]);
  });
});
