import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'bio.html',
    selector: 'page-bio'
})
export class BioPage {

    public person;

    constructor( public params: NavParams ){
        this.person = params.get("person");
    }

}