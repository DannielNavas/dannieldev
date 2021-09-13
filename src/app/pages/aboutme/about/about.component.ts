import { Component, OnInit } from '@angular/core';
import { Aboutme } from '@core/models/aboutme/aboutme';
import { AboutmeService } from '@core/services/firebase/aboutme.service';
import { PostService } from '@core/services/firebase/post.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about: any;
  initData: Aboutme = new Aboutme();
  aboutme: { id: string; datos: unknown; }[];

  constructor(private aboutmeService: AboutmeService) {
    this.initData = {
      title: 'Sobre mí',
      dateCreate: Date(),
      dateUpdate: Date(),
      body: {
        principal: {
          title: 'Sobre mí',
          principalBody:
            'Hola soy Ingeniero de sistemas, entusiasta de la divulgación de tecnología, reciente escritor de temas de programación',
          secodaryBody: `Oye soy Daniel Navas ingeniero de sistemas y trabajo actualmente en la ciudad de Bogotá. Te doy la Bienvenida a mi sitio web en el que almacenare la ruta a los proyectos que he realizado a lo largo de mi carrera, además de referencia a los post que a la fecha (12 Sep. 2021)he empezado a escribir y espero que sean de gran ayuda a la comunidad hispano hablante.`,
        },
        secodary: {
          title: 'Algunas cosas que pueden ser de interés:',
          items: [
            'Desarrollador desde hace 7 años',
            'He desarrollado software para diferentes áreas de mercado',
            'Soy fanático de la ciencia ficción (más enfocado en star trek)',
            'Serie favorita de Star trek: Deep space 9',
            'Serie favorita Small ville',
            'Película favorita Ready player one - constantine.',
            'Canción favorita save me -remy zero.',
            'Anime favorito Darker than black',
          ],
        },
        stack: {
          title: 'Mi stack',
          hardware: {
            title: 'Hardware:',
            items: {
              laptop: 'Laptop:',
              desktop: {
                title: 'Pc escritorio:',
                items: [
                  'CPU: AMD Rayzen 7 3700X',
                  'Placa base: Asus rog stick ',
                  'Memoria: 32 GB',
                  'Almacenamiento: 500 GB M2',
                  'Tarjeta grafica: asus 710',
                  'Fuente de alimentación:',
                  'Gabinete: XPG',
                ],
              },
              perifericos: {
                Monitor: '',
                Teclado: 'VSG Bellatrix',
                Micrófono: '',
                Auriculares: '',
              },
            },
          },
          software: {
            title: 'Software',
            items: [
              'IDE: VSCode',
              'Tema: Moonlight II Italic',
              'Terminal: Git bash (Windows) Iterm2 (MACOS)',
              'Fuente: Victor mono (Como instalar)',
              'Navegador: Microsoft Edge',
              'Escritura y organización: Notion',
            ],
          },
        },
        playlist: {
          title: 'Playlist stpotify',
          items: ['Anime to work', 'Tu mundo en español', 'Developer'],
        },
        presentaciones: {
          title: 'Presentaciones',
          items: ['AWS Lambda con TypeScript', 'PWA con Angular '],
        },
      },
      version: 0.1,
    };
    // this.aboutmeService.saveAboutMeData(this.initData);
  }

  ngOnInit(): void {
    this.getDataAbout();
  }
  getDataAbout(): void {
    this.aboutmeService.getAboutMeData().pipe(
      map((about) =>
        about.map((data) => ({
          id: data.payload.doc.id,
          datos: data.payload.doc.data(),
        }))
      )
    ).subscribe((responseData) => {
      this.aboutme = responseData;
      console.log(this.aboutme);
    });
  }
}
