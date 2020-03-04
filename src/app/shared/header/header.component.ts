import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ppf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* Set the width of the side navigation to 250px */
  openNav() {
    document.getElementById("ppf-sidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("ppf-sidenav").style.width = "0";
  }

  // $(document).ready(function(){
  //   $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  //     $(this).toggleClass('open');
  //   });
  // });

}
