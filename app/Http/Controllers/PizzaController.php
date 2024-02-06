<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $pizzas = Pizza::all();

        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas
        ]);
    }

    /**
     * @param Pizza $pizza
     * 
     * @return Response
     */
    public function edit(Pizza $pizza): Response
    {
        return Inertia::render('Pizzas/Edit', [
            "pizza" => $pizza
        ]);
    }

    /**
     * @param Request $request
     * @param Pizza $pizza
     * 
     * @return void update
     */
    public function update(Request $request, Pizza $pizza): void
    {
        $pizza->update([
            'status' => $request->status,
        ]);
    }
}
