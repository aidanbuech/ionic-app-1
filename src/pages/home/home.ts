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
      grade: "Junior",
      age: "16",
      school: "Creighton Prep",
    },
    {
      name: "Daniel Noon",
      grade: "Junior",
      age: "16",
      school: "Creighton Prep",
    },
    {
      name: "Xavier Vaughn",
      grade: "Junior",
      age: "17?",
      school: "Creighton Prep",
    },
    {
      name: "Parker Wall",
      grade: "Sophomore",
      age: "15?",
    },
    {
      name: "Ben Wingerter",
      grade: "Senior",
      age: "18?",
      school: "Creighton Prep",
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
