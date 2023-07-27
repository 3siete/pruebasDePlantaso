import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdownMenuResponsive:boolean = false;
  dropdownMenu:boolean = false;

  responsiveMenu(){
    if(this.dropdownMenuResponsive === false){
      this.dropdownMenuResponsive = true;
    }else{
      this.dropdownMenuResponsive = false;
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
