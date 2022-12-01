import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  constructor(private api: AppService){}
  socialMediaName: string = 'whatsapp';

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.api.getData().subscribe((res:any) => {
      this.socialMediaName = res.name;
    })
  }
}
