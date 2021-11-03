import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { Aboutme } from '@core/models/aboutme/aboutme';

@Injectable({
  providedIn: 'root',
})
export class AboutmeService {
  private postCollections: AngularFirestoreCollection<any>;
  constructor(private database: AngularFirestore) {
    this.postCollections = this.database.collection<any>('aboutme');
  }
  getAboutMeData() {
    return this.database.collection('aboutme').snapshotChanges();
  }
  // saveAboutMeData(aboutme: Aboutme): any {
  //   return new Promise<any>((resolve, reject) => {
  //     this.database
  //       .collection('aboutme')
  //       .add(aboutme)
  //       .then(
  //         (response) => {
  //           console.log(response);
  //         },
  //         (error) => reject(error)
  //       );
  //   });
  // }
}
