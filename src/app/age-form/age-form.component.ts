import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-age-form',
  templateUrl: './age-form.component.html',
  styleUrls: ['./age-form.component.css']
})
export class AgeFormComponent {
  dateForm = this.fb.group({
    day: [null, [Validators.required, Validators.min(1), Validators.max(31)]],
    month: [null, [Validators.required, Validators.min(1), Validators.max(12)]],
    year: [null, [Validators.required, Validators.max(new Date().getFullYear())]],
  });
  tryToSubmit = false;
  dateIsValid = true;
  @Output() dateUpdatedEvent = new EventEmitter<Date | null>();
  
  constructor(private fb: FormBuilder) { }
  
  onSubmit() {
    if(this.dateForm.valid) {
      if(this.validateDate()) {
        this.tryToSubmit = false;
        this.dateIsValid = true;
        const d = this.dateForm.value;
        const newDate= new Date(d.year!, d.month! - 1, d.day!);
        this.dateUpdatedEvent.emit(newDate);
      } else {
        this.dateIsValid = false;
        this.tryToSubmit = true;
        this.dateUpdatedEvent.emit(null);
      }
    } else {
      this.tryToSubmit = true;
      this.dateUpdatedEvent.emit(null);
    }
  }

  validateDate() {
    const lengths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(!this.dateForm.value.year || !this.dateForm.value.month || !this.dateForm.value.day) {
      console.log("asd");
      return false;
    }
    return lengths[this.dateForm.value.month - 1] >= this.dateForm.value.day;
  }
}
