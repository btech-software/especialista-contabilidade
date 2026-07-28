import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Especialista em Contabilidade — Converse melhor com seu contador',
    loadComponent: () => import('./features/landing/landing-page').then((m) => m.LandingPage)
  },
  {
    path: 'cadastro',
    title: 'Criar conta — Especialista em Contabilidade',
    loadComponent: () => import('./features/signup/signup-page').then((m) => m.SignupPage)
  },
  {
    path: 'funcionamento',
    title: 'Funcionamento - Especialista em Contabilidade',
    loadComponent: () => import('./features/howto/howto-page').then((m) => m.HowtoPage)
  },
  { path: '**', redirectTo: '' }
];
