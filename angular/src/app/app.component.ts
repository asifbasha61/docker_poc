import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeService } from './services/home.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  homeDetails: any;
  constructor(public service: HomeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getHomeDetails().subscribe((res: any) => {
      this.homeDetails = res.text;
    });
  }
}
