import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url: string = "http://www.mocky.io/v2/5c76bcbe3200008b3df463a5";
  url2: string = "http://www.mocky.io/v2/5c76c715320000de20f463d1";
  url3: string = "http://www.mocky.io/v2/5c7bf4c52f0000c013e59fce";
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  angularResponse: any;
  djangoResponse: any;
  PHPresponse: any;
  angularCourse() {
      this.http.get(this.url).subscribe( e => this.angularResponse = e  );
  }

  phpCourse() {
    this.http.get(this.url2).subscribe( e => this.PHPresponse = e );

  }
  DjangoCourse() {
    this.http.get(this.url3).subscribe( e => this.djangoResponse = e );
  }


}
