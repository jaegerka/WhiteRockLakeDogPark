import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parkrules',
  templateUrl: './parkrules.component.html',
  styleUrls: ['./parkrules.component.css']
})
export class ParkrulesComponent implements OnInit {

  constructor() { }

  vaccinationsExpanded: boolean = false;
  vaccinationsmore: boolean = true;

  sterilizationExpanded: boolean = false;
  sterilizationsmore: boolean = true;

  maxDogsExpanded: boolean = false;
  maxdogsmore: boolean = true;

  pickupExpanded: boolean = false;
  pickupmore: boolean = true;

  ngOnInit(): void {
  }

  expandVaccinations() {
    if (this.vaccinationsExpanded == false) {
      this.vaccinationsExpanded = true;
    } else {
      this.vaccinationsExpanded = false;
    }

    if (this.vaccinationsmore == true) {
      this.vaccinationsmore = false;
    } else {
      this.vaccinationsmore = true;
    }
  }

  expandSterilization() {
    if (this.sterilizationExpanded == false) {
      this.sterilizationExpanded = true;
    } else {
      this.sterilizationExpanded = false;
    }

    if (this.sterilizationsmore == true) {
      this.sterilizationsmore = false;
    } else {
      this.sterilizationsmore = true;
    }
  }

  expandMaxDogs() {
    if (this.maxDogsExpanded == false) {
      this.maxDogsExpanded = true;
    } else {
      this.maxDogsExpanded = false;
    }

    if (this.maxdogsmore == true) {
      this.maxdogsmore = false;
    } else {
      this.maxdogsmore = true;
    }
  }

  expandPickup() {
    if (this.pickupExpanded == false) {
      this.pickupExpanded = true;
    } else {
      this.pickupExpanded = false;
    }

    if (this.pickupmore == true) {
      this.pickupmore = false;
    } else {
      this.pickupmore = true;
    }
  }

}
