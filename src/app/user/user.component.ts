import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userName: string;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
  	this.routeInfo.params.subscribe( (params: Params) => this.userName = params["name"]);

  	// this.userName = this.routeInfo.snapshot.params["name"];
  	console.log(this.userName);
  }

}
