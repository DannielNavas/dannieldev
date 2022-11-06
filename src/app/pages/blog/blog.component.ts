import { Component, OnInit } from '@angular/core';
import { IPost } from '@core/models/devto/response-devto';
import { DevtoService } from '@core/services/devto/devto.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    posts!: IPost[];

    constructor(private devtoService: DevtoService) { }
    ngOnInit(): void {
        this.getPostsDevto();
    }

    getPostsDevto(): void {
        this.devtoService.getPostDevTo().subscribe((data: IPost[]) => {
            this.posts = data;
        });
    }

}
