import { Component, OnInit } from '@angular/core';
import { IPost } from '@core/models/devto/response-devto';
import { IResponseGithub } from '@core/models/github/response-github';
import { IResponseStatistics } from '@core/models/statistic/response-statistec';
import { RequestYoutube } from '@core/models/youtube/request-youtube';
import { Item, ResponseYoutube } from '@core/models/youtube/response-youtube';
import { DevtoService } from '@core/services/devto/devto.service';
import { GithubService } from '@core/services/github/github.service';
import { YoutubeService } from '@core/services/youtube/youtube.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  datos = [1, 2, 3];
  dataYoutube!: ResponseYoutube;
  posts!: IPost[];
  projects!: IResponseGithub[];
  videos!: Item[];
  constructor(
    private youtubeService: YoutubeService,
    private devtoService: DevtoService,
    private githubService: GithubService
  ) {}
  ngOnInit(): void {
    this.getDataYoutube();
    this.getPostsDevto();
    this.getAllProjects();
    this.getAllVideos();
  }

  getDataYoutube(): void {
    this.youtubeService
      .getLastesYoutubeVideos()
      .subscribe((data: ResponseYoutube) => {
        this.dataYoutube = data;
      });
  }
  getPostsDevto(): void {
    this.devtoService.getPostDevTo().subscribe((data: IPost[]) => {
      this.posts = data.slice(0, 3);
    });
  }

  getAllProjects(): void {
    this.githubService.getAllProjects().subscribe((data: IResponseGithub[]) => {
      this.projects = data;
    });
  }

  getAllVideos(): void {
    this.youtubeService.getLastesYoutubeVideos().subscribe((data) => {
      this.videos = data.items;
    });
  }
}
