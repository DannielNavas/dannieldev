import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/firebase/post.service';
import htmlmodule from 'html';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  // idArticle: string;
  // article: any;
  // body: any;
  // constructor( private route: ActivatedRoute, private postService: PostService, ) {
  //   this.idArticle = this.route.snapshot.paramMap.get('idarticle');
  // }

  // ngOnInit(): void {
  //   this.getAllArticle();
  // }

  // getAllArticle(): void {
  //   this.postService.getArticle(this.idArticle).subscribe((articles) => {
  //     this.article = articles;
  //     this.body = htmlmodule.prettyPrint(this.article.body);
  //     console.log(this.body);
  //   });
  // }
}
