import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit, OnChanges {
  constructor() { }
  @Input() user:any
  ngOnInit(): void {
  }


  ngOnChanges():void{
  }

  

}
