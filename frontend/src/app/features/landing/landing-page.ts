import { Component } from '@angular/core';
import { LandingHeader } from './sections/header';
import { LandingHero } from './sections/hero';
import { LandingPainPoints } from './sections/pain-points';
import { LandingHowItWorks } from './sections/how-it-works';
import { LandingDemoChat } from './sections/demo-chat';
import { LandingBenefits } from './sections/benefits';
import { LandingPricing } from './sections/pricing';
import { LandingForAccountants } from './sections/for-accountants';
import { LandingAbout } from './sections/about';
import { LandingFinalCta } from './sections/final-cta';
import { LandingFooter } from './sections/footer';

@Component({
  selector: 'app-landing-page',
  imports: [
    LandingHeader,
    LandingHero,
    LandingPainPoints,
    LandingHowItWorks,
    LandingDemoChat,
    LandingBenefits,
    LandingPricing,
    LandingForAccountants,
    LandingAbout,
    LandingFinalCta,
    LandingFooter,
  ],
  template: `
    <app-landing-header />
    <main>
      <app-landing-hero />
      <app-landing-pain-points />
      <app-landing-how-it-works />
      <app-landing-demo-chat />
      <app-landing-benefits />
      <app-landing-pricing />
      <app-landing-for-accountants />
      <app-landing-about />
      <app-landing-final-cta />
    </main>
    <app-landing-footer />
  `,
})
export class LandingPage {}
