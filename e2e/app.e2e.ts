import { BigPicsPage } from './app.po';

describe('big-pics App', function() {
  let page: BigPicsPage;

  beforeEach(() => {
    page = new BigPicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('big-pics works!');
  });
});
