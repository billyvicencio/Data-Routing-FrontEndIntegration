<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        return Product::create($request->validate([
            'name' => 'required|string',
            'price' => 'required|integer',
        ]));
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->only(['name', 'price']));
        return $product;
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->noContent();
    }
}