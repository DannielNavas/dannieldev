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
    });
  }
}
