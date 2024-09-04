import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  year: number; // Added year property
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    { id: 1, name: 'Project One', title: 'First Project', image: 'https://picsum.photos/300/200?random=1', description: 'This is a description for the first project.', year: 2024 },
    { id: 2, name: 'Project Two', title: 'Second Project', image: 'https://picsum.photos/300/200?random=2', description: 'This is a description for the second project.', year: 2023 },
    { id: 3, name: 'Project Three', title: 'Third Project', image: 'https://picsum.photos/300/200?random=3', description: 'This is a description for the third project.', year: 2022 },
    { id: 4, name: 'Project Four', title: 'Fourth Project', image: 'https://picsum.photos/300/200?random=4', description: 'This is a description for the fourth project.', year: 2021 },
    { id: 5, name: 'Project Five', title: 'Fifth Project', image: 'https://picsum.photos/300/200?random=5', description: 'This is a description for the fifth project.', year: 2020 },
    { id: 6, name: 'Project Six', title: 'Sixth Project', image: 'https://picsum.photos/300/200?random=6', description: 'This is a description for the sixth project.', year: 2019 }
  ];
}
