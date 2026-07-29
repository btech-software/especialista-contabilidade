import { Component } from '@angular/core';
import { LandingPricing } from '../landing/sections/pricing';

@Component({
  selector: 'app-pricing-page',
  imports: [LandingPricing],
  template: `
    <main>
      <app-landing-pricing />
    </main>
  `,
})
export class PricingPage {}
