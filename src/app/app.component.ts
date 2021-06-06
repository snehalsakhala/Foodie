import { Component, OnInit } from '@angular/core';
import { ForLocationService } from './for-location.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(private _location: ForLocationService) { }

  ngOnInit() {
    this.getLocation();
    this.jqueryFunction();

  }



  jqueryFunction() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });

      $('#dismiss').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });

      $('#buttonupload').click(function () {
        $(location).attr('href', 'http://localhost:4200/types')
      });

      $('#buttonsearch').click(function () {
        $(location).attr('href', 'http://localhost:4200/types')
      });


    });
  }


  getLocation() {
    this._location.getLocationService().then(resp => {
      console.log(resp.lng);
      console.log(resp.lat);
    })

  }

}
