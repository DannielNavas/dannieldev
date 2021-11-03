import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { GithubRepos } from '@core/models/github/github.repos';
import { GithubService } from '@core/services/github/github.service';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  posts: GithubRepos[];
  message: any;
  constructor(private githubService: GithubService) { }
  angular = faAngular;
  github = faGithub;
  nodejs = faNodeJs;
  folder = faFolderOpen;
  ngOnInit(): void {
    this.getInfoRepository();
  }

  getInfoRepository(): any {
    this.githubService.getRepos().subscribe((repos: GithubRepos[]) => {
      this.posts = repos;
    }, error => {
      this.message = error;
    });
  }

}
