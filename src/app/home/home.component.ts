import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  private course: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data['login']);
    }, err => {
      console.log(err);
    });

    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      });

    // this.course = this.http
    //   .get('https://angular-http-guide.firebaseio.com/courses.json')
    //   .map(data => _.values(data))
    //   .do(console.log);

    this.course = this.http.get('https://angular-http-guide.firebaseio.com/courses.json')
    .subscribe(data => {
      console.log(data);
    });
  }
}
