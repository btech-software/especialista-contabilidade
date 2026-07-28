import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-header',
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <header
      class="sticky top-0 z-40 border-b border-surface-container-highest bg-surface/90 backdrop-blur"
    >
      <nav
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-16"
        aria-label="Navegação principal"
      >
        <a routerLink="/" class="flex shrink-0 items-center" aria-label="Especialista em Contabilidade — início">
          <img
            ngSrc="logo_positive.png"
            width="96"
            height="48"
            priority
            alt="Especialista em Contabilidade"
            class="h-10 w-auto md:h-12"
          />
        </a>
        <ul class="hidden items-center gap-6 lg:flex">
          @for (link of links; track link.label) {
            <li>
              @if (link.route) {
                <a
                  [routerLink]="link.route"
                  class="text-body-md text-on-surface-variant transition-colors hover:text-primary"
                  >{{ link.label }}</a
                >
              } @else {
                <a
                  [href]="link.href"
                  class="text-body-md text-on-surface-variant transition-colors hover:text-primary"
                  >{{ link.label }}</a
                >
              }
            </li>
          }
        </ul>
        <a routerLink="/cadastro" class="btn-primary whitespace-nowrap">Criar conta grátis</a>
      </nav>
    </header>
  `,
})
export class LandingHeader {
  protected readonly links = [
    { route: '/funcionamento', label: 'Como funciona' },
    { href: '#demonstracao', label: 'Demonstração' },
    { href: '#planos', label: 'Planos' },
    { route: '/contabilistas', label: 'Para escritórios' },
    { href: '#quem-somos', label: 'Quem somos' },
  ];
}
