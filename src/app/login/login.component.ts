import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit() {
    const queryParams = { username: this.username, password: this.password };
    this.router.navigate(['/task-list'], { queryParams });
 }


}
