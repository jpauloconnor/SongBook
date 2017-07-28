import { SongBookPage } from './app.po';

describe('song-book App', () => {
  let page: SongBookPage;

  beforeEach(() => {
    page = new SongBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
