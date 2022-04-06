import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import {AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  userName :any;
  error = null;

  constructor(private github : GithubService, private auth:AuthService, private ref : ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  handleGenerateUser(){
    this.github.getUserDetails(this.userName).subscribe((user)=>{
    this.user = user;
      this.error= null;
      this.ref.detectChanges()
    },
    (err)=>{
      this.user=undefined;
      this.error= err;
      this.ref.detectChanges()
    })
  }

}
