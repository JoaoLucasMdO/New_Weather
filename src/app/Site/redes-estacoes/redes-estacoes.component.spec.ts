import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesEstacoesComponent } from './redes-estacoes.component';

describe('RedesEstacoesComponent', () => {
  let component: RedesEstacoesComponent;
  let fixture: ComponentFixture<RedesEstacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedesEstacoesComponent]
    });
    fixture = TestBed.createComponent(RedesEstacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
