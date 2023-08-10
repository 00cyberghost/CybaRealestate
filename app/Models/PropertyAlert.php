<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyAlert extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'category', 
        'type', 
        'bedroom',
        'bathroom',
        'parking',
        'area',
        'unit',
        'price',
        'description',
        'state',
        'local_government',
        'locality',
        'longitude',
        'latitude',
    ];

    
    protected $appends = ['created_at_diff','updated_at_diff'];
    
    /**
     * accessor for making a human readable date
     *
     * @return \Carbon\Carbon human readable date
     */
    public function getCreatedAtDiffAttribute():string 
    { 
        return $this->created_at->diffForHumans(); 
    }

    /**
     * accessor for making a human readable date
     *
     * @return \Carbon\Carbon human readable date
     */
    public function getUpdatedAtDiffAttribute():string 
    { 
        return $this->updated_at->diffForHumans(); 
    }
}
