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
use Notification;
use App\Notifications\PendingPropertyNotification;
use Inertia\Inertia;

class AddPropertyController extends Controller
{
    /**
     * Display a listing of the properties belonging to a specific user.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        //
        
    }

    /**
     * Show the form for creating a new property.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Dashboard/AddProperty');
        
    }

    /**
     * Store a newly created property in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->type == 'Land' || $request->type == 'Commercial Property'){

            return $this->addLand($request);
        
        }else{

            return $this->addOthers($request);
        }
        
        
    }

    /**
     * Display the specified property.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified property.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        //
        $properties = Property::with('feature')->where('id',$id)->get();
        

        return Inertia::render('Dashboard/EditProperty',[
            'props' => $properties
        ]);
    }

    /**
     * Update the specified property in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        if($request->type == 'Land' || $request->type == 'Commercial Property'){

            return $this->editLand($request,$id);
        
        }else{

            return $this->editOthers($request,$id);
        }
    }

    /**
     * Remove the specified property from storage.
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

        if($request->category == 'sale'){

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
                'title' => 'required|string|min:5|max:100',
                'type' => 'required|string|min:4|max:25',
                'subtype' => 'max:40',
                
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
                'agency_id' => Auth::user()->agency_id,
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'area' => $request->area,
                'unit' => $request->unit,
                'currency' => $request->currency,
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

            //send notification to admins
            $this->pendingPropertyNotify();

            //the property submission was successful
            //redirect the user to image uploads page
            return Inertia::render('Dashboard/PropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $property_id]
            ]);

        }else{

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
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
                'agency_id' => Auth::user()->agency_id,
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'area' => $request->area,
                'unit' => $request->unit,
                'currency' => $request->currency,
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

            //send notification to admins
            $this->pendingPropertyNotify();

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
     * send notification email to admin
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function addOthers($request){

        if($request->category == 'sale'){

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
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
                'agency_id' => Auth::user()->agency_id,
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'bedroom' => intval($request->bedroom),
                'bathroom' => intval($request->bathroom),
                'parking' => intval($request->parking),
                'area' => intval($request->area),
                'unit' => $request->unit,
                'currency' => $request->currency,
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

            //send notification to admins
            $this->pendingPropertyNotify();

            //the property submission was successful
            //redirect the user to image uploads page
            return Inertia::render('Dashboard/PropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $property_id]
            ]);

        }else{

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
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
                'agency_id' => Auth::user()->agency_id,
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'bedroom' => intval($request->bedroom),
                'bathroom' => intval($request->bathroom),
                'parking' => intval($request->parking),
                'area' => intval($request->area),
                'unit' => $request->unit,
                'currency' => $request->currency,
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

            //send notification to admins
            $this->pendingPropertyNotify();

            //the property submission was successful
            //redirect the user to image uploads page
            return Inertia::render('Dashboard/PropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $property_id]
            ]);

        }//end of if else statement

    }



    /**
     * handle an incoming property edit request and validate it
     * Update the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function editLand($request, $id){

        if($request->category == 'sale'){

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
                'title' => 'required|string|min:5|max:100',
                'type' => 'required|string|min:4|max:25',
                'subtype' => 'max:40',
                
                'price' => 'required|min:1|max:900000000000',
                'description' => 'max:500000',
                'state' => 'required|string|min:1|max:50',
                'local_government' => 'required|string|min:1|max:70',
                'locality' => 'required|string|min:2|max:50',
                'address' => 'required|string|min:3|max:50',
                
            ]); 

            //all went well with the validation. create the property
            Property::where('id',$id)->update([
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'area' => $request->area,
                'unit' => $request->unit,
                'currency' => $request->currency,
                'price' => $request->price,
                'description' => $request->description,
                'video' => $request->video,
                'state' => $request->state,
                'local_government' => $request->local_government,
                'locality' => $request->locality,
                'address' => $request->address,
                'longitude' => $request->longitude,
                'latitude' => $request->latitude,
                
            ]);

            Feature::where('id',$id)->update([
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

            // the property update was successful
            // redirect the user to image uploads page

            $token = csrf_token();

            $images = Image::where('property_id',$id)->get();

            return Inertia::render('Dashboard/EditPropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $id, 'images' => $images]
            ]);

        }else{

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
                'title' => 'required|string|min:5|max:100',
                'type' => 'required|string|min:4|max:25',
                'subtype' => 'max:40',
                
                'price' => 'required|min:1|max:900000000000',
                'duration' => 'required|string|min:1|max:30',
                'description' => 'max:500000',
                'state' => 'required|string|min:1|max:50',
                'local_government' => 'required|string|min:1|max:70',
                'locality' => 'required|string|min:2|max:50',
                'address' => 'required|string|min:3|max:50',
                
            ]); 

            //all went well with the validation. create the property
            $property = Property::where('id',$id)->update([
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'area' => $request->area,
                'unit' => $request->unit,
                'currency' => $request->currency,
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
                
            ]);

            Feature::where('id',$id)->update([
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

            // the property update was successful
            // redirect the user to image uploads page

            $token = csrf_token();

            $images = Image::where('property_id',$id)->get();

            return Inertia::render('Dashboard/EditPropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $id, 'images' => $images]
            ]);

           

        }//end of if else statement
        

    }//end of addLand method



    /**
     * handle an incoming property edit request and validate it
     * Update the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function editOthers($request,$id){

        if($request->category == 'sale'){

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
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
            Property::where('id',$id)->update([
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'bedroom' => intval($request->bedroom),
                'bathroom' => intval($request->bathroom),
                'parking' => intval($request->parking),
                'area' => intval($request->area),
                'unit' => $request->unit,
                'currency' => $request->currency,
                'price' => intval($request->price),
                'description' => $request->description,
                'video' => $request->video,
                'state' => $request->state,
                'local_government' => $request->local_government,
                'locality' => $request->locality,
                'address' => $request->address,
                'longitude' => $request->longitude,
                'latitude' => $request->latitude,
                
            ]);

            Feature::where('id',$id)->update([
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

            // the property update was successful
            // redirect the user to image uploads page

            $token = csrf_token();

            $images = Image::where('property_id',$id)->get();

            return Inertia::render('Dashboard/EditPropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $id, 'images' => $images]
            ]);

        }else{

            //first validate the form
            $request->validate([

                'category' => 'required|min:4|max:10|string',
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
            Property::where('id',$id)->update([
                'category' => $request->category,
                'title' => $request->title,
                'type' => $request->type,
                'subtype' => $request->subtype,
                'bedroom' => intval($request->bedroom),
                'bathroom' => intval($request->bathroom),
                'parking' => intval($request->parking),
                'area' => intval($request->area),
                'unit' => $request->unit,
                'currency' => $request->currency,
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
                
            ]);

            

            Feature::where('id',$id)->update([
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

            // the property update was successful
            // redirect the user to image uploads page

            $token = csrf_token();

            $images = Image::where('property_id',$id)->get();

            $path = public_path('photos');

            return Inertia::render('Dashboard/EditPropertyImages',[
                "props" => ['token'=> $token, 'property_id' => $id, 'images' => $images, 'path' => $path]
            ]);
           

        }//end of if else statement

    }


    /**
     * updates the views column on the property table and increments it by 1
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function updateViews($id){

        if(intval($id) > 0){

            $current_count = Property::where('id',$id)->get('views')->map(function($property){

                return $property->views;
            });

            foreach($current_count as $count) {

                $new_count = intval($count) + 1;

                Property::where('id',$id)->update(['views' => $new_count]);
            }

        }

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
        

            return response()->json(['success' => $file]);
        }

    }


    /**
     * delete a property image
     * @param  \Illuminate\Http\Request  $request
     * @return text response
     */
    public function deletePropertyImages($id,$name){
        
        Image::find($id)->delete();

        unlink(public_path('photos').'/'.$name);

        return 'success';
        

    }

    /**
     * Send email notification to admins.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function pendingPropertyNotify()
    {
        //
        $admins = User::where('role_id','>',1)->get();

        foreach ($admins as $admin) {
            $params = [
                'greeting' => 'hi '.$admin->name.',',
                'body' => 'This is to inform you that a property is waiting your approval.',
                'actionText' => 'View Page ',
                'actionUrl' => "https://".$_SERVER['SERVER_NAME']."/dashboard/pending-properties",
                'lastLine' => 'Kind regards'.$_SERVER['SERVER_NAME']
            ];
    
            try {
                Notification::send($admin, new PendingPropertyNotification($params));
            } catch (\Throwable $th) {
                //throw $th;
            }
        }

        
    }
    






}//end of class
