import { Component, Input } from '@angular/core';
import { IPost } from '@core/models/devto/response-devto';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() posts: IPost = {
    type_of: '',
    id: 0,
    title: '',
    description: '',
    cover_image: '',
    readable_publish_date: '',
    social_image: '',
    tag_list: [],
    tags: '',
    slug: '',
    path: '',
    url: '',
    canonical_url: '',
    comments_count: 0,
    positive_reactions_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    created_at: '',
    edited_at: '',
    crossposted_at: null,
    published_at: '',
    last_comment_at: '',
    published_timestamp: '',
    reading_time_minutes: 0,
    user: {
      name: '',
      username: '',
      twitter_username: '',
      github_username: '',
      website_url: '',
      profile_image: '',
      profile_image_90: '',
    },
    organization: {
      name: '',
      username: '',
      slug: '',
      profile_image: '',
      profile_image_90: '',
    },
  };
  constructor() {}
}
