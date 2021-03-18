import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/models/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  message = "";
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service : UserService,private router:Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
    this.router.navigateByUrl('/dangnhap');
  }
  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/admin');
      },
      err => {
        if (err.status == 400){
          this.message = "Đăng nhập không thành công.Kiểm tra lại tên đăng nhập và mật khẩu";        }
        else
          console.log(err);
      }
    );
  }
}
