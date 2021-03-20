import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../admin/shared/models/user.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  formModel  = {
    UserName:'',
    Password:''
  }
  message = ""
  constructor(private service :UserService,private router:Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
    this.router.navigateByUrl('/admin');
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.service.login(form.value).subscribe(
        (res:any)=>{
          localStorage.setItem('token',res.token);
          this.router.navigateByUrl('/admin')
        },
        err =>{
          if(err.status ==400){
            this.message ="vui long kiem tra lai ten dang nhap,mat khau";
          }else{
            console.log(err)
          }
        }

    )
  }

}
