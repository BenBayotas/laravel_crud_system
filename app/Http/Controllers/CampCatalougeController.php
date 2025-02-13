<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CampCatalouge;
use Illuminate\Http\Client\ResponseSequence;
use Illuminate\Validation\ValidationException;

class CampCatalougeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $onlyTrashed = $request->query("only_trashed");

        if ($onlyTrashed) {
            $camp = CampCatalouge::onlyTrashed()->get();
        } else {
            $camp = CampCatalouge::all();
        }


        return response()->json([
            "camp"=> $camp,
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
        $camp = new CampCatalouge;
        try {

            $validated = request()->validate([
                "name"=> ['required'],
                "location"=> ['required'],
                "ratings"=> ['required'],
            ]);

            $camp = CampCatalouge::create([
                'name'=> $validated['name'],
                'location'=> $validated['location'],
                'ratings'=> $validated['ratings'],
            ]);

            return response()->json([
                'message' => 'Added new Entry',
                'camp' => $camp
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Not a valid entry',
                'errors' => $e->errors(),
            ], 422);
        }   catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error: '. $e->getMessage()
            ], 500);
        }

        
    }

    /**
     * Display the specified resource.
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(CampCatalouge $camp )
    {
        return response()->json([
            'camp'=> $camp,
        ]);        
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CampCatalouge $camp)
    {
        request()->validate([
            'name'=> ['required', 'string'],
            'location'=> ['required', 'string'],
            'ratings'=> ['required', 'string'],
        ]);

        $camp->update([
            'name'=> request('name'),
            'location'=> request('location'),
            'ratings'=> request('ratings'),
        ]);

        return response()->json([
            'message' => "Selected Entry Updated",
            'camp' => $camp,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param  int  $id
     * @return void
     */
    public function destroy(CampCatalouge $camp)
    {
        $camp->delete();
        
    }


    public function restoreCamp($id) {
        $camp = CampCatalouge::onlyTrashed()->find($id);

        if (!$camp){
            return response()->json(['error' => 'No Camp found or deleted'], 404);
        }
        $camp->restore();
        return response()->json(['message' => 'Camp Restored!', 'camp' => $camp]);

    }
}
