import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubService } from 'src/app/services/github.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commits-history',
  templateUrl: './commits-history.component.html',
  styleUrls: ['./commits-history.component.css']
})
export class CommitsHistoryComponent implements OnInit {
  history: any[] | undefined;

  repository = environment.githubRepo;
  constructor(private _githunbService: GithubService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getCommitsHistory();
  }

  getCommitsHistory() {// get commits history
    this.spinner.show();
    this._githunbService.getCommitsHistory().subscribe((data: any) => {
      this.history = data;
      this.spinner.hide();
    });
  }

}
