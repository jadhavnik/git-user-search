import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Globals } from '../global';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  constructor(private userService :UserService, 
     public global: Globals) { }
  public username:string;
  public profile:any;

  public flag:boolean = false;
  ngOnInit(): void {
  }

  serachUser(){
    
    this.flag= false;
    this.profile ="";
   
    this.userService.getUserDetails(this.username).subscribe(user=>{
    // console.log(user);

    this.global.names.push(this.username);
    localStorage.setItem("names", JSON.stringify(this.global.names));

    // var storedNames = JSON.parse(localStorage.getItem("names"));

    // console.log(storedNames);
    this.profile=user;
    },
    (err:Error)=>{
      if(err){ 

        // alert("User not found"); 
        this.flag= true;
        this.global.names.push(this.username);
        localStorage.setItem("names", JSON.stringify(this.global.names));
       }
    });
    
  }

}
