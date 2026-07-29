import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <main class="flex min-h-dvh items-center justify-center px-4 py-16">
      <div
        class="w-full max-w-md rounded-xl border border-surface-container-highest bg-surface-container-lowest p-8 text-center"
      >
        <img
          ngSrc="logo_positive.png"
          width="192"
          height="96"
          priority
          alt="Especialista em Contabilidade"
          class="mx-auto h-16 w-auto"
        />
        <h1 class="text-headline-md mt-6 text-on-surface">Estamos quase lá</h1>
        <p class="text-body-md mt-4 text-on-surface-variant">
          A criação de contas será liberada em breve. Estamos preparando tudo para que seu primeiro
          contato com o Especialista seja simples e seguro.
        </p>
        <a routerLink="/" class="btn-secondary mt-8">Voltar para a página inicial</a>
      </div>
    </main>
  `,
})
export class SignupPage {}
