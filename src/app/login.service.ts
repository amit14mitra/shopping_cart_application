import { Injectable } from '@angular/core';
import {Subject,Observable} from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable()
export class LoginService {
   
        @SessionStorage()
        userName:string;

        subj:Subject<string> = new Subject<string>();

        setUserName(userName:string){
            this.userName = userName;
            this.subj.next(this.userName);// Notify to the observers / subscribers
        }

        getUserName():Observable<string>{
            return this.subj.asObservable();
        }
}
