import { Component, OnInit } from '@angular/core';
import { Globals } from '../global';

@Component({
  selector: 'app-history-user',
  templateUrl: './history-user.component.html',
  styleUrls: ['./history-user.component.scss']
})
export class HistoryUserComponent implements OnInit {
  public userHistory :any;
  constructor( public global: Globals) {

    if (localStorage.getItem('names')) {
this.userHistory=JSON.parse(localStorage.getItem('names'));

    }
   }

  ngOnInit(): void {
  }

  ClearHistory(){
    localStorage.removeItem('names');
    this.global.names =[];
    this.userHistory ="";
    alert("User history cleared");
  }

}
