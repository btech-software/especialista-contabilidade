import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-benefits',
  template: `
    <section class="py-16 md:py-20" aria-labelledby="benefits-title">
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <h2 id="benefits-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
          O que muda no seu dia a dia
        </h2>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          @for (benefit of benefits; track benefit.title) {
            <div
              class="rounded-lg border border-surface-container-highest bg-surface-container-lowest p-6"
            >
              <span
                class="text-headline-md flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-container"
                aria-hidden="true"
              >
                {{ benefit.icon }}
              </span>
              <h3 class="text-headline-md mt-4 text-on-surface">{{ benefit.title }}</h3>
              <p class="text-body-md mt-2 text-on-surface-variant">{{ benefit.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class LandingBenefits {
  protected readonly benefits = [
    {
      icon: '⏱',
      title: 'Reuniões mais curtas',
      description: 'Chegue com as perguntas certas e o contexto organizado. Menos idas e vindas.',
    },
    {
      icon: '✓',
      title: 'Menos retrabalho',
      description: 'Resumos claros evitam mal-entendidos e mensagens repetidas no WhatsApp.',
    },
    {
      icon: '⚖',
      title: 'Decisões mais seguras',
      description: 'Entenda as opções em linguagem simples antes de decidir com seu contador.',
    },
    {
      icon: '🤝',
      title: 'Relação mais forte',
      description: 'Seu contador recebe demandas claras e vira um parceiro estratégico de verdade.',
    },
  ];
}
