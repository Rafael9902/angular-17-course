import { Component, EventEmitter, Input, Output } from '@angular/core';
import { projectData } from '../utils/data';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input()
  data!: projectData[];

  @Output()
  select = new EventEmitter<number>();

  onSelect(index: number) {
    this.select.emit(index);
  }
}
