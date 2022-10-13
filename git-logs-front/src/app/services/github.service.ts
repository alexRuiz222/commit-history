import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
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

  getCommitsHistory<Observable>() { // get commits history from github api
    return this.http.get(`https://api.github.com/repos/${environment.githubUser}/${environment.githubRepo}/commits`, { headers: this.headers })
      .pipe(first(), map(
        (data: any) => { // map data to get only the needed data
          return data.map((info: any) => {
            console.log(info)
            return {
              message: info.commit.message,
              date: info.commit.committer.date,
              name: info.commit.committer.name
            }
          })
        }));
  }

  getUser<Observable>() { // get user from github api
    // this.headers = new HttpHeaders().set("auth", "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");
    return this.http.get(`https://api.github.com/users/${environment.githubUser}`, { headers: this.headers }).pipe(first());
  }
}
