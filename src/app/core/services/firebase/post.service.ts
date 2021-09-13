import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
};
@Injectable({
  providedIn: 'root',
})
export class PostService {
  item$: Observable<any>;
  // item$: Observable<Item[]>;
  constructor(private database: Firestore) {
    // this.postCollections = this.database.collection<any>('posts');
    const collections = collection(database, 'aboutme');
    this.item$ = collectionData(collections);
  }

  // savePost(post: Posts): any {
  //   return new Promise<any>((resolve, reject) => {
  //     this.database
  //       .collection('posts')
  //       .add(post)
  //       .then(
  //         (response) => {
  //           console.log(response);
  //         },
  //         (error) => reject(error)
  //       );
  //   });
  // }

  // eslint-disable-next-line
  // getPost() {
  //   return this.database.collection('posts').snapshotChanges();
  // }
  // getArticle(id: string): any {
  //   return this.database
  //   .collection('posts')
  //   .doc(id)
  //   .valueChanges();
  // }
}
