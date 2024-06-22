import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// componentes necesarios
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { routes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        ContactListComponent,
        ContactFormComponent,
        ContactDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot(routes),
        AppComponent
    ],
    providers: [ provideHttpClient(withFetch()) ],
    bootstrap: [AppComponent]
})
export class AppModule { }
