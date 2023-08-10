<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class image extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'property_id',
        'user_id',
        'image_name'
    ];


    /**
     * Get the user that owns the Image
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The property that belong to the Image
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function properties(): BelongsToMany
    {
        return $this->belongsToMany(Property::class);
    }

    
}
