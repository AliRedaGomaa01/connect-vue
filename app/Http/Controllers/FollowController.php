<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated  = $request->validate([
            'followed_id' => ['required', 'exists:users,id'],
        ]);
        $followedUser = User::where('id', $validated['followed_id'])->first();
        auth()->user()->following()->toggle($followedUser);
        $followStatus = auth()->user()->isFollowing($validated['followed_id']);
        return response()->json([ 'status' => true , 'followStatus' => $followStatus ], 200);
    }

}
