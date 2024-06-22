<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // mostrar todos los contactos con sus relaciones
    public function index()
    {
        return Contact::with(['phones', 'emails', 'addresses'])->get();
    }

    public function create()
    {
        //
    }

    // crear contacto
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phones' => 'array',
            'emails' => 'array',
            'addresses' => 'array',
        ]);

        $contact = Contact::create($validated);

        if (!empty($validated['phones'])) {
            $contact->phones()->createMany($validated['phones']);
        }
        if (!empty($validated['emails'])) {
            $contact->emails()->createMany($validated['emails']);
        }
        if (!empty($validated['addresses'])) {
            $contact->addresses()->createMany($validated['addresses']);
        }

        return response()->json($contact, 201);
    }

    // ver un contacto especifico con sus relaciones
    public function show(Contact $contact)
    {
        return $contact->load(['phones', 'emails', 'addresses']);
    }

    public function edit(Contact $contact)
    {
        //
    }

    // actualizar un contacto existente
    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'phones' => 'sometimes|array',
            'emails' => 'sometimes|array',
            'addresses' => 'sometimes|array',
        ]);

        $contact->update($validated);

        if (!empty($validated['phones'])) {
            $contact->phones()->delete();
            $contact->phones()->createMany($validated['phones']);
        }
        if (!empty($validated['emails'])) {
            $contact->emails()->delete();
            $contact->emails()->createMany($validated['emails']);
        }
        if (!empty($validated['addresses'])) {
            $contact->addresses()->delete();
            $contact->addresses()->createMany($validated['addresses']);
        }

        return response()->json($contact);
    }

    // eliminar un contacto existente
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json(null, 204);
    }
}
