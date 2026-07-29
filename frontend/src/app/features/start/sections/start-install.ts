import { Component } from '@angular/core';

@Component({
  selector: 'app-start-install',
  template: `
    <section class="bg-surface-container-low py-16 md:py-20" aria-labelledby="install-title">
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <h2 id="install-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Como instalar
        </h2>
        <p class="text-body-lg mt-4 max-w-2xl text-on-surface-variant">
          Siga os passos abaixo para instalar o Especialista em Contabilidade no Claude Cowork.
        </p>

        <div class="mt-10 space-y-8">
          @for (step of steps; track step.number) {
            <div
              class="rounded-lg border border-surface-container-highest bg-surface-container-lowest p-6"
            >
              <div class="flex items-start gap-4">
                <span
                  class="text-headline-md flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary"
                  aria-hidden="true"
                >
                  {{ step.number }}
                </span>
                <div>
                  <h3 class="text-headline-md text-on-surface">{{ step.title }}</h3>
                  <p class="text-body-md mt-2 text-on-surface-variant">{{ step.description }}</p>
                  <pre
                    class="mt-4 overflow-x-auto rounded-lg bg-inverse-surface p-4 text-sm text-inverse-on-surface"
                  ><code>{{ step.command }}</code></pre>
                </div>
              </div>
            </div>
          }
        </div>

        <div
          class="mt-10 rounded-xl border border-surface-container-highest bg-surface-container-lowest p-8"
        >
          <h3 class="text-headline-md text-on-surface">Depois de instalar</h3>
          <p class="text-body-md mt-2 text-on-surface-variant">
            Após instalar o plugin, reinicie o Claude Cowork e use a skill
            <span class="text-primary font-mono">/especialista-comecar</span> para iniciar a
            configuração do seu perfil empresarial.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class StartInstall {
  protected readonly steps = [
    {
      number: 1,
      title: 'Abra o Claude Cowork',
      description: 'Acesse claude.com/code e abra o Claude Cowork no seu navegador.',
      command: 'Acesse: https://claude.com/code',
    },
    {
      number: 2,
      title: 'Adicione o marketplace',
      description:
        'No Claude Cowork, adicione o marketplace do GitHub para acessar o plugin Especialista.',
      command: '/plugin marketplace add btech-software/especialista-contabilidade',
    },
    {
      number: 3,
      title: 'Instale o plugin',
      description:
        'Instale o plugin Especialista em Contabilidade a partir do marketplace recém-adicionado.',
      command:
        '/plugin install especialista-contabilidade@btech-software/especialista-contabilidade',
    },
    {
      number: 4,
      title: 'Ative a skill',
      description: 'Recarregue os plugins e ative a skill para começar a usar o Especialista.',
      command: '/reload-plugins',
    },
  ];
}
