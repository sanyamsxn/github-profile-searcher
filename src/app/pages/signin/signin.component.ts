import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service"
import {ToastrService} from "ngx-toastr"
import {NgForm} from "@angular/forms"
import {Router} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }


  onSignIn(f:NgForm) {
    const {email, password} = f.form.value;
    this.auth.SignIn(email, password).then((res)=>{
      this.router.navigateByUrl('/')
      this.toastr.success("Signed In Successfully")
    }).catch((err)=>{
      this.toastr.error("username and password does not match")
    })
  }

}
