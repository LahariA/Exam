import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
import { Subscription, timer } from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
subscription:Subscription;
  data;
  table: any;
  row: any;


  constructor(private service :TableserviceService) { }

  ngOnInit() {
    this.subscription =timer(0,10000).pipe(
      switchMap( () => this.service.getdata())
    ).subscribe( response =>
      {
        console.log(response);
        this.data=response;
        this.table=this.data.hits;
        
      })

  }
  rowData(details){
this.row=details
  }

}
