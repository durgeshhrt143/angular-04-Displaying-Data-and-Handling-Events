import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: ` <div (click)="onDivClicked()">
      <h2>{{ title }}</h2>
      <h2 [textContent]="title"></h2>
      <img src="{{ imgUrl }}" />
      <img [src]="imgUrl" />
      <button class="btn btn-primary" [class.active]="isActive">save</button>
      <button
        (click)="onSave($event)"
        [style.backgroundColor]="isActive ? 'red' : 'blue'"
      >
        save
      </button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />`,
})
export class CoursesComponent {
  email = 'durgesh@gmail.com';
  isActive = true;
  title = 'list of courses';
  imgUrl = 'https://static.cars24.com/cars24/images/cars-logo.png?v=1';
  // courses;
  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
  getTitle() {
    return this.title;
  }
  onSave($event) {
    $event.stopPropagation();
    console.log('button clicked', $event);
  }
  onDivClicked() {
    console.log('div clicked');
  }
  onKeyUp() {
    console.log('enter key press', this.email);
  }
}
