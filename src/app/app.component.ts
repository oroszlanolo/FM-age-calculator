import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  years = '--';
  months = '--';
  days = '--';

  updateDate(newDate: Date | null) {
    if(newDate) {
      const currentDate = new Date();
      let years = currentDate.getFullYear() - newDate.getFullYear();
      let months = currentDate.getMonth() - newDate.getMonth();
      let days = currentDate.getDate() - newDate.getDate();
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
