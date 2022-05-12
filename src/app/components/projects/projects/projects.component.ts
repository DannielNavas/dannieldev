import { Component, OnInit } from '@angular/core';
import { IResponseGithub } from '@core/models/github/response-github';
import { GithubService } from '@core/services/github/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects!: IResponseGithub[];
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.githubService.getAllProjects().subscribe((data: IResponseGithub[]) => {
      this.projects = data;
      console.log(data);
    });
  }

  getLenguaje(project: string): void {
    this.githubService.getLenguajeProject(project).subscribe((data: any) => {
      console.log(data);
    });
  }
  async share(project: string): Promise<void> {
    const shareData = {
      title: 'Danniel Dev',
      text: 'Puedes encontrar este y otros proyectos en https://danniel.dev. Mil gracias por tu visita.',
      url: project,
    };
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.log(error);
    }
  }
}
