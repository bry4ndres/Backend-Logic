import { Component } from '@angular/core';
import { PetserviceService } from '../../services/petservice.service';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  constructor(private petService: PetserviceService) {}

  getPets() {
    this.petService.getPets().subscribe((data) => console.log(data));
  }
}
