import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LandingPage } from './landing-page';

describe('LandingPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders all anchored sections', async () => {
    const fixture = TestBed.createComponent(LandingPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    for (const id of ['como-funciona', 'demonstracao', 'para-escritorios']) {
      expect(compiled.querySelector(`#${id}`)).toBeTruthy();
    }
  });

  it('links the main call to action to /cadastro', async () => {
    const fixture = TestBed.createComponent(LandingPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const ctaLinks = compiled.querySelectorAll('a[href="/cadastro"]');
    expect(ctaLinks.length).toBeGreaterThan(0);
  });
});
