import { TwSampleProjectPage } from './app.po';

describe('tw-sample-project App', function() {
  let page: TwSampleProjectPage;

  beforeEach(() => {
    page = new TwSampleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
