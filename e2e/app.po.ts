export class BigPicsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('big-pics-app h1')).getText();
  }
}
