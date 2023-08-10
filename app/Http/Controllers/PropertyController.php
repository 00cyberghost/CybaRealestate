<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Agency;
use App\Models\Bookmark;
use App\Models\Property;
use App\Models\Feature;
use App\Models\Review;
use App\Models\Image;
use App\Models\Role;
use Notification;
use App\Notifications\ApprovedPropertyNotification;
use App\Notifications\RejectedPropertyNotification;
use Inertia\Inertia;

class PropertyController extends Controller
{

    //sort the array based on the property count columnn in a descening order
    static function array_sort_by_column(&$arr,$col,$dir){

        $sort_col = [];

        foreach ($arr as $key => $row) {
            
            $sort_col[$key] = $row[$col];
        }

        return array_multisort($sort_col,$dir,$arr);

    }

    //extract certain parts of the location string
    static function extractLocation($parameter,$case){
	
        switch ($case) {
            case 'locality':
                $decode  = urldecode(urldecode($parameter));
    
                $position = strpos($decode, ',');
    
                if($position !== false){
    
                    $extract = substr($decode,0, $position);
    
                    return $extract;
                
                }else{
    
                    return $decode;
                }
                
                break;
    
            case 'state':
                $decode  = urldecode(urldecode($parameter));
    
                $position = strrpos($decode, ',');
    
                if($position !== false){
    
                    $extract = substr($decode, $position + 1);
    
                    return $extract;
                
                }else{
    
                    return $decode;
    
                }
    
                
                break;
    
            case 'local_government':
                $decode  = urldecode(urldecode($parameter));
    
                $position1 = strpos($decode, ',');
    
                if($position1 !== false){
    
                    $extraction1 = substr($decode, $position1 + 1);
    
                    $final_position = strrpos($extraction1, ',');
    
                    $final_extraction = substr($extraction1,0, $final_position);
    
                    return $final_extraction;
                
                }else{
    
                    return $decode;
                }
    
                break;
            
            default:
                // code...
                break;
        }
    }

    /**
     * Display listings in the front page.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recent_prop = Property::with('image')->where('approved',1)->paginate(12);

        $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        

        $agents = User::where('category','agent')->paginate(12);

        $agencies = User::where('category','agency')->paginate(12);

        return Inertia::render('Home',[
            
            'recentProperties' => $final_array,
            'agents' => $agents,
            'agencies' => $agencies

        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $property = Property::with('images','feature','user')->where('id',$id)->get();

        return Inertia::render('PropertyDetails',[

            'props' => $property
        ]);
    }

    /**
     * Display latest properties.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function sidebar(String $category)
    {
        //

        $properties = Property::with('image')->where('approved',1)->where('category',$category)->paginate(12);

        $sorted_result = $properties->getCollection()->sortBy([['id','desc']])->values();

        $properties->setCollection($sorted_result);

        return $properties;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
         Property::where('id',$id)->update([

            'approved' => 1
        ]);

        $property = Property::where('id',$id)->first();

        //notify the user
        $this->approvedPropertyNotify($property->user_id,$id,$property->category,$property->title);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     * Notify the user
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $property = Property::where('id',$id)->first();
        
        //notify the user
        $this->rejectedPropertyNotify($property->user_id,$property->title);

        Property::where('id',$id)->delete();

        return redirect()->back();
    }

    /**
     * permanently Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        //

        Property::where('id',$id)->forceDelete();

        return redirect()->back();
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        //

        Property::where('id',$id)->restore();

        return redirect()->back();
    }


    /**
     * Display listings belonging to the authenticated user.
     *
     * @return \Inertia\inertia
     */
    public function myProperties(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();
        $prop = Property::with('image')->where('user_id',Auth::user()->id)->paginate(12);

        $sorted_result = $prop->getCollection()->sortBy([['id','desc']])->values();

        $prop->setCollection($sorted_result);

        $properties = $prop->toArray();

        $arr = [];

        foreach($properties['data'] as $property){

            $review = Review::where('property_id',$property['id']);

            $sum = $review->sum('star');

            $count = $review->count();

            $count == 0 ? $average_review = 0 :  $average_review = round($sum/$count);

            $merge_array = array_merge($property,array('star' => $average_review,'total_review' => $count));

            array_push($arr,$merge_array);

        }

        $empty_array = [];

        $final_array = array_merge($empty_array,$properties);

        $final_array['data'] = $arr;

        return Inertia::render('Dashboard/MyProperties',[
            'props' => $final_array
        ]);
    }

    /**
     * Display listings belonging to the authenticated user.
     *
     * @return \Inertia\inertia
     */
    public function agencyProperties(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();
        $prop = Property::with('image')->where('agency_id',Auth::user()->id)->paginate(12);

        $sorted_result = $prop->getCollection()->sortBy([['id','desc']])->values();

        $prop->setCollection($sorted_result);

        $properties = $prop->toArray();

        $arr = [];

        foreach($properties['data'] as $property){

            $review = Review::where('property_id',$property['id']);

            $sum = $review->sum('star');

            $count = $review->count();

            $count == 0 ? $average_review = 0 :  $average_review = round($sum/$count);

            $merge_array = array_merge($property,array('star' => $average_review,'total_review' => $count));

            array_push($arr,$merge_array);

        }

        $empty_array = [];

        $final_array = array_merge($empty_array,$properties);

        $final_array['data'] = $arr;

        return Inertia::render('Dashboard/AgencyProperties',[
            'props' => $final_array
        ]);
    }


    /**
     * Display unapproved listings.
     *
     * @return \Inertia\inertia
     */
    public function showPendingProperties(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();
        
        $pending = Property::with('image','user')->where('approved',0)->paginate(12);



        return Inertia::render('Dashboard/PendingProperties',[
            'props' => $pending
        ]);
    }

    /**
     * Display deleted listings.
     *
     * @return \Inertia\inertia
     */
    public function showDeletedProperties(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();
        
        $deleted = Property::with('image','user')->where('approved',0)->onlyTrashed()->paginate(12);

        return Inertia::render('Dashboard/DeletedProperties',[
            'props' => $deleted
        ]);
    }

    /**
     * Display search result.
     *
     * @return \Inertia\inertia
     */
    public function search(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();

        $params = [];

        if(strlen($_GET['category']) > 1) array_push($params,['category', '=', $_GET['category']]);

        if(strlen($_GET['type']) > 1) array_push($params,['type', '=', $_GET['type']]);

        if(strlen($_GET['subtype']) > 1) array_push($params,['subtype', '=', $_GET['subtype']]);

        if($_GET['minprice'] > 0 ) array_push($params,['price', '>=', $_GET['minprice']]);

        if($_GET['maxprice'] > 0 ) array_push($params,['price', '<=', $_GET['maxprice']]);

        if($_GET['bedroom'] > 0 ) array_push($params,['bedroom', '=', $_GET['bedroom']]);

        if($_GET['bathroom'] > 0 ) array_push($params,['bathroom', '=', $_GET['bathroom']]);

        if($_GET['parking'] > 0 ) array_push($params,['parking', '=', $_GET['parking']]);

        if($_GET['area'] > 0 ) array_push($params,['area', '=', $_GET['area']]);

        if(strlen($_GET['unit']) > 0) array_push($params,['unit', '=', $_GET['unit']]);

        if($_GET['ref'] > 0 ) {

            $recent_prop = Property::with('image','user')->where('ref',$_GET['ref'])->where('approved',1)->paginate(12);
        
        }else{

            if(strlen($_GET['location']) > 1){

                $recent_pro = Property::with('image','user')->where('approved',1)->where($params)
                ->where(function ($query) {
                    $query->where('state', 'like', '%'.self::extractLocation($_GET['location'],'state').'%')
                    ->orWhere('local_government', 'like', '%'.self::extractLocation($_GET['location'],'local_government').'%')
                    ->orWhere('locality', 'like', '%'.self::extractLocation($_GET['location'],'locality').'%');
                });

                $recent_prop = $recent_pro->paginate(12);

            }else{

                $recent_pro = Property::with('image','user')->where('approved',1)->where($params);

                $recent_prop = $recent_pro->paginate(12);
            }

            
        }

        

        $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        $propertyStatCount = $recent_prop->count();

        $min = $recent_prop->min('price');

        $max = $recent_prop->max('price');

        $sum = $recent_prop->sum('price');

        $average_price = $sum == 0 ? $average_price = 0 : $sum / $propertyStatCount;

        $propStat = ['min' => number_format(round($min)), 'average' => number_format(round($average_price)), 'max' => number_format(round($max)), 'statcount' => $propertyStatCount];

        return Inertia::render('SearchResult',[
            'props' => $final_array,
            'stat' => $propStat

        ]);
    }

    /**
     * Display for rent result.
     *
     * @return \Inertia\inertia
     */
    public function rent(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();

        $recent_prop = Property::with('image','user')->where('category','rent')->where('approved',1)->paginate(12);
        

        $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        $propertyStatCount = $recent_prop->count();

        $min = $recent_prop->min('price');

        $max = $recent_prop->max('price');

        $sum = $recent_prop->sum('price');

        $average_price = $sum == 0 ? $average_price = 0 : $sum / $propertyStatCount;

        $propStat = ['min' => number_format(round($min)), 'average' => number_format(round($average_price)), 'max' => number_format(round($max)), 'statcount' => $propertyStatCount];

        return Inertia::render('ForRent',[
            'props' => $final_array,
            'stat' => $propStat

        ]);
    }

    /**
     * Display for sale result.
     *
     * @return \Inertia\inertia
     */
    public function sale(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();

        $recent_prop = Property::with('image','user')->where('category','sale')->where('approved',1)->paginate(12);
        

        $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        $propertyStatCount = $recent_prop->count();

        $min = $recent_prop->min('price');

        $max = $recent_prop->max('price');

        $sum = $recent_prop->sum('price');

        $average_price = $sum == 0 ? $average_price = 0 : $sum / $propertyStatCount;

        $propStat = ['min' => number_format(round($min)), 'average' => number_format(round($average_price)), 'max' => number_format(round($max)), 'statcount' => $propertyStatCount];

        return Inertia::render('ForSale',[
            'props' => $final_array,
            'stat' => $propStat

        ]);
    }

    /**
     * Display for shortlet result.
     *
     * @return \Inertia\inertia
     */
    public function shortlet(){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();

        $recent_prop = Property::with('image','user')->where('category','shortlet')->where('approved',1)->paginate(12);
        

        $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        $propertyStatCount = $recent_prop->count();

        $min = $recent_prop->min('price');

        $max = $recent_prop->max('price');

        $sum = $recent_prop->sum('price');

        $average_price = $sum == 0 ? $average_price = 0 : $sum / $propertyStatCount;

        $propStat = ['min' => number_format(round($min)), 'average' => number_format(round($average_price)), 'max' => number_format(round($max)), 'statcount' => $propertyStatCount];

        return Inertia::render('ForShortlet',[
            'props' => $final_array,
            'stat' => $propStat

        ]);
    }

    /**
     * Display search result.
     *
     * @return \Inertia\inertia
     */
    public function searchState($location){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();
        

        $recent_pro = Property::with('image','user')->where('approved',1)->where('state', 'like', '%'.$location.'%');

        $recent_prop = $recent_pro->paginate(12);


        $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        $propertyStatCount = $recent_pro->count();

        $min = $recent_pro->min('price');

        $max = $recent_pro->max('price');

        $sum = $recent_pro->sum('price');

        $average_price = $sum == 0 ? $average_price = 0 : $sum / $propertyStatCount;

        $propStat = ['min' => number_format(round($min)), 'average' => number_format(round($average_price)), 'max' => number_format(round($max)), 'statcount' => $propertyStatCount];

        return Inertia::render('SearchLocation',[
            'props' => $final_array,
            'stat' => $propStat

        ]);
        
    }


    /**
     * get location details based on the input parameters
     *
     * @return json
     */
    public function searchLocation($cat,$param){

        $result = \DB::table('properties')->where('approved',1)->where('category','=',$cat)
        ->where(fn ($query) =>
            $query->where('state','like','%'.$param.'%')
                ->orWhere('local_government','like','%'.$param.'%')
                ->orWhere('locality','like','%'.$param.'%')
        )
        ->get(['state','local_government','locality']);

        return $result;

    }


    /**
     * sort search result based of recency, views, min price and max-price.
     *
     * @return \Inertia\inertia
     */
    public function sortSearch($val){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();

        $params = [];

        if(strlen($_GET['category']) > 1) array_push($params,['category', '=', $_GET['category']]);

        if(strlen($_GET['type']) > 1) array_push($params,['type', '=', $_GET['type']]);

        if(strlen($_GET['subtype']) > 1) array_push($params,['subtype', '=', $_GET['subtype']]);

        if($_GET['minprice'] > 0 ) array_push($params,['price', '>=', $_GET['minprice']]);

        if($_GET['maxprice'] > 0 ) array_push($params,['price', '<=', $_GET['maxprice']]);

        if($_GET['bedroom'] > 0 ) array_push($params,['bedroom', '=', $_GET['bedroom']]);

        if($_GET['bathroom'] > 0 ) array_push($params,['bathroom', '=', $_GET['bathroom']]);

        if($_GET['parking'] > 0 ) array_push($params,['parking', '=', $_GET['parking']]);

        if($_GET['area'] > 0 ) array_push($params,['area', '=', $_GET['area']]);

        if(strlen($_GET['unit']) > 0) array_push($params,['unit', '=', $_GET['unit']]);

        if($_GET['ref'] > 0 ) {

            $recent_prop = Property::with('image','user')->where('approved',1)->where('ref',$_GET['ref'])->paginate(12);
        
        }else{

            if(strlen($_GET['location']) > 1){

                $recent_prop = Property::with('image','user')->where('approved',1)->where($params)
                ->where(function ($query) {
                    $query->where('state', 'like', '%'.self::extractLocation($_GET['location'],'state').'%')
                    ->orWhere('local_government', 'like', '%'.self::extractLocation($_GET['location'],'local_government').'%')
                    ->orWhere('locality', 'like', '%'.self::extractLocation($_GET['location'],'locality').'%');
                })->paginate(12);

            }else{

                $recent_prop = Property::with('image','user')->where($params)->paginate(12);
            }

            
        }

        

        switch ($val) {
            case 'recent':
                $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();
                break;

            case 'views':
                $sorted_result = $recent_prop->getCollection()->sortBy([['view','desc']])->values();
                break;

            case 'max':
                $sorted_result = $recent_prop->getCollection()->sortBy([['price','desc']])->values();
                break;

            case 'min':
                $sorted_result = $recent_prop->getCollection()->sortBy([['price','asc']])->values();
                break;
            
            default:
                return redirect()->back();
                break;
        }

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        return Inertia::render('SearchResult',[
            'props' => $final_array
        ]);
    }

    /**
     * sort search result based of recency, views, min price and max-price.
     *
     * @return \Inertia\inertia
     */
    public function sortSearch2($val){

        //$properties = Property::with('images')->where('user_id',Auth::user()->id)->get()->sortBy([['id','desc']])->values()->all();

        $params = [];

        if(strlen($_GET['category']) > 1) array_push($params,['category', '=', $_GET['category']]);

        $recent_prop = Property::with('image','user')->where('approved',1)->where($params)->paginate(12);

        switch ($val) {
            case 'recent':
                $sorted_result = $recent_prop->getCollection()->sortBy([['id','desc']])->values();
                break;

            case 'views':
                $sorted_result = $recent_prop->getCollection()->sortBy([['view','desc']])->values();
                break;

            case 'max':
                $sorted_result = $recent_prop->getCollection()->sortBy([['price','desc']])->values();
                break;

            case 'min':
                $sorted_result = $recent_prop->getCollection()->sortBy([['price','asc']])->values();
                break;
            
            default:
                return redirect()->back();
                break;
        }

        $recent_prop->setCollection($sorted_result);

        $recent_properties = $recent_prop->toArray();

        if(Auth::user()){

            $arr = [];

            foreach($recent_properties['data'] as $recent_property){

                $bookmarks = Bookmark::where('property_id',$recent_property['id'])->where('user_id',Auth::user()->id)->get();

                $merge_array = array_merge($recent_property,array('bookmarks' => $bookmarks));

                array_push($arr,$merge_array);
            }

            $empty_array = [];

            $final_array = array_merge($empty_array,$recent_properties);

            $final_array['data'] = $arr;
        
        }else{

            $final_array = $recent_properties;
        }

        $propertyStatCount = $recent_prop->count();

        $min = $recent_prop->min('price');

        $max = $recent_prop->max('price');

        $sum = $recent_prop->sum('price');

        $average_price = $sum == 0 ? $average_price = 0 : $sum / $propertyStatCount;

        $propStat = ['min' => number_format(round($min)), 'average' => number_format(round($average_price)), 'max' => number_format(round($max)), 'statcount' => $propertyStatCount];

        $cat = 'ForRent';

        switch ($_GET['category']) {
            case 'sale':
                $cat = 'ForSale';
                break;

            case 'rent':
                $cat = 'ForRent';
                break;

            case 'shortlet':
                $cat = 'ForShortlet';
                break;
            
            default:
                $cat = 'ForRent';
                break;
        }


        return Inertia::render('ForRent',[
            'props' => $final_array,
            'stat' => $propStat

        ]);
    }

    /**
     * Send email notification to user if their property is approved.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function approvedPropertyNotify($user_id,$property_id,$property_category,$property_title)
    {
        //
        $users = User::where('id',$user_id)->get();

        foreach($users as $user){
            $params = [
                'greeting' => 'hi '.$user->name.',',
                'body' => 'Congratulations, this is to inform you that your property have been approved.',
                'actionText' => 'View Property',
                'actionUrl' => "https://".$_SERVER['SERVER_NAME']."/property-details/".$property_id."/for-".$property_category."/".str_replace(' ','-',$property_title),
                'lastLine' => 'Kind regards '.$_SERVER['SERVER_NAME']
            ];
    
            try {
                Notification::send($user, new ApprovedPropertyNotification($params));
            } catch (\Throwable $th) {
                //throw $th;
            }
        }

        
    }

    /**
     * Send email notification to user if their property is rejected.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function rejectedPropertyNotify($user_id,$property_title)
    {
        //
        $users = User::where('id',$user_id)->get();

        foreach($users as $user){
            $params = [
                'greeting' => 'hi '.$user->name.',',
                'body' => "Unfortunately, we wish to inform you that your property with the title ".$property_title." have been rejected. You can contact admin for further details",
                'lastLine' => 'Kind regards '.$_SERVER['SERVER_NAME']
            ];
    
            try {
                Notification::send($user, new RejectedPropertyNotification($params));
            } catch (\Throwable $th) {
                //throw $th;
            }
        }

        
    }

    
}
