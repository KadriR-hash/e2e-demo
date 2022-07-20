import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  serverURL : string = "http://localhost:8000/file";
  constructor(private httpClient : HttpClient) { }


  writeFileUsingFs(message : any){
    return this.httpClient.post<void>(`${this.serverURL}/${message}`,message);
  }


  
}
