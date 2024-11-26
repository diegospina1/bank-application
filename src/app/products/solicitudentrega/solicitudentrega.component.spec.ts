import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudentregaComponent } from './solicitudentrega.component';

describe('SolicitudentregaComponent', () => {
  let component: SolicitudentregaComponent;
  let fixture: ComponentFixture<SolicitudentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudentregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
