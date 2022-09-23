<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'status', 
        'title',
        'type', 
        'subtype',
        'bedroom',
        'bathroom',
        'parking',
        'area',
        'unit',
        'price',
        'duration',
        'description',
        'video',
        'state',
        'local_government',
        'locality',
        'address',
        'longitude',
        'latitude',
        'ref'
    ];


    /**
     * Get the user that owns the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the feature associated with the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function feature(): HasOne
    {
        return $this->hasOne(Feature::class);
    }

    /**
     * Get all of the image for the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function image(): HasMany
    {
        return $this->hasMany(Image::class);
    }
}
