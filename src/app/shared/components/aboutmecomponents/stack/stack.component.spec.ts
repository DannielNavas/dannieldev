import { SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackComponent } from './stack.component';

describe('StackComponent', () => {
  let component: StackComponent;
  let fixture: ComponentFixture<StackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnchange playlist', () => {
    const fakeSimpleChanges = {} as SimpleChanges;
    component.ngOnChanges(fakeSimpleChanges);
  });
  it('should ngOnchange principalData playlist', () => {
    const fakeSimpleChanges = {} as SimpleChanges;
    component.stack = {
      software: {
        items: [
          'IDE: VSCode',
          'Tema: Moonlight II Italic',
          'Terminal: Git bash (Windows) Iterm2 (MACOS)',
          'Fuente: Victor mono (Como instalar)',
          'Navegador: Microsoft Edge',
          'Escritura y organización: Notion',
        ],
        title: 'Software',
      },
      hardware: {
        title: 'Hardware:',
        items: {
          perifericos: {
            Auriculares: '',
            Micrófono: '',
            Monitor: '',
            Teclado: 'VSG Bellatrix',
          },
          laptop: 'Laptop:',
          desktop: {
            items: [
              'CPU: AMD Rayzen 7 3700X',
              'Placa base: Asus rog stick ',
              'Memoria: 32 GB',
              'Almacenamiento: 500 GB M2',
              'Tarjeta grafica: asus 710',
              'Fuente de alimentación:',
              'Gabinete: XPG',
            ],
            title: 'Pc escritorio:',
          },
        },
      },
      title: 'Mi stack',
    };

    component.ngOnChanges(fakeSimpleChanges);
  });
});
