import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SnappForget-Password';
  showSite:number=1
  
  constructor() {setTimeout(() => {
    this.showSite = 0;
  }, 2500);}
  
ngOnInit() {}

}