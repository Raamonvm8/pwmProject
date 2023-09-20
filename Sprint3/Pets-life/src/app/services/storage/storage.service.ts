import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileUpload} from "../../models/File/file.model";
import {finalize, from, Observable} from "rxjs";
import {getDownloadURL} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private basePath: string = ""

  constructor(private dataBase: AngularFireDatabase, private storage: AngularFireStorage) {
  }

  pushFileToStorage(fileUpload: FileUpload, id: string): Observable<any> {
    if (fileUpload.type === "car") {
      this.basePath = "/cars/"
    } else {
      this.basePath = "/users/"
    }
    console.log("id: ", id)
    const renamedFile = new File([fileUpload.file], "" + id, {type: fileUpload.file.type})
    console.log(renamedFile)
    const newFileUpload = new FileUpload(renamedFile)
    console.log("FILE UPLOAD NAME: ", fileUpload)

    const filePath = this.basePath + `${newFileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath)
    const uploadTask = this.storage.upload(filePath, newFileUpload.file)
    console.log("subiendo archivo:")

    uploadTask.percentageChanges().subscribe(porcentage => {
        console.log("porcentaje de subida: ", porcentage)
      },
      error => {
        console.log(error);
      }
    );

    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUpload.url = downloadURL
        fileUpload.name = fileUpload.file.name
        this.saveFileData(fileUpload)
      });
    })).subscribe();

    return from(uploadTask.then(() => {
      return storageRef.getDownloadURL()
    }))
  }

  getFiles(numFiles: number, path: string): AngularFireList<FileUpload> {
    return this.dataBase.list(path, ref =>
      ref.limitToLast(numFiles)
    )
  }

  getUserImageUrl(uid: string, field: string): Observable<string> {
    const ref = this.storage.ref(`${field}/${uid}`);
    return ref.getDownloadURL();
  }

  deleteFile(path: string, id: string): void {
    this.deleteFileStorage(path, id)
  }

  private saveFileData(fileUpload: FileUpload) {
    this.dataBase.list(this.basePath).push(fileUpload)
  }

  private deleteFileDatabase(key: string) {
    return this.dataBase.list(this.basePath).remove(key)
  }

  private deleteFileStorage(path: string, id: string) {
    const storageRef = this.storage.ref(path);
    storageRef.child(id).delete();
  }
}