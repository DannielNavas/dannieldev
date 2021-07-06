import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  // eslint-disable-next-line
  getPost() {
    // TODO ajustar para mostrar los post
    return this.database.collection('posts').snapshotChanges();
  }
}
