<?php

namespace App\Models;
use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Property extends Model
{
    use HasFactory,SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'agency_id',
        'status',
        'category', 
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
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the feature associated with the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function feature()
    {
        return $this->hasOne(Feature::class);
    }

    /**
     * Get all of the images assocoated with the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany(Image::class);
    }

    /**
     * Get all of the images assocoated with the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function image()
    {
        return $this->hasOne(Image::class);
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
     * accessor for making formating address
     *
     * @return nice  formated address
     */
    public function getLocationAttribute():string 
    { 
        $state = $this->state ?? '';

        $local_government = $this->local_government ?? '';

        $locality = $this->locality ?? '';

        $address = $this->address ?? '';
        
        return $address.','.$locality.','.$local_government.','.$state; 
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
     * Get the bookmarks associated with the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function bookmark()
    {
        return $this->hasOne(Bookmark::class);
    }

    /**
     * Get all of the reviews for the Property
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }


}
