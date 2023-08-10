<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ImageWatermarkController;
use App\Providers\RouteServiceProvider;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use App\Models\Review;
use Inertia\Inertia;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$id,$type)
    {
        //

        if($type == 'user') {

            $rev = Review::where('user_id',$id);

            $review = $rev->paginate(12);

            $sorted_result = $review->getCollection()->sortBy([['star','desc']])->values();

            $review->setCollection($sorted_result);

            $total_review = $rev->count();

            $sum_review = Review::where('user_id',$id)->sum('star');

            $total_review == 0 ? $average = 0 : $average = round($sum_review/$total_review);

            return [$review, $average, $total_review];
        }

        if($type == 'property') {

            $rev = Review::where('property_id',$id);

            $review = $rev->paginate(12);

            $sorted_result = $review->getCollection()->sortBy([['star','desc']])->values();

            $review->setCollection($sorted_result);

            $total_review = $rev->count();

            $sum_review = Review::where('property_id',$id)->sum('star');

            $total_review == 0 ? $average = 0 : $average = round($sum_review/$total_review);

            return [$review, $average, $total_review];
            
        }

        
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
        if($request->type == 'property'){

            $request->validate([
                'name' => 'required|string|max:40|min:3',
                'email' => 'required|string|email|max:40',
                'review' => 'required|string|max:5000|min:4',
                'star' => 'required|integer|min:1|max:5',
            ]);
            
             //if the count is greater than 0, this means that the user have already made a review
            $count = Review::where('property_id',$id)->where('email',$request->email)->count();

            if($count > 0){

                throw ValidationException::withMessages(['you have already made a review']);

            }
    
            if($file = $request->file('file')){
    
                $imagename = time().$file->getClientOriginalName();
    
                Review::create([
                
                    'property_id' => $id,
                    'name' => $request->name,
                    'email' => $request->email,
                    'image' => $imagename,
                    'review' => $request->review,
                    'star' => $request->star
                ]);
    
                ImageWatermarkController::cybaghostReview($request,$imagename);
            
            }else{
    
                Review::create([
                
                    'property_id' => $id,
                    'name' => $request->name,
                    'email' => $request->email,
                    'review' => $request->review,
                    'star' => $request->star
                ]);
            }

            
        }

        if($request->type == 'user'){

            $request->validate([
                'name' => 'required|string|max:40|min:3',
                'email' => 'required|string|email|max:40',
                'review' => 'required|string|max:5000|min:4',
                'star' => 'required|integer|min:1|max:5',
            ]);

            $count = Review::where('user_id',$id)->where('email',$request->email)->count();
            
            //if the count is greater than 0, this means that the user have already made a review
            if($count > 0){

                throw ValidationException::withMessages(['you have already made a review']);

            }
    
            if($file = $request->file('file')){
    
                $imagename = time().$file->getClientOriginalName();
    
                Review::create([
                
                    'user_id' => $id,
                    'name' => $request->name,
                    'email' => $request->email,
                    'image' => $imagename,
                    'review' => $request->review,
                    'star' => $request->star
                ]);
    
                ImageWatermarkController::cybaghostReview($request,$imagename);
            
            }else{
    
                Review::create([
                
                    'user_id' => $id,
                    'name' => $request->name,
                    'email' => $request->email,
                    'review' => $request->review,
                    'star' => $request->star
                ]);
            }

            
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
}
