<?php

namespace App\Http\Controllers;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $book = Book::all();

        return response()->json([
            'book' => $book,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse $request
     */
    public function store()
    {   
        $book = new Book;

        try {
            $validated = request()->validate([
                'title'=> ['required'],
                'author'=> ['required'],
            ]);
    
            $book = Book::create([
                'title' => $validated['title'],
                'author' => $validated['author'],
            ]);
    
            return response()->json([
                'message'=>'Book Added',
                'book'=> $book
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([ 
                'message'=> 'Validation Error',
                'errors'=> $e->errors()
                ],422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error: ' . $e->getMessage()
            ], 500);
        }
                
    }

    /**
     * Display the specified resource.
     * 
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Book $book)
    {
        return response()->json([
            'book' => $book,
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Book $book)
    {
        request()->validate([
            'title'  => ['required', 'string'],
            'author' => ['required', 'string'],
//            'employer_id' => ['exists:employers,id']
        ]);

        $book->update([
            'title'  => request('title'),
            'author' => request('author'),
//            'employer_id' => request('employer_id')
        ]);

        return response()->json([
            'message' => 'Selected book updated',
            'book'    => $book
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param  int  $id
     * @return void
     */
    public function destroy(Book $book)
    {
        $book->delete();
    }
}
