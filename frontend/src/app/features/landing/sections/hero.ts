import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-hero',
  imports: [RouterLink],
  template: `
    <section class="relative overflow-hidden" aria-labelledby="hero-title">
      <div
        class="bg-signature-gradient pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        class="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-16 md:py-24"
      >
        <div>
          <span
            class="text-label-md inline-block rounded-full bg-secondary-container px-4 py-1.5 text-on-surface"
          >
            100% gratuito para empresários
          </span>
          <h1 id="hero-title" class="text-headline-lg-mobile md:text-display-lg mt-6 text-on-surface">
            Converse com seu contador de forma mais clara e produtiva
          </h1>
          <p class="text-body-lg mt-6 text-on-surface-variant">
            O Especialista em Contabilidade entende o contexto do seu negócio, traduz o
            &ldquo;contabolês&rdquo; e prepara as perguntas certas para o seu contador. Você decide
            melhor, em menos tempo.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a routerLink="/cadastro" class="btn-primary">Criar conta grátis</a>
            <a href="#demonstracao" class="btn-secondary">Ver demonstração</a>
          </div>
          <p class="text-body-md mt-4 text-on-surface-variant">
            Sem cartão de crédito. Leva menos de 2 minutos.
          </p>
        </div>
        <div
          class="rounded-xl border border-surface-container-highest bg-surface-container-lowest p-6"
          aria-hidden="true"
        >
          <p class="text-label-md text-on-surface-variant">Exemplo de conversa</p>
          <div class="mt-4 flex flex-col gap-3">
            <p
              class="text-body-md max-w-[85%] self-end rounded-lg rounded-br-sm bg-primary px-4 py-3 text-on-primary"
            >
              O que é pró-labore? Meu contador vive falando disso.
            </p>
            <p
              class="text-body-md max-w-[85%] self-start rounded-lg rounded-bl-sm bg-surface-container px-4 py-3 text-on-surface"
            >
              É a remuneração mensal que você recebe como sócio pelo trabalho na empresa — parecida
              com um salário. Sobre ela incide INSS, diferente da distribuição de lucros. Quer que
              eu prepare as perguntas certas para alinhar o valor ideal com seu contador?
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LandingHero {}
