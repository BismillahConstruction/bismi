import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elevations',
  standalone: true,
  templateUrl: './elevations.component.html',
  styleUrls: ['./elevations.component.css'],
  imports: [CommonModule]
})
export class ElevationsComponent {
  images = [
    { src: 'https://picsum.photos/200/300?random=1', alt: 'Image 1' },
    { src: 'https://picsum.photos/200/300?random=2', alt: 'Image 2' },
    { src: 'https://picsum.photos/200/300?random=3', alt: 'Image 3' },
    { src: 'https://picsum.photos/200/300?random=4', alt: 'Image 4' },
    { src: 'https://picsum.photos/200/300?random=5', alt: 'Image 5' },
    { src: 'https://picsum.photos/200/300?random=6', alt: 'Image 6' }
  ];

  @ViewChild('fullscreenImage') fullscreenImage!: ElementRef;

  openFullscreen(imageSrc: string): void {
    const overlay = document.querySelector('.fullscreen-overlay') as HTMLElement;
    overlay.classList.add('show');
    this.fullscreenImage.nativeElement.src = imageSrc;
  }

  closeFullscreen(): void {
    const overlay = document.querySelector('.fullscreen-overlay') as HTMLElement;
    overlay.classList.remove('show');
  }
}
