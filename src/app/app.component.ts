import { Component } from '@angular/core';
import { MyDate } from './myDate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  years = '--';
  months = '--';
  days = '--';

  updateDate(newDate: MyDate | null) {
    if(newDate) {
      const currentDate = new Date();
      let years = currentDate.getFullYear() - newDate.year;
      let months = currentDate.getMonth() + 1 - newDate.month;
      let days = currentDate.getDate() - newDate.day;
      if(days < 0) {
        months--;
        days += 30;
      }
      if(months < 0) {
        years--;
        months += 12;
      }
      this.years = years.toString();
      this.months = months.toString();
      this.days = days.toString();
    }
    else {
      this.years = '--';
      this.months = '--';
      this.days = '--';
    }
  }
}
