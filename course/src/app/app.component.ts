import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { data, projectData } from './utils/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'course';
  data: projectData[] = [];

  ngOnInit(): void {
    this.data = data;
  }

  onKeyUp(title: string) {
    this.title = title;
  }

  onSelect(index: number) {
    alert(index);
  }
}
