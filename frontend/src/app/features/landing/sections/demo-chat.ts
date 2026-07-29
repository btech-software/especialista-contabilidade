import { Component, OnDestroy, signal } from '@angular/core';

interface DemoQuestion {
  id: string;
  label: string;
  answer: string;
  summary: string;
}

@Component({
  selector: 'app-landing-demo-chat',
  template: `
    <section id="demonstracao" class="bg-surface-container-low py-16 md:py-20" aria-labelledby="demo-title">
      <div class="mx-auto max-w-3xl px-4 md:px-16">
        <h2 id="demo-title" class="text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Experimente agora, sem cadastro
        </h2>
        <p class="text-body-lg mt-4 text-on-surface-variant">
          Escolha uma dúvida real de quem empreende e veja como o Especialista responde.
        </p>

        <div class="mt-8 flex flex-wrap gap-3" role="group" aria-label="Perguntas de exemplo">
          @for (question of questions; track question.id) {
            <button
              type="button"
              (click)="ask(question)"
              [attr.aria-pressed]="selected()?.id === question.id"
              class="text-label-md rounded-full border px-4 py-2 transition-colors"
              [class]="
                selected()?.id === question.id
                  ? 'border-primary bg-primary text-on-primary'
                  : 'border-outline bg-surface-container-lowest text-on-surface hover:border-primary hover:text-primary'
              "
            >
              {{ question.label }}
            </button>
          }
        </div>

        <div
          class="mt-6 min-h-64 rounded-xl border border-surface-container-highest bg-surface-container-lowest p-6"
          aria-live="polite"
        >
          @if (selected(); as question) {
            <div class="flex flex-col gap-4">
              <p
                class="text-body-md max-w-[85%] self-end rounded-lg rounded-br-sm bg-primary px-4 py-3 text-on-primary"
              >
                {{ question.label }}
              </p>
              @if (typing()) {
                <p
                  class="text-body-md max-w-[85%] self-start rounded-lg rounded-bl-sm bg-surface-container px-4 py-3 text-on-surface-variant italic"
                >
                  O Especialista está digitando&hellip;
                </p>
              } @else {
                <p
                  class="text-body-md max-w-[85%] self-start rounded-lg rounded-bl-sm bg-surface-container px-4 py-3 text-on-surface"
                >
                  {{ question.answer }}
                </p>
                <div class="rounded-lg border border-outline-variant bg-surface p-4">
                  <p class="text-label-md text-primary">
                    Resumo pronto para enviar ao seu contador
                  </p>
                  <p class="text-body-md mt-2 text-on-surface-variant">{{ question.summary }}</p>
                </div>
              }
            </div>
          } @else {
            <p class="text-body-md text-on-surface-variant">
              A resposta aparece aqui — escolha uma pergunta acima.
            </p>
          }
        </div>

        <p class="text-body-md mt-4 text-on-surface-variant">
          Demonstração ilustrativa. O Especialista orienta e organiza a conversa — as decisões
          continuam sempre com você e seu contador.
        </p>
      </div>
    </section>
  `,
})
export class LandingDemoChat implements OnDestroy {
  protected readonly questions: DemoQuestion[] = [
    {
      id: 'pro-labore',
      label: 'Posso tirar dinheiro da empresa para uso pessoal?',
      answer:
        'Pode, mas do jeito certo. Existem duas formas principais: o pró-labore (uma espécie de salário do sócio) e a distribuição de lucros, que na maioria dos casos é isenta de imposto de renda. Misturar a conta pessoal com a da empresa é o erro mais comum — e o que mais gera dor de cabeça na contabilidade.',
      summary:
        'Quero definir a melhor combinação entre pró-labore e distribuição de lucros para o meu caso. Pode me apresentar os valores e o impacto de impostos de cada opção?',
    },
    {
      id: 'mei-ou-me',
      label: 'Devo continuar como MEI ou virar ME?',
      answer:
        'Depende principalmente do seu faturamento e da sua atividade. O MEI tem limite de R$ 81 mil por ano — se você está chegando perto, vale planejar a transição antes de estourar o limite para não pagar impostos retroativos. Também conta se você quer contratar mais funcionários ou exercer atividades que o MEI não permite.',
      summary:
        'Meu faturamento está se aproximando do limite do MEI. Pode simular quanto eu pagaria de impostos como ME no Simples Nacional e qual o melhor momento para a transição?',
    },
    {
      id: 'darf',
      label: 'O que é esse DARF que preciso pagar?',
      answer:
        'DARF é a guia de pagamento de tributos federais, como IRPJ ou contribuições. Cada DARF tem um código que indica qual tributo e qual período ele cobre. Antes de pagar, vale entender o que está sendo cobrado — às vezes há formas legais de reduzir esse valor no seu regime tributário.',
      summary:
        'Recebi um DARF para pagar. Pode me confirmar a que tributo e período ele se refere, e se existe alguma forma legal de reduzir esse valor no meu regime?',
    },
  ];

  protected readonly selected = signal<DemoQuestion | null>(null);
  protected readonly typing = signal(false);

  private typingTimeout: ReturnType<typeof setTimeout> | null = null;

  protected ask(question: DemoQuestion): void {
    if (this.typingTimeout !== null) {
      clearTimeout(this.typingTimeout);
      this.typingTimeout = null;
    }
    this.selected.set(question);
    if (this.prefersReducedMotion()) {
      this.typing.set(false);
      return;
    }
    this.typing.set(true);
    this.typingTimeout = setTimeout(() => this.typing.set(false), 900);
  }

  ngOnDestroy(): void {
    if (this.typingTimeout !== null) {
      clearTimeout(this.typingTimeout);
    }
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
