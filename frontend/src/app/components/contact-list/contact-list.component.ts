import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent {
  contacts : Contact[] = [];

  constructor(private api: ApiService,private router: Router
  ){ }

  ngOnInit(): void {
    this.api.getContacts().subscribe(data => {
      this.contacts = data;
    })
  }

  newContact(): void {
    this.router.navigate(['/contacts/new']);
  }

  viewContact(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/contacts', id]);
    }
  }

  editContact(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/contacts/edit', id]);
    }
  }

  deleteContact(id: number): void {
    if (id !== undefined) {
      this.api.deleteContact(id).subscribe(() => {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
      });
    }
  }
}
