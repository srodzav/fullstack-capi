<?php

namespace Database\Factories;

use App\Models\Contact;
use App\Models\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    // factory para generar address con registros falsos
    protected $model = Address::class;

    public function definition(): array
    {
        return [
            'contact_id' => Contact::factory(), // lo ligamos a un contact
            'address' => $this->faker->address,
        ];
    }
}
