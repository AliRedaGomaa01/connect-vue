<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'bio',
        'cv',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    # Relations 
    // follow model
    public function following(){
        return $this->belongsToMany(User::class, 'follows', 'following_id', 'followed_id');
    }
    public function followedBy(){
        return $this->belongsToMany(User::class, 'follows', 'followed_id', 'following_id');
    }
    public function isFollowing( $followed_id){
        return $this->following()->where('followed_id', $followed_id)->count() > 0;
    }
    // photo model
    public function photos(){
        return $this->hasMany(Photo::class,'user_id','id');
    }
    public function works(){
        return $this->hasMany(Work::class,'user_id','id');
    }

    public function likes(){
        return $this->hasMany(Like::class,'user_id','id');
    }
}
