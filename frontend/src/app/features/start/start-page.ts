import { Component } from '@angular/core';
import { LandingHeader } from '../landing/sections/header';
import { LandingFooter } from '../landing/sections/footer';
import { StartHero } from './sections/start-hero';
import { StartHowItWorks } from './sections/start-how-it-works';
import { StartInstall } from './sections/start-install';
import { StartFirstPrompt } from './sections/start-first-prompt';

@Component({
  selector: 'app-start-page',
  imports: [
    LandingHeader,
    StartHero,
    StartHowItWorks,
    StartInstall,
    StartFirstPrompt,
    LandingFooter,
  ],
  template: `
    <app-landing-header />
    <main>
      <app-start-hero />
      <app-start-how-it-works />
      <app-start-install />
      <app-start-first-prompt />
    </main>
    <app-landing-footer />
  `,
})
export class StartPage {}
