<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PropertyAlert;
use Inertia\Inertia;

class PropertyAlertController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $alerts = PropertyAlert::where('user_id',Auth::user()->id)->paginate(12);

        $sorted_result = $alerts->getCollection()->sortBy([['id','desc']])->values();

        $alerts->setCollection($sorted_result);

        return Inertia::render('Dashboard/MyAlerts',[

            'props' => $alerts
        ]);
    }

    /**
     * Show the form for creating a new property alert.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('Dashboard/CreateAlert');
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
        if($request->type == 'Land' || $request->type == 'Commercial Property'){

            return $this->addLandAlert($request);
        
        }else{

            return $this->addOthersAlert($request);
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
        $alerts = PropertyAlert::where('id',$id)->get();
        
        return Inertia::render('AlertDetails',[
            
            'props' => $alerts

        ]);
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
        $alerts = PropertyAlert::where('id',$id)->get();
        return Inertia::render('Dashboard/EditAlert',[

            'props' => $alerts

        ]);
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
        if($request->type == 'Land' || $request->type == 'Commercial Property'){

            return $this->editLandAlert($request,$id);
        
        }else{

            return $this->editOthersAlert($request,$id);
        }
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
        PropertyAlert::find($id)->delete();

        return redirect()->route('myAlerts');
    }



    /**
     * handle an incoming property upload request and validate it
     * Store the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function addLandAlert($request){

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
        PropertyAlert::create([
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

        return redirect()->route('myAlerts');

        
        

    }//end of addLandAlert method



    /**
     * handle an incoming property upload request and validate it
     * Store the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function addOthersAlert($request){

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
        PropertyAlert::create([
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

        return redirect()->route('myAlerts');

    }



    /**
     * handle an incoming property edit request and validate it
     * Update the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function editLandAlert($request, $id){



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
        PropertyAlert::where('id',$id)->update([
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

        

        // the property alert update was successful
        // redirect the user to my alerts page

        return redirect()->route('alertDetails', ['id' => $id]);

        
        

    }//end of addLandAlert method



    /**
     * handle an incoming property edit request and validate it
     * Update the resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\inertia\Response
     */
    private function editOthersAlert($request,$id){

       

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
        PropertyAlert::where('id',$id)->update([
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

        //the property alert update was successful
        //redirect the user to my alerts page

        return redirect()->route('alertDetails', ['id' => $id]);

        


    }
}
