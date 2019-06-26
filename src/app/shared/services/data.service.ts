import { Injectable } from '@angular/core';

export class Goods{
  rowIndex:number;
  sid:string;
  name:string;
}

export class ColStyle{
  dataField:string;
  caption:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData():Goods[]{
    return [
      { rowIndex:null,sid:'shr',name:'珊瑚绒'},
      { rowIndex:null,sid:'flr',name:'法兰绒'},
      { rowIndex:null,sid:'tm',name:'兔毛'},
      { rowIndex:null,sid:'sjcr',name:'水晶超柔'}
    ];
  }

  getColStyle():ColStyle[]{
    return [
      { dataField:'sid',caption:'编号' },
      { dataField:'name',caption:'名称' }
    ];
  }
}
