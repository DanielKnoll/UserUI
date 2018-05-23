import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logreg',
    templateUrl: './logreg.component.html',
    styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
    isLoggedIn:  boolean = false;
    userName: string = 'Elek Teszt';
    logOutServerPath: string = 'http://0.0.0.0:8080/api/logout';

    constructor() { }

    ngOnInit() {
    }

    onLogOut() {
        this.isLoggedIn = false;
    }

    onLogIn() {
        this.isLoggedIn = true;
    }

    onRegister() {
        this.isLoggedIn = true;
    }
}
