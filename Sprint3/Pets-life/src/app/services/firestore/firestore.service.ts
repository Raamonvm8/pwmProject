import {Injectable, Query} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, where, query, getDocs, getDoc, DocumentData, QuerySnapshot
} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { Pet } from 'src/app/models/Pet/pet.model';
import { AppUser } from 'src/app/models/User/user/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  

  constructor(private firestore: Firestore, private auth: AngularFireAuth) {
  }
  getAllDocs(coll: string) {
    const usersRef = collection(this.firestore, coll)
    return collectionData(usersRef, {idField: 'id'}) as Observable<any>
  }

  createDoc(coll: string, data: {}) {
    const collRef = collection(this.firestore, coll)
    return addDoc(collRef, data);
  }

  deleteDoc(coll: string, docId: string) {
    const collRef = doc(this.firestore, coll, docId)
    return deleteDoc(collRef);
  }

  updateDoc(coll: string, data: {}) {
    const collRef = doc(this.firestore, coll)
    return updateDoc(collRef, data);
  }

  createDocWithId(coll: string, data: { }, id: string) {
    const collRef = doc(this.firestore, coll, id)
    return setDoc(collRef, data)
  }

  getDocById(coll: string) {
    const docRef = doc(this.firestore, coll)
    return docData(docRef, {idField: 'id'})
  }
  

  getUserDataByUID(uid: string): DocumentReference<DocumentData> {
    return doc(this.firestore, `users/${uid}`);
  }

  async getDocsByFieldUserId(userId: string, coleccion: string) {
    const q = query(collection(this.firestore, coleccion), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

  getAllUserData(userId: string): Observable<any[]> {
    const q = query(
      collection(this.firestore, 'tu_coleccion_de_usuarios'), // Reemplaza con el nombre de tu colección
      where('userId', '==', userId)
    );
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  async getDocByIdSnapshot(coll: string){
    const docRef = doc(this.firestore, coll);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return undefined
    }
  }
  
}
