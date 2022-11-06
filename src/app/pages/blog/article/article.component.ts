import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '@core/models/devto/article.interface';
import { IUser } from '@core/models/devto/user.interace';
import { DevtoService } from '@core/services/devto/devto.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    id?: string | null;
    article: IArticle = {
        type_of: '',
        id: 0,
        title: '',
        description: '',
        readable_publish_date: '',
        slug: '',
        path: '',
        url: '',
        comments_count: 0,
        public_reactions_count: 0,
        published_timestamp: '',
        positive_reactions_count: 0,
        cover_image: '',
        social_image: '',
        canonical_url: '',
        created_at: '',
        published_at: '',
        last_comment_at: '',
        reading_time_minutes: 0,
        tag_list: '',
        tags: [],
        body_html: '',
        body_markdown: '',
        user: {
            name: '',
            username: '',
            twitter_username: '',
            github_username: '',
            user_id: 0,
            website_url: '',
            profile_image: '',
            profile_image_90: '',
        }
    };
    user: IUser = {
        type_of: '',
        id: 0,
        username: '',
        name: '',
        summary: '',
        twitter_username: '',
        github_username: '',
        location: '',
        joined_at: '',
        profile_image: ''
    };

    constructor(private route: ActivatedRoute, private devtoService: DevtoService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.callDataPost();
    }
    callDataPost(): void {
        if (this.id) {
            this.devtoService.getpost(this.id).subscribe((article: IArticle) => {
                this.article = article;
                this.getDataUser(article.user.user_id);
                setTimeout(() => {
                    document.querySelectorAll('img').forEach((image) => {
                        if (image.width > 700) {
                            image.style.width = '100%'
                        }

                    });
                    document.querySelectorAll('pre').forEach((pre) => {
                        pre.style.backgroundColor = '#08090a';
                        pre.style.padding = '24px';
                        pre.style.borderRadius = '8px';
                        pre.style.overflow = 'auto';
                        pre.style.color = '#7ed07e'
                    });
                    document.querySelectorAll('.js-actions-panel').forEach((el) => el.remove())
                }, 1000)
            })
        }
    }

    getDataUser(id: number): void {
        this.devtoService.getDataUser(id).subscribe((data: IUser) => this.user = data)
    }

}
