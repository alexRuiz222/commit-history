import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  headers: HttpHeaders | undefined;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set("Authorization", environment.githubToken);
  }
  getCommitsHistory<Observable>() {
    return this.http.get(`https://api.github.com/repos/${environment.githubUser}/${environment.githubRepo}/commits`, { headers: this.headers }).pipe(first());
  }

  getUser<Observable>() {
    // this.headers = new HttpHeaders().set("auth", "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");
    return this.http.get(`https://api.github.com/users/${environment.githubUser}`, { headers: this.headers }).pipe(first());
  }
}
