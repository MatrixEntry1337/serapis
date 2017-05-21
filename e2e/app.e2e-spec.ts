import { SerapisPage } from './app.po';

describe('serapis App', () => {
  let page: SerapisPage;

  beforeEach(() => {
    page = new SerapisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
