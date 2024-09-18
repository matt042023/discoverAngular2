import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocation } from '../interfaces/housinglocation';
import {RouterModule} from '@angular/router';
import {RouterLink} from '@angular/router';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
export class AppComponent {
  title = 'homes';
}