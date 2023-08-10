<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyRequest extends Model
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

    /**
     * Get the user that owns the PropertyRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $appends = ['created_at_diff','updated_at_diff','location','amount'];
    
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

    /**
     * accessor for making price
     *
     * @return price with currency and duration
     */
    public function getAmountAttribute():string 
    { 

        if($this->currency == 'NGN'){

            $currency = '₦';
        
        }else{

            $currency = '$';
        }

        if($this->status == 'rent'){

            return $currency.$this->price;
        
        }else{


            return $currency.number_format($this->price).'/'.$this->duration;
        }
    }

    /**
     * accessor for making formating address
     *
     * @return nice  formated address
     */
    public function getLocationAttribute():string 
    { 
        $state = $this->state ?? '';

        $local_government = $this->local_government ?? '';

        $locality = $this->locality ?? '';
        
        return $locality.','.$local_government.','.$state; 
    }

}
