import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup, FormControl,  Validators } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ FormComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
          declarations: [FormComponent],
          imports: [FormsModule, ReactiveFormsModule]
      })
      .compileComponents();
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.formData =  {
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
    };
    fixture.detectChanges();
  });


  
  it('should create', () => {
   expect(component).toBeDefined();
  });

  it('should update stationery ', () => {
    
    component.getControl('stationery').setValue(50);
    component.updateAmt('stationery');
    expect(component.formData.groups['stationery'].length).toEqual(3);
    let idx = 0;
    for(let item of  component.formData.groups['stationery']){
   
      if(idx == 0){
        expect(component.formData.items[item]).toEqual(50);
      }else{
        expect(component.formData.items[item]).toEqual(0);
      }

      idx++;
    
    }
 
  });

  it('should validate stationery ', () => {
    
    let control = component.getControl('stationery');
    control.setValue('a');
    expect(control.errors.pattern).not.toBeNull();
    control.setValue(9999);
    expect(control.errors.min).not.toBeNull();
    expect(control.errors.max).not.toBeNull();
    control.setValue(null);
    expect(control.errors.required).not.toBeNull();
    control.setValue(50);
    expect(control.valid).toBeTruthy();
  });

});
