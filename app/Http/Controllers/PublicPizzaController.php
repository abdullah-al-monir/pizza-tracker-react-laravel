<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * [Description PublicPizzaController]
 */
class PublicPizzaController extends Controller
{
    /**
     * @param Pizza $pizza
     * 
     * @return Response 
     */
    public function show(Pizza $pizza): Response
    {
        return Inertia::render('Pizzas/Show', [
            'pizza' => $pizza
        ]);
    }
}
