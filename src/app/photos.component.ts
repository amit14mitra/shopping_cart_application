import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
    selector: 'photos',
    template: `
    <button (click)="addPhoto()">Add Photo!</button>
    <h1>Photos</h1>
    <table>
        <tr *ngFor="let photo of photos">
            <td>{{photo.id}}</td>
            <td><img [src]="photo.thumbnailUrl" /></td>
        </tr>
    </table>
    `,
    styles: [`
        table{
            border: 5px solid gray;
            margin:40px;
        }
        tr{
            display:inline;
        }
        td{
            margin:5px;
        }
    `],
    providers:[PhotosService]
})
export class PhotosComponent implements OnInit {
    photos:any;
    constructor(private photosService:PhotosService) { }

    ngOnInit(): void { 
        this.photosService.getPhotos().subscribe(photosList => {
            this.photos = photosList;
        })
    }
    addPhoto(){
        this.photosService.addPhoto().subscribe(res =>{
            console.log(res);
        })
    }
}
