import { Routes } from '@angular/router';

// componentes necesarios
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

// definir rutas
export const routes: Routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contacts/new', component: ContactFormComponent },
    { path: 'contacts/:id', component: ContactDetailComponent },
    { path: 'contacts/edit/:id', component: ContactFormComponent }
];