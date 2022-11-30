import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeDetails: string = '';

  constructor(public service: HomeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getHomeDetails().subscribe((res: any) => {
      this.homeDetails = res.text;
    });
  }

}
