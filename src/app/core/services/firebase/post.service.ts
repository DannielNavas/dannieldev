import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { Posts } from 'src/app/core/models/posts/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postCollections: AngularFirestoreCollection<Posts>;
  constructor(private database: AngularFirestore) {
    this.postCollections = this.database.collection<Posts>('posts');
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

  // tslint:disable-next-line: typedef
  getPost() {
    return this.database.collection('posts').snapshotChanges();
  }
  getArticle(id: string) {
    return this.database
    .collection('posts')
    .doc(id)
    .valueChanges();
  }
}
