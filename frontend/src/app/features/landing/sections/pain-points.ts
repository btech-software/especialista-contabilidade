import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-pain-points',
  template: `
    <section class="bg-surface-container-low py-16 md:py-20" aria-labelledby="pain-title">
      <div class="mx-auto max-w-6xl px-4 md:px-16">
        <h2 id="pain-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Isso parece familiar?
        </h2>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          @for (pain of pains; track pain) {
            <blockquote
              class="rounded-lg border border-surface-container-highest bg-surface-container-lowest p-6"
            >
              <p class="text-body-lg text-on-surface italic">&ldquo;{{ pain }}&rdquo;</p>
            </blockquote>
          }
        </div>
        <p class="text-body-lg mt-10 max-w-3xl text-on-surface-variant">
          A conversa com o contador não precisa ser difícil. Falta apenas alguém que fale as duas
          línguas: a do seu negócio e a da contabilidade.
        </p>
      </div>
    </section>
  `,
})
export class LandingPainPoints {
  protected readonly pains = [
    'Mando WhatsApp e recebo resposta em contabolês.',
    'Nunca sei se a pergunta que fiz é a mais importante.',
    'Perco tempo explicando o mesmo contexto toda vez.',
  ];
}
