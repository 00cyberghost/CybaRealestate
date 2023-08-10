<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['property_id','user_id','name','email','image','review','star'];

    protected $appends = ['created_at_diff','photo'];

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
     * accessor showing user image or the alternate image
     *
     * @return image
     */
    public function getPhotoAttribute()
    { 
        return $this->image ?? 'placeholder.png'; 
    }
}
