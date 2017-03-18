import { politracPage } from './app.po';

describe('politrac App', () => {
  let page: politracPage;

  beforeEach(() => {
    page = new politracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
