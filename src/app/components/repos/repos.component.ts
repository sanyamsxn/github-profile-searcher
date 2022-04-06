import { Component, OnInit , Input, OnChanges, ChangeDetectorRef} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  constructor(private git : GithubService, private ref:ChangeDetectorRef) { }

  @Input() repoUrl:string;
  repos :any ;

  ngOnInit(): void {
  }
  ngOnChanges() :void{
    if(this.repoUrl){
      this.git.getRepos(this.repoUrl).subscribe((repos)=>{
        this.repos= repos;
        this.ref.detectChanges()
      }, (err)=>{
        console.log(err)
      })
    }
  }


}
