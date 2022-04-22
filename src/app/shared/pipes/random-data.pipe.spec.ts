import { RandomDataPipe } from './random-data.pipe';

describe('RandomDataPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomDataPipe();
    expect(pipe).toBeTruthy();
  });
});
