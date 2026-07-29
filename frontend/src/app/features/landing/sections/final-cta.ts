import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-final-cta',
  imports: [RouterLink],
  template: `
    <section class="bg-signature-gradient py-16 md:py-20" aria-labelledby="final-cta-title">
      <div class="mx-auto max-w-3xl px-4 md:px-16">
        <div class="rounded-xl bg-surface-container-lowest p-8 text-center md:p-12">
          <h2 id="final-cta-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Pronto para conversas mais produtivas com seu contador?
          </h2>
          <p class="text-body-lg mt-4 text-on-surface-variant">
            Ative agora. 100% gratuito para empresários, sem cartão de crédito.
          </p>
          <a routerLink="/cadastro" class="btn-primary mt-8">Criar conta grátis</a>
        </div>
      </div>
    </section>
  `,
})
export class LandingFinalCta {}
