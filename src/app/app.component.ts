import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SnappForget-Password';
  showSite:string="none"
  showSiteroot:number=0
  email:string=null
  okemail:boolean=true
  
  constructor() {setTimeout(() => {
    this.showSite="hidden";this.showSiteroot=1;
  }, 2000);}
ngOnInit() {}
btnchangecolor(){
  return this.email === "" ? "#a3a3a3" : "green";
}}