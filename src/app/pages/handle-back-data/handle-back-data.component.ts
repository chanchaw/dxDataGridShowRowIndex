import { Component, OnInit } from '@angular/core';
import { Goods, ColStyle, DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-handle-back-data',
  templateUrl: './handle-back-data.component.html',
  styleUrls: ['./handle-back-data.component.scss']
})
export class HandleBackDataComponent implements OnInit {
  
  tableData:Goods[] = [];
  colStyle:ColStyle[] = [];

  constructor(
    private service:DataService
  ) { 
    this.tableData = service.getData();
    this.colStyle = service.getColStyle();

    for(var i=0;i<this.tableData.length;i++){
      this.tableData[i].rowIndex = i + 1;
    }
    
  }

  ngOnInit() {
  }
}
