import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faMedium } from '@fortawesome/fontawesome-free-brands';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { collection, Firestore } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  posts: number[] = [];
  item$: Observable<any>;
  // item$: Observable<Item[]>;
  constructor(private database: Firestore) {
    // this.postCollections = this.database.collection<any>('posts');
    const collections = collection(database, 'aboutme');
    this.item$ = collectionData(collections);
    this.item$.subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    this.posts = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ];
  }

}
