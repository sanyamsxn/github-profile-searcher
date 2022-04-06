import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http : HttpClient) { }

  getUserDetails(userName : string){      //when we pass username it returns its details and repos
    return this.http.get(`http://api.github.com/users/${userName}`)
  }

  getRepos(repoUrl:string){
    return this.http.get(repoUrl)     //when the upper fn is executed it brings a big object , from there we will extract 
  }                                   //repos url and will execute this fn
}
