<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return abort(404);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Photo/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('photo')) {
            $file = $request->photo;
            $extension = $request->photo->extension();
            $newName = time() . rand(100,10000) . '.' . $extension; 
            $path = $file->storeAs('photos', $newName, 'public');
            $photo = auth()->user()->photos()->create([
                'path' => $path
            ]);
        }
        return redirect()->back()->with('success', __('Stored Successfully'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Photo $photo)
    {
        $photo->isLiked = $photo->likes()->where('user_id', auth()->id())->count() > 0;
        $photo->likesCount = $photo->likes()->count();
        return inertia('Photo/Show',['photo' => $photo]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Photo $photo)
    {
        return abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Photo $photo)
    {
        return abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Photo $photo)
    {
        abort_if($photo->user_id != auth()->id(), 403);
        $filePath = 'storage/' . $photo->path; 
        if(file_exists($filePath)){
            unlink($filePath);
        }
        $photo->delete();
        return redirect()->route('user.show',auth()->id())->with('success', __('Deleted Successfully'));
    }
}
