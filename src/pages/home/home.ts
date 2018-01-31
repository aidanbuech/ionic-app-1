import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BioPage } from '../bio/bio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public members = [
    {
      name: "Aidan Buechler",
      grade: "Junior"
    },
    {
      name: "Daniel Noon",
      grade: "Junior"
    },
    {
      name: "Xavier Vaughn",
      grade: "Junior"
    },
    {
      name: "Parker Wall",
      grade: "Sophomore"
    },
    {
      name: "Ben Wingerter",
      grade: "Senior"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  openBioPage(person) {
    this.navCtrl.push(BioPage, {
      person: person
    })
  }

}
