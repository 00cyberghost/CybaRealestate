<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Agency;
use App\Models\Role;
use App\Http\Controllers\ImageWatermarkController;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function createAgent($email)
    {
        return Inertia::render('Auth/RegisterAgent',[
            'email' => $email
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:50|min:3|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|digits_between:11,11',
            'whatsapp' => 'required|digits_between:11,11',
            'category' => 'required|string|max:8|min:4',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if($request->category == 'agency'){

            $role_id = 1;
        
        }else{

            $role_id = 0;
        }

        $user = User::create([
            'role_id'=> $role_id,
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'whatsapp' => $request->whatsapp,
            'category' => $request->category,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
        

       

        
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function registerAgent(Request $request, $email)
    {

        $agency = User::where('email',$email)->where('category','agency');

        $count = $agency->count();

        if($count < 1){

            throw ValidationException::withMessages(['Invalid Registration Link']);
        }



        $request->validate([
            'name' => 'required|string|max:50|min:3|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|digits_between:11,11',
            'whatsapp' => 'required|digits_between:11,11',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        
        

        $agency_id = $agency->get('id');

        foreach($agency_id as $id){

            $user = User::create([
                'agency_id' => $id->id,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'whatsapp' => $request->whatsapp,
                'category' => 'agent',
                'password' => Hash::make($request->password),
            ]);
    
            event(new Registered($user));
    
            Auth::login($user);
        }

        return redirect(RouteServiceProvider::HOME);
        

       

        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $request->validate([
            
            'phone' => 'required|digits_between:11,11',
            'whatsapp' => 'required|digits_between:11,11',
            // 'about' => 'string',
            // 'facebook' => 'string',
            // 'twitter' => 'string',
            // 'youtube' => 'string',
            'state' => 'required|string|max:20|min:2',
            'local_government' => 'required|string|max:20|min:2',
            'locality' => 'required|string|max:20|min:2',
            'address' => 'required|string|max:30|min:2',
            // 'longitude' => 'string',
            // 'latitude' => 'string'
        ]);

        $user = User::where('id',Auth::user()->id)->update([
            'phone' => $request->phone,
            'whatsapp' => $request->whatsapp,
            'about' => $request->about,
            'facebook' => $request->facebook,
            'twitter' => $request->twitter,
            'instagram' => $request->instagram,
            'youtube' => $request->youtube,
            'state' => $request->state,
            'local_government' => $request->local_government,
            'locality' => $request->locality,
            'address' => $request->address,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude
           
        ]);


        return redirect()->route('profile');
    }

     /**
     * Uploads a user image.
     *
     * @param  file
     * @return json
     */
    public function updateUserImage(Request $request){

        $user = Auth::user();

        if($user->id > 0){

            //get previous image
            $previous_image = Auth::user()->image;

            $file = $request->file('file');
        
            $imagename = time().$file->getClientOriginalName();

            //uploads new image to the photos directory and resize it
            if($user->category == 'agency'){

                ImageWatermarkController::cybaghostAgency($request,$imagename);
            
            }else{

                ImageWatermarkController::cybaghostAgent($request,$imagename);
            }

            
            User::where('id',$user->id)->update(['image' => $imagename]);

            if($previous_image != null) {

                //delete previous user image
                unlink(public_path('photos/'.$previous_image));
            }

            return response()->json(['success' => 'uploaded']);
        }
    }

    /**
     * updates the views column on the user table and increments it by 1
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function updateViews($id){

        if(intval($id) > 0){

            $user = User::where('id',$id);
            
            $current_count = $user->get('views')->map(function($property){

                return $property->views;
            });

            foreach($current_count as $count) {

                $new_count = intval($count) + 1;

                $user->update(['views' => $new_count]);
            }

        }

    }

}
