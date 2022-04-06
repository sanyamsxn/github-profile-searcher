import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email, password} = f.form.value //extracting email and password from form f

    this.auth.SignUp(email, password).then((res)=>{
      this.router.navigateByUrl('/signin')
      this.toastr.success("Successfully signed up");

    }).catch((err)=>{
      this.toastr.error(err)
      console.log("Error :", err  )
    })
  }

}
