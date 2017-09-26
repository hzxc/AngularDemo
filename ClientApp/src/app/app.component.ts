import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'OpenGameList';
  activePage:string = 'home';
  setActivePage(event:any,page:string){
    this.activePage = page;
  }

  isActivePage(page:string):boolean{
    return this.activePage === page;
  }
}
