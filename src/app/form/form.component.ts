import { Component, OnInit } from '@angular/core';
import { FormData } from '../form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init();
  }

  objectKeys = Object.keys;

  formData : any = {
    "items": {
             "pens": 100,
             "sharpeners": 32,
             "pencils": 76,
             "fish": 12,
             "chicken": 13,
             "veg": 43,
             "chocolate": 4
    },
    "groups": {
             "stationery": ["pens", "sharpeners", "pencils"],
             "food": ["fish", "chicken", "veg", "chocolate"]
    }
  }

  groupTotal:any = {};
  
  onChange(group : string) : void {
    console.log(group);
    this.updateAmt(group);
  }

  init() : void {
    console.log('init');
    
    for(let group in this.formData.groups){
      this.groupTotal[group] = this.calTotal(group);
    }
    console.log(this.groupTotal);
  }

  calTotal(group: string) : number {
    console.log('calTotal');
    let amt = 0;
    for(let item of this.formData.groups[group]){
      
      amt += this.formData.items[item];
      
    }
    console.log(group + ' ' + amt);
    return amt;
  }

  updateAmt(group: string) : void {
    let idx = 0;
    for(let item of this.formData.groups[group]){
      if(idx == 0){
        this.formData.items[item] = parseInt(this.groupTotal[group]);
      }else{
        this.formData.items[item] = 0;
      }
      
      idx++;
    }
    //let firstItem = this.formData.groups[group][0];
   // this.formData.items[firstItem] = this.groupTotal[group];
    console.log(this.formData);
  }


}
