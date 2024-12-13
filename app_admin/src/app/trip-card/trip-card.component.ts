import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(private router: Router, private AuthenticationService: AuthenticationService) {}

  ngOnInit() : void{

  }

  public isLoggedIn(): boolean {
    return this.AuthenticationService.isLoggedIn();
  }
  
  private editTrip(trip:Trip): void {
    console.log('Inside TripListingComponent#editTrip');
  }
}
