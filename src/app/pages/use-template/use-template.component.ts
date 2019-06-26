import { DataService, Goods, ColStyle } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-template',
  templateUrl: './use-template.component.html',
  styleUrls: ['./use-template.component.scss']
})
export class UseTemplateComponent implements OnInit {

  tableData:Goods[] = [];
  colStyle:ColStyle[] = [];

  constructor(
    private service:DataService
  ) { 
    this.tableData = service.getData();
    this.colStyle = service.getColStyle();

    console.log(this.tableData);
    console.log(this.colStyle);
    
  }

  ngOnInit() {
  }

}
