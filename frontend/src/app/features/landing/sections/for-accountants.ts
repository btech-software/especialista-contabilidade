import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-for-accountants',
  template: `
    <section
      id="para-escritorios"
      class="bg-inverse-surface py-16 md:py-20"
      aria-labelledby="accountants-title"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <p class="text-label-md text-inverse-primary">Para escritórios de contabilidade</p>
        <h2
          id="accountants-title"
          class="text-headline-lg-mobile md:text-headline-lg mt-2 max-w-3xl text-inverse-on-surface"
        >
          Seu escritório escala com inteligência, sem contratar mais gente
        </h2>
        <p class="text-body-lg mt-4 max-w-3xl text-inverse-on-surface">
          Enquanto o mercado cobra produtividade, seu time segue afogado em tarefas repetitivas. O
          Especialista pesquisa, organiza e executa — integrado ao Claude Cowork, com autenticação
          segura.
        </p>
        <ul class="mt-10 grid gap-6 sm:grid-cols-2">
          @for (feature of features; track feature.title) {
            <li class="rounded-lg border border-outline bg-inverse-surface p-6">
              <h3 class="text-headline-md text-inverse-primary">{{ feature.title }}</h3>
              <p class="text-body-md mt-2 text-inverse-on-surface">{{ feature.description }}</p>
            </li>
          }
        </ul>
        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#planos"
            class="inline-flex items-center justify-center rounded-lg border-2 border-inverse-primary px-6 py-3 font-display font-medium text-inverse-primary transition-colors hover:bg-inverse-primary/10"
          >
            Conhecer o plano Profissional
          </a>
          <p class="text-body-md text-inverse-on-surface">14 dias grátis. Sem cartão.</p>
        </div>
      </div>
    </section>
  `,
})
export class LandingForAccountants {
  protected readonly features = [
    {
      title: 'Pesquisa inteligente',
      description:
        'Legislação, instruções normativas e jurisprudência pesquisadas em segundos, com fontes.',
    },
    {
      title: 'Automação de rotinas',
      description:
        'Checklists, extração de dados e apoio em obrigações acessórias sem retrabalho manual.',
    },
    {
      title: 'Integração Claude Cowork + MCP',
      description:
        'Skills prontas que funcionam dentro do fluxo do seu time, com MCP Server dedicado.',
    },
    {
      title: 'Segurança e LGPD',
      description:
        'Autenticação por usuário, controle de acesso por escritório e dados que nunca treinam modelos públicos.',
    },
  ];
}
