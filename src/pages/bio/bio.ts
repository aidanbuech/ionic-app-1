import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    templateUrl: 'bio.html',
    selector: 'page-bio'
})
export class BioPage {

    public person;

    constructor( public params: NavParams, public nav: NavController ){
        this.person = params.get("person");
    }

    goBack() {
        this.nav.pop(); //this is an example of how to create a back button
}
}
