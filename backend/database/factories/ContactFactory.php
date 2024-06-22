<?php

namespace Database\Factories;

use App\Models\Contact;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

class ContactFactory extends Factory
{
    // factory para generar contacts con registros falsos
    protected $model = Contact::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
        ];
    }
}
