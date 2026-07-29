import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Plan {
  name: string;
  audience: string;
  price: string;
  period: string;
  features: string[];
  cta: { label: string; link: string };
  highlighted: boolean;
}

@Component({
  selector: 'app-landing-pricing',
  imports: [RouterLink],
  template: `
    <section id="planos" class="bg-surface-container-low py-16 md:py-20" aria-labelledby="pricing-title">
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <h2 id="pricing-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Planos simples, sem pegadinha
        </h2>
        <div class="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          @for (plan of plans; track plan.name) {
            <div
              class="flex flex-col rounded-xl bg-surface-container-lowest p-8"
              [class]="
                plan.highlighted
                  ? 'border-2 border-primary'
                  : 'border border-surface-container-highest'
              "
            >
              @if (plan.highlighted) {
                <span
                  class="text-label-md -mt-4 mb-4 self-start rounded-full bg-secondary-container px-4 py-1.5 text-on-surface"
                >
                  Comece por aqui
                </span>
              }
              <h3 class="text-headline-md text-on-surface">{{ plan.name }}</h3>
              <p class="text-body-md mt-1 text-on-surface-variant">{{ plan.audience }}</p>
              <p class="mt-6">
                <span class="text-headline-lg text-on-surface">{{ plan.price }}</span>
                <span class="text-body-md text-on-surface-variant"> {{ plan.period }}</span>
              </p>
              <ul class="mt-6 flex flex-col gap-3">
                @for (feature of plan.features; track feature) {
                  <li class="text-body-md flex items-start gap-2 text-on-surface">
                    <span class="text-primary" aria-hidden="true">✓</span>
                    {{ feature }}
                  </li>
                }
              </ul>
              <a
                [routerLink]="plan.cta.link"
                class="mt-8"
                [class]="plan.highlighted ? 'btn-primary' : 'btn-secondary'"
              >
                {{ plan.cta.label }}
              </a>
            </div>
          }
        </div>
        <p class="text-body-md mt-8 text-center text-on-surface-variant">
          No plano Profissional: 14 dias grátis, sem cartão. Cancele quando quiser.
        </p>
      </div>
    </section>
  `,
})
export class LandingPricing {
  // Professional plan price is a placeholder — adjust before launch.
  protected readonly plans: Plan[] = [
    {
      name: 'Gratuito',
      audience: 'Para empresários e donos de negócio',
      price: 'R$ 0',
      period: 'para sempre',
      features: [
        'Skill Especialista em Contabilidade',
        'Perguntas inteligentes ilimitadas',
        'Resumos prontos para enviar ao contador',
        'Contexto do seu negócio salvo',
      ],
      cta: { label: 'Criar conta grátis', link: '/cadastro' },
      highlighted: true,
    },
    {
      name: 'Profissional',
      audience: 'Para escritórios de contabilidade',
      price: 'R$ 149',
      period: 'por usuário/mês',
      features: [
        'Tudo do plano Gratuito',
        'Pesquisa inteligente de legislação e normas da RFB',
        'Automação de tarefas repetitivas',
        'Integração com Claude Cowork + MCP Server',
        'Suporte prioritário e onboarding do time',
      ],
      cta: { label: 'Começar teste grátis', link: '/cadastro' },
      highlighted: false,
    },
  ];
}
