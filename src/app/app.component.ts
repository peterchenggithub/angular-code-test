import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test1';

  formData : any   = {
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


}
