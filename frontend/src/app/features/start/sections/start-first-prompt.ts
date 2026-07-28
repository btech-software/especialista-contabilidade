import { Component } from '@angular/core';

@Component({
  selector: 'app-start-first-prompt',
  template: `
    <section class="py-16 md:py-20" aria-labelledby="prompt-title">
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <h2 id="prompt-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Primeiro passo
        </h2>
        <p class="text-body-lg mt-4 max-w-2xl text-on-surface-variant">
          Depois que o plugin estiver instalado, use um dos comandos abaixo para começar.
        </p>

        <div class="mt-10 space-y-6">
          @for (prompt of prompts; track prompt.title) {
            <div
              class="rounded-lg border border-surface-container-highest bg-surface-container-lowest p-6"
            >
              <h3 class="text-headline-md text-on-surface">{{ prompt.title }}</h3>
              <p class="text-body-md mt-2 text-on-surface-variant">{{ prompt.description }}</p>
              <pre
                class="mt-4 overflow-x-auto rounded-lg bg-inverse-surface p-4 text-sm text-inverse-on-surface"
              ><code>{{ prompt.command }}</code></pre>
            </div>
          }
        </div>

        <div
          class="mt-10 rounded-xl border border-surface-container-highest bg-surface-container-lowest p-8"
        >
          <h3 class="text-headline-md text-on-surface">Dica</h3>
          <p class="text-body-md mt-2 text-on-surface-variant">
            Conte sempre o contexto do seu negócio uma vez só. O Especialista lembra das suas
            informações em toda conversa, evitando retrabalho.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class StartFirstPrompt {
  protected readonly prompts = [
    {
      title: 'Configurar seu negócio',
      description: 'Inicie a configuração contando sobre o seu negócio, regime e rotina.',
      command: '/especialista-comecar',
    },
    {
      title: 'Tirar uma dúvida',
      description:
        'Faça uma pergunta sobre um tema contábil e receba uma explicação em linguagem simples.',
      command: '/especialista "O que é pró-labore e como afeta meu negócio?"',
    },
    {
      title: 'Preparar para o contador',
      description: 'Receba um resumo pronto para enviar ao seu contador com o contexto organizado.',
      command: '/especialista "Prepare um resumo sobre pró-labore para eu enviar ao meu contador"',
    },
  ];
}
