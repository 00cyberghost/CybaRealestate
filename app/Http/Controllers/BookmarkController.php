<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Agency;
use App\Models\Property;
use App\Models\Bookmark;
use App\Models\Image;
use App\Models\Role;
use Inertia\Inertia;

class BookmarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\inertia
     */
    public function index()
    {
        //
        $book = Bookmark::with('property')->where('user_id',Auth::user()->id)->paginate(12);

        $sorted_result = $book->getCollection()->sortBy([['id','desc']])->values();

        $book->setCollection($sorted_result);

        $bookmarks = $book->toArray();

        $arr = [];

        foreach($bookmarks['data'] as $bookmark){

            $image = Image::where('property_id',$bookmark['property_id'])->get('image_name');

            $merge_array = array_merge($bookmark,array('images' => $image));

            array_push($arr,$merge_array);

        }

        $empty_array = [];

        $final_array = array_merge($empty_array,$bookmarks);

        $final_array['data'] = $arr;

        return inertia::render('Dashboard/Bookmarks',[

            'props' => $final_array
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
    public function store(Request $request, $id)
    {
        //
        Bookmark::create([
            'property_id' => $id,
            'user_id' => Auth::user()->id
        ]);

        return redirect()->back();


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
        Bookmark::where('id',$id)->where('user_id',Auth::user()->id)->delete();

        return redirect()->back();
    }
}
