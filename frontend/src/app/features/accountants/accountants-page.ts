import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accountants-page',
  imports: [RouterLink],
  template: `
    <main class="flex min-h-dvh items-center justify-center px-4 py-16">
      <div
        class="w-full max-w-md rounded-xl border border-surface-container-highest bg-surface-container-lowest p-8 text-center"
      >
        <h1 class="text-headline-md text-on-surface">Para Escritórios</h1>
        <p class="text-body-md mt-4 text-on-surface-variant">
          Em breve, explicaremos como o Especialista em Contabilidade atende escritórios de
          contabilidade. Estamos preparando tudo para que sua experiência seja simples e intuitiva.
        </p>
        <a routerLink="/" class="btn-secondary mt-8">Voltar para a página inicial</a>
      </div>
    </main>
  `,
})
export class AccountantsPage {}
