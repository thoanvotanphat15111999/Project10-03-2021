import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  constructor(){
    // window.onbeforeunload = function(e) {
    //   localStorage.removeItem('token');
    //   return false;
    // };
  }
}
