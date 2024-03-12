<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * get the searching page
     */
    public function search()
    {
        $searchable = User::pluck('email','name')->toArray();
        return inertia('User/Search', compact('searchable'));
    }

    /**
     * get the searching result
     */
    public function searchResult(Request $request)
    {
        $searchable = User::pluck('email','name')->toArray();
        $validated = $request->validate(['search' => 'required']);
        $users = User::where('email', 'like', '%' . $validated['search'] . '%')->orWhere('name', 'like', '%' . $validated['search'] . '%')->paginate(15)->toArray();
        return inertia('User/Search', compact('searchable','users'));
    }

    /**
     * get the followed users page
     */
    public function following()
    {
        $users = auth()->user()->following()->paginate(15)->toArray();
        return inertia('User/Index', ['users' => $users]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(15)->toArray();
        return inertia('User/Index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        abort(404);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $user->isFollowed = auth()->user()->isFollowing($user->id);
        $user->followedCount = $user->followedBy()->count();
        return inertia('User/Show', ['user' => $user ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        abort(404);
    }
}
