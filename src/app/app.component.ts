import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PetserviceService } from './services/petservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Frontend';

  constructor(private petService: PetserviceService) {
    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe((data) => console.log(data));
  }
}
