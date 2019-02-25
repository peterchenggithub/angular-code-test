import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../form-data';
import {FormGroup, FormControl,  Validators } from '@angular/forms';

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

  @Input() formData : any;
  
  formGroup: FormGroup = new FormGroup({});

  groupTotal:any = {};
  
  onChange(group : string) : void {
    console.log(group);
    if(this.getControl(group).valid){
      this.updateAmt(group);
    }

  }

  init() : void {
    console.log('init');
 
    for(let group in this.formData.groups){
      let control: FormControl = new FormControl(group, [Validators.required, Validators.pattern('[0-9]*'), Validators.min(0), Validators.max(1000)]);
      control.setValue( this.calTotal(group));
      this.formGroup.addControl(group, control);
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
        this.formData.items[item] = parseInt(this.getControl(group).value);
      }else{
        this.formData.items[item] = 0;
      }
      
      idx++;
    }

    console.log('updateAmt');
    console.log(this.formData);
  }

  getControl(name: string) { return this.formGroup.get(name); }


}
