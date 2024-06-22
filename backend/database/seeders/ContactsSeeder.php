<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactsSeeder extends Seeder
{
    public function run(): void
    {
        // Creamos 5000 registros con datos falsos (usando factory)
        Contact::factory(5000)->create()->each(function ($contact) {
            $contact->phones()->saveMany(\App\Models\Phone::factory(3)->make());
            $contact->emails()->saveMany(\App\Models\Email::factory(2)->make());
            $contact->addresses()->saveMany(\App\Models\Address::factory(2)->make());
        });
    }
}
