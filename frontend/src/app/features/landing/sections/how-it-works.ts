import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-how-it-works',
  template: `
    <section id="como-funciona" class="py-16 md:py-20" aria-labelledby="how-title">
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <h2 id="how-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Como funciona
        </h2>
        <p class="text-body-lg mt-4 max-w-2xl text-on-surface-variant">
          Três passos simples. Nenhum conhecimento técnico necessário.
        </p>
        <ol class="mt-10 grid gap-6 md:grid-cols-3">
          @for (step of steps; track step.title; let i = $index) {
            <li
              class="rounded-lg border border-surface-container-highest bg-surface-container-lowest p-6"
            >
              <span
                class="text-headline-md flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary"
                aria-hidden="true"
              >
                {{ i + 1 }}
              </span>
              <h3 class="text-headline-md mt-4 text-on-surface">{{ step.title }}</h3>
              <p class="text-body-md mt-2 text-on-surface-variant">{{ step.description }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class LandingHowItWorks {
  protected readonly steps = [
    {
      title: 'Ative o Especialista',
      description: 'Crie sua conta gratuita e ative o Skill no Claude ou em outro assistente compatível.',
    },
    {
      title: 'Conte sobre seu negócio',
      description: 'Explique o contexto uma vez só. O Especialista lembra do seu ramo, regime e rotina.',
    },
    {
      title: 'Receba perguntas inteligentes',
      description: 'Tire dúvidas em linguagem simples e receba resumos prontos para enviar ao seu contador.',
    },
  ];
}
