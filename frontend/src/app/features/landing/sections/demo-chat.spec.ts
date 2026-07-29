import { TestBed } from '@angular/core/testing';
import { LandingDemoChat } from './demo-chat';

describe('LandingDemoChat', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDemoChat],
    }).compileComponents();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows a placeholder before any question is selected', async () => {
    const fixture = TestBed.createComponent(LandingDemoChat);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('escolha uma pergunta acima');
  });

  it('shows the typing indicator, then the answer and summary', async () => {
    const fixture = TestBed.createComponent(LandingDemoChat);
    await fixture.whenStable();
    vi.useFakeTimers();

    const compiled = fixture.nativeElement as HTMLElement;
    const firstQuestion = compiled.querySelector<HTMLButtonElement>('button');
    firstQuestion!.click();
    fixture.detectChanges();
    expect(compiled.textContent).toContain('digitando');

    vi.advanceTimersByTime(1000);
    fixture.detectChanges();
    expect(compiled.textContent).toContain('pró-labore');
    expect(compiled.textContent).toContain('Resumo pronto para enviar ao seu contador');
  });
});
