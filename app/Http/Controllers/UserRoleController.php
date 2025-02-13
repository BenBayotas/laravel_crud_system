<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use illuminate\Support\Str;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = User::all();

        return view("user_role.index", ['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('user_role.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();

        $request->validate([
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'required|string|max:255|unique:users,email',
            'firstname' => 'required|string|max:255',
            'middlename' => 'nullable|string|max:255',
            'lastname' => 'required|string|max:255',
            'suffix'=> 'required|string|max:5',
            'gender'=> 'required|string|max:10',
            'status'=> 'required|string|max:10',
            'password' => 'required|string|min:8|',
        ]);

        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->firstname = $request->input('firstname');
        $user->middlename = $request->input('middlename');
        $user->lastname = $request->input('lastname');
        $user->suffix = $request->input('suffix');
        $user->gender = $request->input('gender');
        $user->status = $request->input('status');
        $user->password = bcrypt($request->input('password'));
        $user->remember_token = Str::random(10);

        $user->save();

        return redirect('/')->with('success','Added New User!');


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        return view('user_role.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        

        $validateData = $request->validate([
            'username' => 'required|string|max:255|unique:users,username,'. $id,
            'email' => 'required|string|max:255|unique:users,email,' . $id,
            'firstname' => 'nullable|string|max:255',
            'middlename' => 'nullable|string|max:255',
            'lastname' => 'nullable|string|max:255',
            'suffix'=> 'nullable|string|max:5',
            'gender'=> 'nullable|string|max:10',
            'status'=> 'required|string|max:10',
        ]);

        $user = User::findOrFail($id);

        $user->username = $validateData['username'];
        $user->email = $validateData['email'];
        $user->firstname = $validateData['firstname'];
        $user->middlename = $validateData['middlename'];
        $user->lastname = $validateData['lastname'];
        $user->suffix = $validateData['suffix'];
        $user->gender = $validateData['gender'];
        $user->status = $validateData['status'];

        $user->save();

        return redirect('/')->with('success','User Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)

    {
        $user = User::findOrFail($id);
        $user->delete();

        redirect('/')->with('success','User Deleted');
    }
}
