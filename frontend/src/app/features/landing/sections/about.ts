import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-about',
  template: `
    <section id="quem-somos" class="py-16 md:py-20" aria-labelledby="about-title">
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <div class="grid gap-12 md:grid-cols-2">
          <div>
            <h2 id="about-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Quem somos
            </h2>
            <p class="text-body-lg mt-4 text-on-surface-variant">
              Somos um time brasileiro de tecnologia e contabilidade que cansou de ver empresários e
              contadores falando línguas diferentes. Construímos o Especialista em Contabilidade
              para ser a ponte: inteligência artificial aplicada com responsabilidade, em português
              claro, para a realidade fiscal do Brasil.
            </p>
            <p class="text-body-lg mt-4 text-on-surface-variant">
              Não acreditamos em IA que substitui o contador — acreditamos em IA que fortalece a
              relação entre quem empreende e quem cuida dos números.
            </p>
          </div>
          <ul class="flex flex-col gap-4">
            @for (commitment of commitments; track commitment.title) {
              <li
                class="rounded-lg border border-surface-container-highest bg-surface-container-lowest p-5"
              >
                <h3 class="text-label-md text-primary">{{ commitment.title }}</h3>
                <p class="text-body-md mt-1 text-on-surface-variant">{{ commitment.description }}</p>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class LandingAbout {
  protected readonly commitments = [
    {
      title: 'Conformidade com a LGPD',
      description: 'Seus dados são tratados conforme a legislação brasileira de proteção de dados.',
    },
    {
      title: 'Seus dados são seus',
      description: 'Nenhuma informação sua é usada para treinar modelos públicos de IA.',
    },
    {
      title: 'Transparência sempre',
      description:
        'O Especialista orienta e organiza — decisões contábeis continuam com você e seu contador.',
    },
  ];
}
