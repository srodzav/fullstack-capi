<?php

namespace Database\Factories;

use App\Models\Contact;
use App\Models\Email;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmailFactory extends Factory
{
    // factory para generar emails con registros falsos
    protected $model = Email::class;

    public function definition(): array
    {
        return [
            'contact_id' => Contact::factory(), // lo ligamos a un contact
            'email' => $this->faker->safeEmail,
        ];
    }
}
