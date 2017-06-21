import { Angular2ReduxPage } from './app.po';

describe('angular2-redux App', () => {
  let page: Angular2ReduxPage;

  beforeEach(() => {
    page = new Angular2ReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
