import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  ngOnInit() {
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
}
