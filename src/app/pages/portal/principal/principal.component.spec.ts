import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevtoService } from '@core/services/devto/devto.service';
import { GithubService } from '@core/services/github/github.service';
import { YoutubeService } from '@core/services/youtube/youtube.service';
import { SharedModule } from '@shared/shared.module';
import { Observable, of } from 'rxjs';

import { PrincipalComponent } from './principal.component';

class YoutubeServiceMock {
  getLastesYoutubeVideos(): Observable<any> {
    return of({ items: [{ id: { videoId: '1' } }] });
  }
}

class MockDevtoService {
  getPostDevTo() {
    return of([
      {
        type_of: 'article',
        id: 878634,
        title:
          'Agregar un step de coverage en github actions - Frontend (Angular)',
        description:
          'Con la llegada de github actions se ha simplificado la creación de flujos CI/CD y uno de los pasos...',
        readable_publish_date: "Oct 27 '21",
        slug: 'agregar-un-step-de-coverage-en-github-actions-frontend-angular-2poe',
        path: '/dannieldev/agregar-un-step-de-coverage-en-github-actions-frontend-angular-2poe',
        url: 'https://dev.to/dannieldev/agregar-un-step-de-coverage-en-github-actions-frontend-angular-2poe',
        comments_count: 0,
        public_reactions_count: 3,
        collection_id: null,
        published_timestamp: '2021-10-27T16:27:14Z',
        positive_reactions_count: 3,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s---jtkwcZx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4swu04mhmfrn1yukhw33.jpg',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--XBrCYzZu--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4swu04mhmfrn1yukhw33.jpg',
        canonical_url:
          'https://dev.to/dannieldev/agregar-un-step-de-coverage-en-github-actions-frontend-angular-2poe',
        created_at: '2021-10-27T16:27:14Z',
        edited_at: null,
        crossposted_at: null,
        published_at: '2021-10-27T16:27:14Z',
        last_comment_at: '2021-10-27T16:27:14Z',
        reading_time_minutes: 1,
        tag_list: ['frontend', 'github', 'devops', 'spanish'],
        tags: 'frontend, github, devops, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 860322,
        title: 'Como crear Pull request template y en español',
        description:
          'Esta vez será poco texto, la idea de este post es dejar un template para tus pull request, sea en...',
        readable_publish_date: "Oct 12 '21",
        slug: 'como-crear-pull-request-template-y-en-espanol-2pbb',
        path: '/dannieldev/como-crear-pull-request-template-y-en-espanol-2pbb',
        url: 'https://dev.to/dannieldev/como-crear-pull-request-template-y-en-espanol-2pbb',
        comments_count: 0,
        public_reactions_count: 6,
        collection_id: null,
        published_timestamp: '2021-10-12T00:13:28Z',
        positive_reactions_count: 6,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--n4VRjkLd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e09snr2kt4np8uk0b1oi.jpg',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--dnG9oymx--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e09snr2kt4np8uk0b1oi.jpg',
        canonical_url:
          'https://dev.to/dannieldev/como-crear-pull-request-template-y-en-espanol-2pbb',
        created_at: '2021-10-12T00:13:28Z',
        edited_at: '2021-10-12T00:14:28Z',
        crossposted_at: null,
        published_at: '2021-10-12T00:13:28Z',
        last_comment_at: '2021-10-12T00:13:28Z',
        reading_time_minutes: 2,
        tag_list: ['github', 'spanish'],
        tags: 'github, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 845977,
        title: 'Utiliza los mixins en tus break points',
        description:
          'Los media querys son una forma de acomodar nuestro sitio web para diferentes dispositivos.   Con la...',
        readable_publish_date: "Sep 30 '21",
        slug: 'utilizar-mixins-para-tus-break-point-4gfa',
        path: '/dannieldev/utilizar-mixins-para-tus-break-point-4gfa',
        url: 'https://dev.to/dannieldev/utilizar-mixins-para-tus-break-point-4gfa',
        comments_count: 0,
        public_reactions_count: 2,
        collection_id: null,
        published_timestamp: '2021-09-30T01:53:59Z',
        positive_reactions_count: 2,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--bn6kbEsW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/57m8umq8rrlayt71ddom.png',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--qYns-bGj--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/57m8umq8rrlayt71ddom.png',
        canonical_url:
          'https://dev.to/dannieldev/utilizar-mixins-para-tus-break-point-4gfa',
        created_at: '2021-09-30T01:53:59Z',
        edited_at: '2021-10-08T14:01:37Z',
        crossposted_at: null,
        published_at: '2021-09-30T01:53:59Z',
        last_comment_at: '2021-09-30T01:53:59Z',
        reading_time_minutes: 1,
        tag_list: ['sass', 'css', 'frontend', 'spanish'],
        tags: 'sass, css, frontend, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 823035,
        title: 'Recomendaciones para una entrevista técnica',
        description:
          'A lo largo de mi carrera profesional he apoyado el proceso de reclutamiento en varias empresas desde...',
        readable_publish_date: "Sep 14 '21",
        slug: 'recomendaciones-para-una-entrevista-tecnica-4079',
        path: '/dannieldev/recomendaciones-para-una-entrevista-tecnica-4079',
        url: 'https://dev.to/dannieldev/recomendaciones-para-una-entrevista-tecnica-4079',
        comments_count: 2,
        public_reactions_count: 2,
        collection_id: null,
        published_timestamp: '2021-09-14T00:52:20Z',
        positive_reactions_count: 2,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--qGTqpAUs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0j19qoht4nbpcjdgzor6.jpg',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--0NsWL5ih--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0j19qoht4nbpcjdgzor6.jpg',
        canonical_url:
          'https://dev.to/dannieldev/recomendaciones-para-una-entrevista-tecnica-4079',
        created_at: '2021-09-14T00:52:20Z',
        edited_at: null,
        crossposted_at: null,
        published_at: '2021-09-14T00:52:20Z',
        last_comment_at: '2021-10-06T16:32:18Z',
        reading_time_minutes: 1,
        tag_list: ['desarrollador', 'pruebas', 'spanish'],
        tags: 'desarrollador, pruebas, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 815689,
        title: 'La mejor fuente para nuestro IDE',
        description:
          'Existen muchos tipo de fuentes en la web destinadas a múltiples propósitos y entre todos estos esta...',
        readable_publish_date: "Sep 7 '21",
        slug: 'fuente-para-developers-5fbi',
        path: '/dannieldev/fuente-para-developers-5fbi',
        url: 'https://dev.to/dannieldev/fuente-para-developers-5fbi',
        comments_count: 0,
        public_reactions_count: 4,
        collection_id: null,
        published_timestamp: '2021-09-07T01:47:42Z',
        positive_reactions_count: 4,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--tUTkVdEJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0c81t4lkbqf4qxlr67ni.png',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--0pkkDtSL--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0c81t4lkbqf4qxlr67ni.png',
        canonical_url: 'https://dev.to/dannieldev/fuente-para-developers-5fbi',
        created_at: '2021-09-07T01:47:42Z',
        edited_at: '2021-09-07T14:22:29Z',
        crossposted_at: null,
        published_at: '2021-09-07T01:47:42Z',
        last_comment_at: '2021-09-10T22:45:50Z',
        reading_time_minutes: 1,
        tag_list: ['fuente', 'spanish', 'developer', 'desarrollo'],
        tags: 'fuente, spanish, developer, desarrollo',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 809683,
        title: 'Lazy loading en Angular',
        description:
          'Que es Lazy loadind? es la técnica mas utilizada para la mejora de carga de nuestras aplicaciones, en...',
        readable_publish_date: "Sep 1 '21",
        slug: 'lazy-loading-en-angular-2nd0',
        path: '/dannieldev/lazy-loading-en-angular-2nd0',
        url: 'https://dev.to/dannieldev/lazy-loading-en-angular-2nd0',
        comments_count: 0,
        public_reactions_count: 1,
        collection_id: null,
        published_timestamp: '2021-09-01T00:33:50Z',
        positive_reactions_count: 1,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--31065hIZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cbcyvikpkzvjqj84p0k3.png',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--W2RxMiI8--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cbcyvikpkzvjqj84p0k3.png',
        canonical_url: 'https://dev.to/dannieldev/lazy-loading-en-angular-2nd0',
        created_at: '2021-09-01T00:33:50Z',
        edited_at: null,
        crossposted_at: null,
        published_at: '2021-09-01T00:33:50Z',
        last_comment_at: '2021-09-01T00:33:50Z',
        reading_time_minutes: 2,
        tag_list: ['frontend', 'angular', 'lazyloading', 'spanish'],
        tags: 'frontend, angular, lazyloading, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 801453,
        title: 'Así puedes abreviar los imports en angular',
        description:
          'En muchas ocasiones importando nuestros módulos o diferentes funcionalidades custom quedamos con...',
        readable_publish_date: "Aug 24 '21",
        slug: 'short-links-en-angular-3o69',
        path: '/dannieldev/short-links-en-angular-3o69',
        url: 'https://dev.to/dannieldev/short-links-en-angular-3o69',
        comments_count: 0,
        public_reactions_count: 0,
        collection_id: null,
        published_timestamp: '2021-08-24T01:39:18Z',
        positive_reactions_count: 0,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--avtrPklb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vl0fxg80yj6h6gn6924e.png',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--7wZHxmKa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vl0fxg80yj6h6gn6924e.png',
        canonical_url: 'https://dev.to/dannieldev/short-links-en-angular-3o69',
        created_at: '2021-08-24T01:39:18Z',
        edited_at: '2021-10-03T01:41:43Z',
        crossposted_at: null,
        published_at: '2021-08-24T01:39:18Z',
        last_comment_at: '2021-08-24T01:39:18Z',
        reading_time_minutes: 1,
        tag_list: ['angular', 'frontend', 'spanish'],
        tags: 'angular, frontend, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 797718,
        title: 'Ejecutar varias aplicaciones en Node.Js',
        description:
          'Hace unos días en un proyecto tuve que desplegar dos aplicaciones en Node.js en el mismo servidor y...',
        readable_publish_date: "Aug 20 '21",
        slug: 'ejecutar-varias-aplicaciones-en-node-js-2806',
        path: '/dannieldev/ejecutar-varias-aplicaciones-en-node-js-2806',
        url: 'https://dev.to/dannieldev/ejecutar-varias-aplicaciones-en-node-js-2806',
        comments_count: 0,
        public_reactions_count: 2,
        collection_id: null,
        published_timestamp: '2021-08-20T00:46:00Z',
        positive_reactions_count: 2,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--UozaDPK_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/llky5cxi50p4uno8xsrr.jpeg',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--M2Oc4pCZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/llky5cxi50p4uno8xsrr.jpeg',
        canonical_url:
          'https://dev.to/dannieldev/ejecutar-varias-aplicaciones-en-node-js-2806',
        created_at: '2021-08-20T00:45:38Z',
        edited_at: null,
        crossposted_at: null,
        published_at: '2021-08-20T00:46:00Z',
        last_comment_at: '2021-08-20T00:46:00Z',
        reading_time_minutes: 1,
        tag_list: ['node', 'backend', 'javascript', 'spanish'],
        tags: 'node, backend, javascript, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 797716,
        title: 'Generar aplicaciónes NodeJs',
        description:
          'Cuando recién iniciaba en este mundo del desarrollo en NodeJs mi pregunta era ¿como iniciar un...',
        readable_publish_date: "Aug 20 '21",
        slug: 'generar-aplicaciones-nodejs-44jo',
        path: '/dannieldev/generar-aplicaciones-nodejs-44jo',
        url: 'https://dev.to/dannieldev/generar-aplicaciones-nodejs-44jo',
        comments_count: 2,
        public_reactions_count: 4,
        collection_id: null,
        published_timestamp: '2021-08-20T00:43:09Z',
        positive_reactions_count: 4,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--b1kAmgb---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5p1cgqzu8hswp8032n8n.jpeg',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--o62_6LTB--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5p1cgqzu8hswp8032n8n.jpeg',
        canonical_url:
          'https://dev.to/dannieldev/generar-aplicaciones-nodejs-44jo',
        created_at: '2021-08-20T00:41:25Z',
        edited_at: null,
        crossposted_at: null,
        published_at: '2021-08-20T00:43:09Z',
        last_comment_at: '2021-08-21T01:09:31Z',
        reading_time_minutes: 1,
        tag_list: ['node', 'javascript', 'backend', 'spanish'],
        tags: 'node, javascript, backend, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 797711,
        title: 'Variables en CSS',
        description:
          'Una de las ventajas que nos trae CSS para los que hemos desarrollado Backend es la utilización de las...',
        readable_publish_date: "Aug 20 '21",
        slug: 'variables-en-css-cf',
        path: '/dannieldev/variables-en-css-cf',
        url: 'https://dev.to/dannieldev/variables-en-css-cf',
        comments_count: 2,
        public_reactions_count: 6,
        collection_id: null,
        published_timestamp: '2021-08-20T00:38:30Z',
        positive_reactions_count: 6,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--SQcu6nPC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/snav6yqk5hu0icsh1kyn.jpg',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--bvBa4ykh--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/snav6yqk5hu0icsh1kyn.jpg',
        canonical_url: 'https://dev.to/dannieldev/variables-en-css-cf',
        created_at: '2021-08-20T00:38:18Z',
        edited_at: null,
        crossposted_at: null,
        published_at: '2021-08-20T00:38:30Z',
        last_comment_at: '2021-08-22T06:41:15Z',
        reading_time_minutes: 1,
        tag_list: ['css', 'spanish', 'frontend'],
        tags: 'css, spanish, frontend',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
      {
        type_of: 'article',
        id: 793109,
        title: 'Como realizar botón de ver contraseña',
        description:
          'Realizando un proyecto en mi trabajo me encontré con el la pantalla de login donde solicitaban...',
        readable_publish_date: "Aug 20 '21",
        slug: 'como-realizar-boton-de-ver-contrasena-odn',
        path: '/dannieldev/como-realizar-boton-de-ver-contrasena-odn',
        url: 'https://dev.to/dannieldev/como-realizar-boton-de-ver-contrasena-odn',
        comments_count: 0,
        public_reactions_count: 3,
        collection_id: null,
        published_timestamp: '2021-08-20T00:30:28Z',
        positive_reactions_count: 3,
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--p01Kqc9M--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pjo2k58txijkaofmso77.jpg',
        social_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YC-ymi_n--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pjo2k58txijkaofmso77.jpg',
        canonical_url:
          'https://dev.to/dannieldev/como-realizar-boton-de-ver-contrasena-odn',
        created_at: '2021-08-16T03:56:53Z',
        edited_at: null,
        crossposted_at: null,
        published_at: '2021-08-20T00:30:28Z',
        last_comment_at: '2021-08-20T00:30:28Z',
        reading_time_minutes: 2,
        tag_list: ['javascript', 'html', 'frontend', 'spanish'],
        tags: 'javascript, html, frontend, spanish',
        user: {
          name: 'Danniel Navas',
          username: 'dannieldev',
          twitter_username: 'dannielnavas',
          github_username: 'DannielNavas',
          website_url: 'https://danniel.dev',
          profile_image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--TRwziUnV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
          profile_image_90:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--akgu62Xt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/480793/8ebaab85-8927-4c64-8694-659aa2e1b731.jpeg',
        },
      },
    ]);
  }
}

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;
  const GithubServiceMock: GithubService = {
    getAllProjects: jasmine.createSpy().and.returnValue(
      of([
        {
          id: 489385583,
          node_id: 'R_kgDOHStubw',
          name: 'backendDannielDev',
          full_name: 'DannielNavas/backendDannielDev',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/backendDannielDev',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/DannielNavas/backendDannielDev',
          forks_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/backendDannielDev/deployments',
          created_at: '2022-05-06T14:29:46Z',
          updated_at: '2022-05-06T19:59:38Z',
          pushed_at: '2022-05-06T21:17:25Z',
          git_url: 'git://github.com/DannielNavas/backendDannielDev.git',
          ssh_url: 'git@github.com:DannielNavas/backendDannielDev.git',
          clone_url: 'https://github.com/DannielNavas/backendDannielDev.git',
          svn_url: 'https://github.com/DannielNavas/backendDannielDev',
          homepage: 'https://backend-danniel-dev.vercel.app',
          size: 180,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          topics: ['backend', 'devto', 'github', 'personal-website'],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'main',
        },
        {
          id: 495213545,
          node_id: 'R_kgDOHYRb6Q',
          name: 'card-html-css',
          full_name: 'DannielNavas/card-html-css',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/card-html-css',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/DannielNavas/card-html-css',
          forks_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/card-html-css/deployments',
          created_at: '2022-05-23T00:47:53Z',
          updated_at: '2022-05-23T00:47:59Z',
          pushed_at: '2022-05-23T00:47:56Z',
          git_url: 'git://github.com/DannielNavas/card-html-css.git',
          ssh_url: 'git@github.com:DannielNavas/card-html-css.git',
          clone_url: 'https://github.com/DannielNavas/card-html-css.git',
          svn_url: 'https://github.com/DannielNavas/card-html-css',
          homepage: null,
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'HTML',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
        },
        {
          id: 458237512,
          node_id: 'R_kgDOG1AmSA',
          name: 'clean-code-javascript-es',
          full_name: 'DannielNavas/clean-code-javascript-es',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/clean-code-javascript-es',
          description: 'Clean Code traducido al Español ',
          fork: true,
          url: 'https://api.github.com/repos/DannielNavas/clean-code-javascript-es',
          forks_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/clean-code-javascript-es/deployments',
          created_at: '2022-02-11T15:20:10Z',
          updated_at: '2022-02-11T15:20:08Z',
          pushed_at: '2022-02-01T14:05:48Z',
          git_url: 'git://github.com/DannielNavas/clean-code-javascript-es.git',
          ssh_url: 'git@github.com:DannielNavas/clean-code-javascript-es.git',
          clone_url:
            'https://github.com/DannielNavas/clean-code-javascript-es.git',
          svn_url: 'https://github.com/DannielNavas/clean-code-javascript-es',
          homepage: '',
          size: 332,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          allow_forking: true,
          is_template: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
        },
        {
          id: 304179535,
          node_id: 'MDEwOlJlcG9zaXRvcnkzMDQxNzk1MzU=',
          name: 'dannieldev',
          full_name: 'DannielNavas/dannieldev',
          private: false,
          owner: {
            login: 'DannielNavas',
            id: 7865626,
            node_id: 'MDQ6VXNlcjc4NjU2MjY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7865626?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/DannielNavas',
            html_url: 'https://github.com/DannielNavas',
            followers_url:
              'https://api.github.com/users/DannielNavas/followers',
            following_url:
              'https://api.github.com/users/DannielNavas/following{/other_user}',
            gists_url:
              'https://api.github.com/users/DannielNavas/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/DannielNavas/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/DannielNavas/subscriptions',
            organizations_url: 'https://api.github.com/users/DannielNavas/orgs',
            repos_url: 'https://api.github.com/users/DannielNavas/repos',
            events_url:
              'https://api.github.com/users/DannielNavas/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/DannielNavas/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/DannielNavas/dannieldev',
          description:
            'Página personal donde se muestra proyectos post e información personal, desarrollada en angular, con consumo de apis como Github dev.to y youtube',
          fork: false,
          url: 'https://api.github.com/repos/DannielNavas/dannieldev',
          forks_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/forks',
          keys_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/teams',
          hooks_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/hooks',
          issue_events_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/events',
          assignees_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/branches{/branch}',
          tags_url: 'https://api.github.com/repos/DannielNavas/dannieldev/tags',
          blobs_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/languages',
          stargazers_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/stargazers',
          contributors_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/contributors',
          subscribers_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/subscribers',
          subscription_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/subscription',
          commits_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/merges',
          archive_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/downloads',
          issues_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/labels{/name}',
          releases_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/DannielNavas/dannieldev/deployments',
          created_at: '2020-10-15T01:40:35Z',
          updated_at: '2022-01-19T00:03:39Z',
          pushed_at: '2022-05-17T00:04:43Z',
          git_url: 'git://github.com/DannielNavas/dannieldev.git',
          ssh_url: 'git@github.com:DannielNavas/dannieldev.git',
          clone_url: 'https://github.com/DannielNavas/dannieldev.git',
          svn_url: 'https://github.com/DannielNavas/dannieldev',
          homepage: 'https://danniel.dev',
          size: 25072,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          allow_forking: true,
          is_template: false,
          topics: ['angular', 'personal', 'personal-blog', 'personal-website'],
          visibility: 'public',
          forks: 0,
          open_issues: 1,
          watchers: 0,
          default_branch: 'main',
        },
      ])
    ),
  } as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalComponent],
      imports: [SharedModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: YoutubeService, useClass: YoutubeServiceMock },
        { provide: DevtoService, useClass: MockDevtoService },
        { provide: GithubService, useValue: GithubServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
