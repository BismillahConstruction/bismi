import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faHammer, faTruck, faWrench, faTools, faBuilding, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class ServicesComponent {
  services = [
    { 
      icon: faHammer, 
      title: 'Construction', 
      description: 'High-quality construction services.', 
      details: 'We specialize in building commercial and residential properties, ensuring top-notch quality and compliance with all industry standards.' 
    },
    { 
      icon: faTruck, 
      title: 'Logistics', 
      description: 'Reliable transportation for your materials.', 
      details: 'Our logistics team efficiently handles the transportation and delivery of construction materials to ensure timely project completion.' 
    },
    { 
      icon: faWrench, 
      title: 'Maintenance', 
      description: 'Expert maintenance and repairs.', 
      details: 'We offer comprehensive maintenance services to keep your buildings in optimal condition, including routine inspections and emergency repairs.' 
    },
    { 
      icon: faTools, 
      title: 'Renovation', 
      description: 'Transform your space with our renovation services.', 
      details: 'From updating interiors to complete remodels, we provide renovation services that enhance functionality and aesthetics while staying within budget.' 
    },
    { 
      icon: faBuilding, 
      title: 'Design', 
      description: 'Innovative design solutions.', 
      details: 'Our design team creates customized blueprints and 3D models to visualize your project, ensuring that every detail aligns with your vision and requirements.' 
    },
    { 
      icon: faShieldAlt, 
      title: 'Safety', 
      description: 'Prioritizing safety on every project.', 
      details: 'We implement strict safety protocols on all job sites to protect our workers, clients, and the public, maintaining a safe and secure work environment.' 
    }
  ];
}
