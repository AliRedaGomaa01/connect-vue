<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Photo;
use App\Models\Work;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Toggle Like
     */
    public function __invoke( Request $request)
    {
        $rules = [
            'type' => ['required','in:photo,work','string','max:255'],
        ];
        $rules['id'] = $request->type == 'photo' 
            ? ['required','integer','exists:photos,id']
            :($request->type == 'work' ? ['required','integer','exists:works,id']:null);
        if($rules['id']==null){
            unset($rules['id']);
        }
        $validated = $request->validate($rules);
        if($request->type == 'photo'){
            $likeable = Photo::find($validated['id']);
        }else if($request->type == 'work'){
            $likeable = Work::find($validated['id']);
        }
        $query = $likeable->likes()->where('user_id', auth()->id());
        if ($query->count() > 0) {
            $query->delete();
        } else {
            $likeable->likes()->create(['user_id' => auth()->id()]);
        }
        return redirect()->back();
    }

}
