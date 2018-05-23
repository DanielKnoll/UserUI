import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

//import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-logreg',
    templateUrl: './logreg.component.html',
    styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
    isLoggedIn:  boolean = false;
    userName: string = 'Elek Teszt';
    userEmail: string = '';
    userPswd: string = '';
    logOutServerPath: string = 'http://0.0.0.0:8080/api/logout';
    closeResult: string;

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
    }

    onUpdateUserName(event: Event) {
        this.userName = (<HTMLInputElement>event.target).value;
    }

    onUpdateUserEmail(event: Event) {
        this.userEmail = (<HTMLInputElement>event.target).value;
    }

    onUpdateUserPswd(event: Event) {
        this.userPswd = (<HTMLInputElement>event.target).value;
    }

    onLogOut() {
        this.isLoggedIn = false;
    }

    onRegister() {
    }

    onLogIn() {
        if(this.userName.length < 3) {
            open(error);
        }
        this.isLoggedIn = true;
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
