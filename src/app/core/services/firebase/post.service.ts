import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postCollections: AngularFirestoreCollection<any>;
  constructor(private database: AngularFirestore) {
    this.postCollections = this.database.collection<any>('posts');
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
  getPost() {
    return this.database.collection('posts').snapshotChanges();
  }
  // getArticle(id: string): any {
  //   return this.database
  //   .collection('posts')
  //   .doc(id)
  //   .valueChanges();
  // }
}
