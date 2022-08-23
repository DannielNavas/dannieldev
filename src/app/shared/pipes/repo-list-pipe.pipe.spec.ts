import { RepoListPipe } from './repo-list-pipe.pipe';

describe('RepoListPipe', () => {
  it('create an instance', () => {
    const pipe = new RepoListPipe();
    expect(pipe).toBeTruthy();
  });
  it('Should ramdon list pipe', () => {
    const pipe = new RepoListPipe();
    const list = pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
    expect(list?.length).toBe(3);
  });
  it('Should ramdon list pipe all', () => {
    const pipe = new RepoListPipe();
    const list = pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    expect(list?.length).toBe(10);
  });
  it('Should ramdon list pipe all', () => {
    const pipe = new RepoListPipe();
    const list = pipe.transform([1, 2, 2, 2, 2, 2, 2, 2, 9, 10], 3);
    expect(list?.length).toBe(3);
  });
  it('Should ramdon list pipe all', () => {
    const pipe = new RepoListPipe();
    const fakeData: any[] = [];
    const list = pipe.transform(fakeData, 0);
    expect(list?.length).toBe(0);
  });
});
