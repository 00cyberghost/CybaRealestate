<?php

namespace App\Http\Controllers;
use App\Http\Controllers\ImageWatermarkController;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Property;
use App\Models\Feature;
use App\Models\Image;
// use App\Models\Role;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // //
        // $request->session()->flash('message','this is a session message');

        // $message = $request->session()->get('message');

        // $token = csrf_token();

        // $arr = ImageWatermarkController::ajiwhite();

        // return Inertia::render('Welcome',[
        //     'pageProps' => $arr
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->type == 'Land'){

            return $this->addLand($request);
        
        }else{

            return $this->addOthers($request);
        }
        
        
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * handle an incoming property upload request and validate it
     * Store the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function addLand($request){

        if($request->status == 'sale'){

            //first validate the form
            $request->validate([

                'status' => 'required|min:4|max:10|string',
                'title' => 'required|string|min:5|max:100',
                'type' => 'required|string|min:4|max:25',
                'subtype' => 'max:40',
                'area' => 'max:1000000',
                'unit' => 'max:10',
                'price' => 'required|min:1|max:900000000000',
                'description' => 'max:500000',
                'state' => 'required|string|min:1|max:50',
                'local_government' => 'required|string|min:1|max:70',
                'locality' => 'required|string|min:2|max:50',
                'address' => 'required|string|min:3|max:50',
                
            ]); 

            //all went well with the validation. create the property
            $property = Property::create([
                'user_id' => Auth::user()->id,
                'status' => $request->status,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'area' => $request->area,
                'unit' => $request->unit,
                'price' => $request->price,
                'description' => $request->description,
                'video' => $request->video,
                'state' => $request->state,
                'local_government' => $request->local_government,
                'locality' => $request->locality,
                'address' => $request->address,
                'longitude' => $request->longitude,
                'latitude' => $request->latitude,
                'ref' => rand(10, 10000000),
                
            ]);

            Feature::create([
                'property_id' => $property->id,
                'AC' => $request->AC,
                'SW' => $request->SW,
                'WH' => $request->WH,
                'security' => $request->security,
                'gym' => $request->gym,
                'serviced' => $request->serviced,
                'furnished' => $request->furnished,
                'MQ' => $request->MQ,
                'TC' => $request->TC,
                'wifi' => $request->wifi,
            ]);


            $property_id = $property->id;

            $token = csrf_token();

            //the property submission was successful
            //redirect the user to image uploads page

            return Inertia::render('Dashboard/PropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $property_id]
            ]);

        }else{

            //first validate the form
            $request->validate([

                'status' => 'required|min:4|max:10|string',
                'title' => 'required|string|min:5|max:100',
                'type' => 'required|string|min:4|max:25',
                'subtype' => 'max:40',
                'area' => 'max:1000000',
                'unit' => 'max:10',
                'price' => 'required|min:1|max:900000000000',
                'duration' => 'required|string|min:1|max:30',
                'description' => 'max:500000',
                'state' => 'required|string|min:1|max:50',
                'local_government' => 'required|string|min:1|max:70',
                'locality' => 'required|string|min:2|max:50',
                'address' => 'required|string|min:3|max:50',
                
            ]); 

            //all went well with the validation. create the property
            $property = Property::create([
                'user_id' => Auth::user()->id,
                'status' => $request->status,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'area' => $request->area,
                'unit' => $request->unit,
                'price' => $request->price,
                'duration' => $request->duration,
                'description' => $request->description,
                'video' => $request->video,
                'state' => $request->state,
                'local_government' => $request->local_government,
                'locality' => $request->locality,
                'address' => $request->address,
                'longitude' => $request->longitude,
                'latitude' => $request->latitude,
                'ref' => $ref = rand(10, 10000000),
                
            ]);

            Feature::create([
                'property_id' => $property->id,
                'AC' => $request->AC,
                'SW' => $request->SW,
                'WH' => $request->WH,
                'security' => $request->security,
                'gym' => $request->gym,
                'serviced' => $request->serviced,
                'furnished' => $request->furnished,
                'MQ' => $request->MQ,
                'TC' => $request->TC,
                'wifi' => $request->wifi,
            ]);


            $property_id = $property->id;

            $token = csrf_token();

            //the property submission was successful
            //redirect the user to image uploads page

            return Inertia::render('Dashboard/PropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $property_id]
            ]);

        }//end of if else statement
        

    }//end of addLand method



    /**
     * handle an incoming property upload request and validate it
     * Store the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function addOthers($request){

        if($request->status == 'sale'){

            //first validate the form
            $request->validate([

                'status' => 'required|min:4|max:10|string',
                'title' => 'required|string|min:5|max:100',
                'type' => 'required|string|min:4|max:25',
                'subtype' => 'max:40',
                'bedroom' => 'required|max:30',
                'bathroom' => 'required|max:30',
                'parking' => 'max:30',
                'area' => 'max:1000000',
                'unit' => 'max:10',
                'price' => 'required|min:1|max:900000000000',
                'description' => 'max:500000',
                'state' => 'required|string|min:1|max:50',
                'local_government' => 'required|string|min:1|max:70',
                'locality' => 'required|string|min:2|max:50',
                'address' => 'required|string|min:3|max:50',
                
            ]); 

            //all went well with the validation. create the property
            $property = Property::create([
                'user_id' => Auth::user()->id,
                'status' => $request->status,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'bedroom' => intval($request->bedroom),
                'bathroom' => intval($request->bathroom),
                'parking' => intval($request->parking),
                'area' => intval($request->area),
                'unit' => $request->unit,
                'price' => intval($request->price),
                'description' => $request->description,
                'video' => $request->video,
                'state' => $request->state,
                'local_government' => $request->local_government,
                'locality' => $request->locality,
                'address' => $request->address,
                'longitude' => $request->longitude,
                'latitude' => $request->latitude,
                'ref' => rand(10, 10000000),
                
            ]);

            Feature::create([
                'property_id' => $property->id,
                'AC' => $request->AC,
                'SW' => $request->SW,
                'WH' => $request->WH,
                'security' => $request->security,
                'gym' => $request->gym,
                'serviced' => $request->serviced,
                'furnished' => $request->furnished,
                'MQ' => $request->MQ,
                'TC' => $request->TC,
                'wifi' => $request->wifi,
            ]);


            $property_id = $property->id;

            $token = csrf_token();

            //the property submission was successful
            //redirect the user to image uploads page

            return Inertia::render('Dashboard/PropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $property_id]
            ]);

        }else{

            //first validate the form
            $request->validate([

                'status' => 'required|min:4|max:10|string',
                'title' => 'required|string|min:5|max:100',
                'type' => 'required|string|min:4|max:25',
                'subtype' => 'max:40',
                'bedroom' => 'required|max:30',
                'bathroom' => 'required|max:30',
                'parking' => 'max:30',
                'area' => 'max:1000000',
                'unit' => 'max:10',
                'price' => 'required|min:1|max:900000000000',
                'duration' => 'required|string|min:1|max:30',
                'description' => 'max:500000',
                'state' => 'required|string|min:1|max:50',
                'local_government' => 'required|string|min:1|max:70',
                'locality' => 'required|string|min:2|max:50',
                'address' => 'required|string|min:3|max:50',
                
            ]); 

            //all went well with the validation. create the property
            $property = Property::create([
                'user_id' => Auth::user()->id,
                'status' => $request->status,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'bedroom' => intval($request->bedroom),
                'bathroom' => intval($request->bathroom),
                'parking' => intval($request->parking),
                'area' => intval($request->area),
                'unit' => $request->unit,
                'price' => intval($request->price),
                'duration' => $request->duration,
                'description' => $request->description,
                'video' => $request->video,
                'state' => $request->state,
                'local_government' => $request->local_government,
                'locality' => $request->locality,
                'address' => $request->address,
                'longitude' => $request->longitude,
                'latitude' => $request->latitude,
                'ref' => rand(10, 10000000),
                
            ]);

            

            Feature::create([
                'property_id' => $property->id,
                'AC' => $request->AC,
                'SW' => $request->SW,
                'WH' => $request->WH,
                'security' => $request->security,
                'gym' => $request->gym,
                'serviced' => $request->serviced,
                'furnished' => $request->furnished,
                'MQ' => $request->MQ,
                'TC' => $request->TC,
                'wifi' => $request->wifi,
            ]);


            $property_id = $property->id;

            $token = csrf_token();

            //the property submission was successful
            //redirect the user to image uploads page

            return Inertia::render('Dashboard/PropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $property_id]
            ]);

        }//end of if else statement

    }


    /**
     * Store a newly uploaded image and watermarks it.
     * Inserts a unique name to the image_name field and an id to the property_id field of the imaages table
     * @param  \Illuminate\Http\Request  $request
     * @return json response
     */
    public function savePropertyImages(Request $request){

        
        if(intval($request->property_id) > 0){

            $file = $request->file('file');
        
            $imagename = time().$file->getClientOriginalName();

            $wtrmrk_file = public_path('watermark.png');

            ImageWatermarkController::cybaghostWatermarkImage($request,$imagename,$wtrmrk_file);

            Image::create([
               
                'property_id' => $request->property_id,
                
                'image_name' => $imagename

            ]);
        

            return response()->json(['success'=>$file]);

            // return Inertia::render('Home');
        }

    }



}//end of class
