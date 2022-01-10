import { SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmeprincipalComponent } from './aboutmeprincipal.component';

describe('AboutmeprincipalComponent', () => {
  let component: AboutmeprincipalComponent;
  let fixture: ComponentFixture<AboutmeprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutmeprincipalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnchange', () => {
    const fakeSimpleChanges = {} as SimpleChanges;
    component.ngOnChanges(fakeSimpleChanges);
  });
  it('should ngOnchange principalData', () => {
    const fakeSimpleChanges = {} as SimpleChanges;
    component.principalData = {
      principalBody:
        'Hola soy Ingeniero de sistemas, entusiasta de la divulgación de tecnología, reciente escritor de temas de programación',
      secodaryBody:
        'Oye soy Daniel Navas ingeniero de sistemas y trabajo actualmente en la ciudad de Bogotá. Te doy la Bienvenida a mi sitio web en el que almacenare la ruta a los proyectos que he realizado a lo largo de mi carrera, además de referencia a los post que a la fecha (12 Sep. 2021)he empezado a escribir y espero que sean de gran ayuda a la comunidad hispano hablante.',
      title: 'Sobre mí',
    };

    component.ngOnChanges(fakeSimpleChanges);
  });
});
