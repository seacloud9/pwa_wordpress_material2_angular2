import { NgwordpressPage } from './app.po';

describe('ngwordpress App', () => {
  let page: NgwordpressPage;

  beforeEach(() => {
    page = new NgwordpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
