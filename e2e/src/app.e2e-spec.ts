import { version } from '@project';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display generated Hello World div', () => {
    page.navigateTo();
    page.getDiv().should('have.text', 'Hello World');
  });

  it('should display version in div with `version` css class', () => {
    page.navigateTo();
    page.getVersion().should('have.text', version);
  });
});
