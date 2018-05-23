import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogregComponent } from './navbar/logreg/logreg.component';
import { UserListComponent } from './user-list/user-list.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LogregComponent,
        UserListComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
