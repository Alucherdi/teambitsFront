import { TeamBitsPage } from './app.po';

describe('team-bits App', () => {
  let page: TeamBitsPage;

  beforeEach(() => {
    page = new TeamBitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
