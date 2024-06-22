<?php

namespace Database\Factories;

use App\Models\Contact;
use App\Models\Phone;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

class PhoneFactory extends Factory
{
    // factory para generar phones con registros falsos
    protected $model = Phone::class;

    public function definition(): array
    {
        return [
            'contact_id' => Contact::factory(), // lo ligamos a un contact
            'phone' => $this->faker->phoneNumber,
        ];
    }
}
