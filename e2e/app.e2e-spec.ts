import { NgRefMaterial2Page } from './app.po';

describe('ng-ref-material2 App', function() {
  let page: NgRefMaterial2Page;

  beforeEach(() => {
    page = new NgRefMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
