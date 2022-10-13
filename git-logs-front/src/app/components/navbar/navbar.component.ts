import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/users';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = new User();
  mobile_menu = false;
  constructor(private _githubService: GithubService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getGithubUser();
  }

  getGithubUser() { // get github user from github api
    this.spinner.show();
    this._githubService.getUser().subscribe((data: any) => {
      this.user = data;
      this.spinner.hide();
    });
  }

}
