import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userName: string;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
  	this.userName = this.routeInfo.snapshot.params["name"];
  	console.log(this.userName);
  }

}
