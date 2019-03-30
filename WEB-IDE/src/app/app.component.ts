import { Component,OnInit } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private appService:AppService
  ){}

  ngOnInit(){
    const path = '/Users/chunlei/Documents/GitHub/Ace-Summary/WEB-IDE/src';

    this.appService.getFileTree(path).subscribe(res=>{
      console.log(res);
      
    })
  }
}
