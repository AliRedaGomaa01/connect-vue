<?php

namespace App\Http\Controllers;

use App\Enums\WorkTypesEnum;
use App\Models\Work;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $following = auth()->user()->following?->pluck('id')?->toArray();
        $works = Work::whereIn('user_id',$following)->paginate(15)->toArray();
        return inertia('Work/Index', [
            'works' => $works
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Work/Create', [
            'types' => WorkTypesEnum::toArray(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $types= implode(',',array_keys(WorkTypesEnum::toArray())); 
        $validated = $request->validate([
            'type' => ['required',"in:{$types}",'string','max:255'],
            'category' => ['required','string','max:255'],
            'title' => ['required','string','max:255'],
            'description' => ['required','string','max:1023'],
            'url' => ['required','string','max:255','url:https'],
        ]);
        unset($validated['type']);
        auth()->user()->works()->create($validated);
        return redirect()->back()->with('success', __('Stored Successfully'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Work $work)
    {
        $work->isLiked = $work->likes()->where('user_id', auth()->id())->count() > 0;
        $work->likesCount = $work->likes()->count();
        return inertia('Work/Show', [
            'work' => $work
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Work $work)
    {
        return inertia('Work/Edit', [
            'work' => $work,
            'types' => WorkTypesEnum::toArray(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Work $work)
    {
        $types= implode(',',array_keys(WorkTypesEnum::toArray())); 
        $validated = $request->validate([
            'type' => ['required',"in:{$types}",'string','max:255'],
            'category' => ['required','string','max:255'],
            'title' => ['required','string','max:255'],
            'description' => ['required','string','max:1023'],
            'url' => ['required','string','max:255','url:https'],
        ]);
        unset($validated['type']);
        $work->update($validated);
        return redirect()->back()->with('success', __('Updated Successfully'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Work $work)
    {
        $work->delete();
        return redirect()->route('user.show',auth()->id())->with('success', __('Deleted Successfully'));
    }
}
