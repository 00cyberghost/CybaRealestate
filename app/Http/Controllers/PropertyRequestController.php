<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PropertyRequest;
use Inertia\Inertia;

class PropertyRequestController extends Controller
{
    /**
     * Display a listing of the property requests.
     *
     * @return Inertia\inertia
     */
    public function index()
    {
        //
        $property_requests = PropertyRequest::where('user_id',Auth::user()->id)->paginate(12);

        $sorted_result = $property_requests->getCollection()->sortBy([['id','desc']])->values();

        $property_requests->setCollection($sorted_result);
        
        return Inertia::render('Dashboard/MyRequests',[
            
            'props' => $property_requests

        ]);
    }

    /**
     * Show the form for creating a new property requests.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('Dashboard/CreateRequest');
    }

    /**
     * Store a newly created property request in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        if($request->type == 'Land' || $request->type == 'Commercial Property'){

            return $this->addLandRequest($request);
        
        }else{

            return $this->addOthersRequest($request);
        }
    }

    /**
     * Display a specified property.
     *
     * @param  int  $id
     * @return Inertia\inertia
     */
    public function show($id)
    {
        //
        $property_requests = PropertyRequest::where('id',$id)->get();
        
        return Inertia::render('RequestDetails',[
            
            'props' => $property_requests

        ]);
    }

    /**
     * Show the form for editing a specified property request.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $property_requests = PropertyRequest::where('id',$id)->get();
        return Inertia::render('Dashboard/EditRequest',[

            'props' => $property_requests

        ]);
    }

    /**
     * Update the specified property request in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        if($request->type == 'Land' || $request->type == 'Commercial Property'){

            return $this->editLandRequest($request,$id);
        
        }else{

            return $this->editOthersRequest($request,$id);
        }
    }

    /**
     * Remove a specified property request from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        PropertyRequest::find($id)->delete();

        return redirect()->route('myRequests');
    }

    /**
     * handle an incoming property upload request and validate it
     * Store the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function addLandRequest($request){

        //first validate the form
        $request->validate([
            'category' => 'required|min:4|max:10|string',
            'type' => 'required|string|min:4|max:25',
            'price' => 'required|min:1|max:900000000000',
            'description' => 'max:500000',
            'state' => 'required|string|min:1|max:50',
            'local_government' => 'required|string|min:1|max:70',
            'locality' => 'required|string|min:2|max:50',
            
        ]); 

        //all went well with the validation. create the property
        PropertyRequest::create([
            'user_id' => Auth::user()->id,
            'category' => $request->category,
            'type' => $request->type,
            'area' => $request->area,
            'unit' => $request->unit,
            'currency' => $request->currency,
            'price' => $request->price,
            'description' => $request->description,
            'state' => $request->state,
            'local_government' => $request->local_government,
            'locality' => $request->locality,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude,
            
        ]);

    

        //the property submission was successful
        //redirect the user to my alerts page

        return redirect()->route('myRequests');

        
        

    }//end of addLandAlert method



    /**
     * handle an incoming property upload request and validate it
     * Store the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function addOthersRequest($request){

        //first validate the form
        $request->validate([

            'category' => 'required|min:4|max:10|string',
            'type' => 'required|string|min:4|max:25',
            'bedroom' => 'required|max:30',
            'bathroom' => 'required|max:30',
            'parking' => 'max:30',
            'price' => 'required|min:1|max:900000000000',
            'description' => 'max:500000',
            'state' => 'required|string|min:1|max:50',
            'local_government' => 'required|string|min:1|max:70',
            'locality' => 'required|string|min:2|max:50',
            
        ]); 

        //all went well with the validation. create the property
        PropertyRequest::create([
            'user_id' => Auth::user()->id,
            'category' => $request->category,
            'type' => $request->type,
            'bedroom' => intval($request->bedroom),
            'bathroom' => intval($request->bathroom),
            'parking' => intval($request->parking),
            'currency' => $request->currency,
            'price' => intval($request->price),
            'description' => $request->description,
            'state' => $request->state,
            'local_government' => $request->local_government,
            'locality' => $request->locality,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude,
            
        ]);


        //the property alert submission was successful
        //redirect the user to my alerts page

        return redirect()->route('myRequests');

    }



    /**
     * handle an incoming property edit request and validate it
     * Update the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function editLandRequest($request, $id){



        //first validate the form
        $request->validate([
            'category' => 'required|min:4|max:10|string',
            'type' => 'required|string|min:4|max:25',
            'price' => 'required|min:1|max:900000000000',
            'description' => 'max:500000',
            'state' => 'required|string|min:1|max:50',
            'local_government' => 'required|string|min:1|max:70',
            'locality' => 'required|string|min:2|max:50',
        ]); 

        //all went well with the validation. create the property
        PropertyRequest::where('id',$id)->update([
            'category' => $request->category,
            'type' => $request->type,
            'area' => $request->area,
            'unit' => $request->unit,
            'currency' => $request->currency,
            'price' => $request->price,
            'description' => $request->description,
            'state' => $request->state,
            'local_government' => $request->local_government,
            'locality' => $request->locality,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude,
            
        ]);

        

        // the property request update was successful
        // redirect the user to request details page

       return redirect()->route('requestDetails', ['id' => $id]);

        
        

    }//end of addLandRequest method



    /**
     * handle an incoming property edit request and validate it
     * Update the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function editOthersRequest($request,$id){

       

        //first validate the form
        $request->validate([
        'category' => 'required|min:4|max:10|string',
        'type' => 'required|string|min:4|max:25',
        'bedroom' => 'required|max:30',
        'bathroom' => 'required|max:30',
        'parking' => 'max:30',
        'price' => 'required|min:1|max:900000000000',
        'description' => 'max:500000',
        'state' => 'required|string|min:1|max:50',
        'local_government' => 'required|string|min:1|max:70',
        'locality' => 'required|string|min:2|max:50',
            
        ]); 

        //all went well with the validation. create the property
        PropertyRequest::where('id',$id)->update([
            'user_id' => Auth::user()->id,
            'category' => $request->category,
            'type' => $request->type,
            'bedroom' => intval($request->bedroom),
            'bathroom' => intval($request->bathroom),
            'parking' => intval($request->parking),
            'currency' => $request->currency,
            'price' => intval($request->price),
            'description' => $request->description,
            'state' => $request->state,
            'local_government' => $request->local_government,
            'locality' => $request->locality,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude,
            
        ]);

        // the property request update was successful
        // redirect the user to request details page

        return redirect()->route('requestDetails', ['id' => $id]);

    }

    /**
     * Display a listing of the property requests.
     *
     * @return Inertia\inertia
     */
    public function allRequests()
    {
        //
        $property_requests = PropertyRequest::with('user')->paginate(12);
        
        return Inertia::render('Requests',[
            
            'props' => $property_requests

        ]);
    }
}
