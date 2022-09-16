<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Agency;
use App\Models\Role;
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
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        if($request->category == 'agency'){

            $this->registerAgency($request);
        
        }else{

            $this->registerCustomerOrAgent($request);
        }
        

       

        
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    private function registerCustomerOrAgent($request){

        $request->validate([
            'name' => 'required|string|max:50|min:3|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|min:11|max:11',
            'whatsapp' => 'required|string|min:11|max:11',
            'category' => 'required|string|max:8|min:4',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
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
    private function registerAgency($request){

        $request->validate([
            'name' => 'required|string|max:50|min:3',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|min:11|max:11',
            'whatsapp' => 'required|string|min:11|max:11',
            'category' => 'required|string|max:8|min:4',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $input = $request->all();

        $agency = Agency::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'whatsapp' => $request->whatsapp,
        ]);

        $user = User::create([
            'role_id' => 2,
            'agency_id' => $agency->id,
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
}
