import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-footer',
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <footer class="bg-surface-container py-12">
      <div
        class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:px-16"
      >
        <div>
          <img
            ngSrc="logo_positive.png"
            width="96"
            height="48"
            alt="Especialista em Contabilidade"
            class="h-10 w-auto"
          />
          <p class="text-body-md mt-3 text-on-surface-variant">
            A ponte entre o seu negócio e o seu contador.
          </p>
        </div>
        <nav aria-label="Links do rodapé">
          <ul class="flex flex-wrap gap-x-6 gap-y-2">
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
        </nav>
      </div>
      <div
        class="mx-auto mt-8 max-w-6xl border-t border-surface-container-highest px-4 pt-6 md:px-16"
      >
        <p class="text-body-md text-on-surface-variant">
          © {{ currentYear }} Especialista em Contabilidade. Feito no Brasil.
        </p>
      </div>
    </footer>
  `,
})
export class LandingFooter {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly links = [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#demonstracao', label: 'Demonstração' },
    { href: '#planos', label: 'Planos' },
    { href: '#para-escritorios', label: 'Para escritórios' },
    { route: '/quem-somos', label: 'Quem somos' },
  ];
}
