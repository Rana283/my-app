import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';
  constructor(private router:Router){

  }

  onclickHandler(){
    console.log('event fired');
    this.router.navigate(['home']);
  }
}
