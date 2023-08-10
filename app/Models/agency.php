<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class agency extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        
        'role_id',
        'is_active',
        'verified',
        'name',
        'email',
        'phone',
        'whatsapp',
        'category',
        'facebook',
        'twitter',
        'youtube',
        'state',
        'local_government',
        'locality',
        'address',
        'longitude',
        'latitude',
        'image',
        
    ];

    /**
     * Get all of the users for the Agency
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }

    /**
     * Get the user associated with the Agency
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne(User::class);
    }
    

    /**
     * Get all of the properties for the Agency
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function properties()
    {
        return $this->hasManyThrough(Property::class, User::class);
    }
}
