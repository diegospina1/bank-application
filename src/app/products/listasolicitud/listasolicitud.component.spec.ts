import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasolicitudComponent } from './listasolicitud.component';

describe('ListasolicitudComponent', () => {
  let component: ListasolicitudComponent;
  let fixture: ComponentFixture<ListasolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListasolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
