import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PhotosService {
    constructor(private httpClient:HttpClient){
    }

    getPhotos():Observable<any>{
        return this.httpClient.get('https://jsonplaceholder.typicode.com/photos')
    }

    addPhoto():Observable<any>{
        return this.httpClient.post('https://jsonplaceholder.typicode.com/photos',
        {
            "albumId":1,
            "title":"Some title of new photo",
            "url":"https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        });
    }
}