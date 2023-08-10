<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'role_id',
        'is_active',
        'verified',
        'agency_id',
        'name',
        'email',
        'phone',
        'whatsapp',
        'category',
        'facebook',
        'twitter',
        'instagram',
        'youtube',
        'state',
        'local_government',
        'locality',
        'address',
        'longitude',
        'latitude',
        'image',
        'views',
        'password',
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
    ];


    /**
      * Get the user that has the role
      *
      * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
      */
    // public function role(): BelongsTo
    // {
    //     return $this->belongsTo(Role::class);
    // }

   

    /**
     * Get the image that owns the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo(Image::class);
    }




    /**
     * The properties that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function properties()
    {
        return $this->hasMany(Property::class);
    }

    protected $appends = ['photo','created_at_diff'];

    /**
     * accessor showing user image or the alternate image
     *
     * @return image
     */
    public function getPhotoAttribute()
    { 
        return $this->image ?? 'placeholder.png'; 
    }

    /**
     * accessor showing human readable date
     *
     * @return image
     */
    public function getCreatedAtDiffAttribute()
    { 
        return $this->created_at->diffForHumans(); 
    }

    /**
     * Get all of the bookmarks for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function bookmarks()
    {
        return $this->hasMany(Bookmark::class);
    }

    

    
}
