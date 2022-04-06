import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email?:string;
  constructor(private auth:AuthService, private router:Router, private toastr:ToastrService) {
    auth.getUser().subscribe((user) => {
      this.email = user?.email!;
    })
   }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try{
      const res = await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info("Successfully sign out");
      this.email =undefined;
      }
      catch(err){
        this.toastr.error("Not signed out");
      }
  }

}
