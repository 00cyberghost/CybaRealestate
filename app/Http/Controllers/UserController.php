<?php

namespace App\Http\Controllers;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ImageWatermarkController;
use App\Models\User;
use App\Models\Property;
use App\Models\Review;
use App\Models\Image;
use App\Models\Agency;
use App\Models\Bookmark;
use App\Models\Role;
use Notification;
use App\Notifications\MailAgentNotification;
use Inertia\Inertia;

class UserController extends Controller
{

    //sort the array based on the property count columnn in a descening order
    static function array_sort_by_column(&$arr,$col,$dir){

        $sort_col = [];

        foreach ($arr as $key => $row) {
            
            $sort_col[$key] = $row[$col];
        }

        return array_multisort($sort_col,$dir,$arr);

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if(Auth::user()->category == 'agency'){

            return redirect()->route('agencyDashboard');
        }

        //user id
        $id = Auth::user()->id;


        /**user reviews star*/
        $rev = Review::where('user_id',$id);

        $review = $rev->paginate(12);

        $total_review = $rev->sum('star');

        $count = $rev->count();

        $count == 0 ? $average_review = 0 : $average_review = round($total_review / $count);

        /**user review end*/
        
        /**property listing and rating start*/
        $properties = Property::where('user_id',$id)->paginate(12)->toArray();

        $new = [];

        foreach($properties['data'] as $property){

            $revieew = Review::where('property_id',$property['id']);

            $count = $revieew->count();

            $total_review = $revieew->sum('star');

            $count == 0 ? $average_property_review = 0 : $average_property_review = round($total_review/$count);        

            $merge = array_merge($property,array('average_property_review' => $average_property_review));
            
            array_push($new,$merge);
           
        }

        $empty_array = [];

        $property = array_merge($empty_array,$properties);

        $property['data'] = $new;
        /**property listing and rating end*/

        /**dashboard counts start*/
        //property count
        $dashboard_property = Property::where('user_id',$id);

        $dashboard_property_count = $dashboard_property->get()->count();


        //bookmark counts
        $dashboard_property = $dashboard_property->get();

        $book_arr = [];

        foreach($dashboard_property as $property_id){

            $count = Bookmark::where('property_id',$property_id->id)->count();

            array_push($book_arr,$count);
        }

        $dashboard_bookmark_count = array_sum($book_arr);


        $dashboard_count = ['dashboard_property_count' => $dashboard_property_count, 'dashboard_bookmark_count' => $dashboard_bookmark_count];
        
        /**dashboard counts end*/

        /**user start*/
        $user = Auth::user();
        /**user end */
        

        return Inertia::render('Dashboard/Dashboard',[

            'props' => ['userReview' => $review, 'average_review' => $average_review, 'property' => $property, 'dashboard_count' => $dashboard_count, 'user' => $user]
        ]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function agentDashboard($id,$aid)
    {

        $agency = Auth::user()->id;

        if($agency != $aid){

            return redirect()->route('dashboard');
        }
        
        
       
        /**user reviews star*/
        $rev = Review::where('user_id',$id);

        $review = $rev->paginate(12);

        $total_review = $rev->sum('star');

        $count = $rev->count();

        $count == 0 ? $average_review = 0 : $average_review = round($total_review / $count);

        /**user review end*/
        
        /**property listing and rating start*/
        $properties = Property::where('user_id',$id)->paginate(12)->toArray();

        $new = [];

        foreach($properties['data'] as $property){

            $revieew = Review::where('property_id',$property['id']);

            $count = $revieew->count();

            $total_review = $revieew->sum('star');

            $count == 0 ? $average_property_review = 0 : $average_property_review = round($total_review/$count);        

            $merge = array_merge($property,array('average_property_review' => $average_property_review));
            
            array_push($new,$merge);
           
        }

        $empty_array = [];

        $property = array_merge($empty_array,$properties);

        $property['data'] = $new;
        /**property listing and rating end*/

        /**dashboard counts start*/
        //property count
        $dashboard_property = Property::where('user_id',$id);

        $dashboard_property_count = $dashboard_property->get()->count();


        //bookmark counts
        $dashboard_property = $dashboard_property->get();

        $book_arr = [];

        foreach($dashboard_property as $property_id){

            $count = Bookmark::where('property_id',$property_id->id)->count();

            array_push($book_arr,$count);
        }

        $dashboard_bookmark_count = array_sum($book_arr);


        $dashboard_count = ['dashboard_property_count' => $dashboard_property_count, 'dashboard_bookmark_count' => $dashboard_bookmark_count];
        
        /**dashboard counts end*/

        /**user start*/
        $user = User::where('id',$id)->get();
        /**user end */
        

        return Inertia::render('Dashboard/AgentDashboard',[

            'props' => ['userReview' => $review, 'average_review' => $average_review, 'property' => $property, 'dashboard_count' => $dashboard_count, 'user' => $user]
        ]);
    }





    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function agencyIndex()
    {

        /**agents start*/
        $id = Auth::user()->id;

        $users = User::where('agency_id',$id);
        
        $agents = $users->paginate(12)->toArray();

        $new = [];

        foreach($agents['data'] as $agent){

            $review = Review::where('user_id',$agent['id']);

            $count = $review->count();

            $sum = $review->sum('star');

            $count == 0 ? $average_review = 0 : $average_review = ($sum/$count); 

            $merge = array_merge($agent,array('average_review' => round($average_review)));
            
            array_push($new,$merge);
           
        }

        $empty_array = [];

        $agent = array_merge($empty_array,$agents);

        $agent['data'] = $new;

        /**agents end */

        /**agency count start */
        $no_of_agents = $users->count();

        $no_of_properties = Property::where('agency_id',$id)->count();

        $agency_review = Review::where('user_id',$id);

        $total = $agency_review->count();

        $sum = $agency_review->sum('star');

        $total == 0 ? $rating = 0 : $rating = round($sum/$total);

        $dashboard_count = ['no_of_agents' => $no_of_agents, 'no_of_properties' => $no_of_properties,'rating' => $rating];

        $agency = Auth::user();

        
        
        return Inertia::render('Dashboard/AgencyDashboard',[

            'props' => ['agents' => $agent, 'dashboard_count' => $dashboard_count, 'agency' => $agency]
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
    public function destroy(Request $request)
    {
        //validate the request

        $request->validate([
            'agent_id' => 'required|integer',
            'agency_id' => 'required|integer',
        ]);


        User::where('id',$request->agent_id)->where('agency_id',$request->agency_id)->delete();

        return redirect()->back();
    }

    /**
     * Display a information about the user
     *
     * @return Inertia\inertia
     */
    public function profile()
    {
        //
        $user = Auth::user();

        //generate user token which will be used by dropzone.js during image upload
        $token = csrf_token();
        
        return Inertia::render('Dashboard/Profile',[

            'props' => ['user' => $user, 'token' => csrf_token()]
        ]);
    }

    /**
     * Display a list of the agents.
     *
     * @return \Inertia\inertia
     */
    public function listAgents()
    {

        $users = User::where('category','agent')->paginate(12)->toArray();

        $new = [];

        foreach($users['data'] as $user){

            $count = Property::where('user_id',$user['id'])->get()->count();

            $rating = Review::where('user_id',$user['id']);

            $rating_count = $rating->count();

            $rating_sum = $rating->sum('star');

            $rating_count == 0 ? $average_review = 0 :  $average_review = round($rating_sum/$rating_count);

            $merge = array_merge($user,array('property_count' => $count,'rating' => $average_review));
            
            array_push($new,$merge);
           
        }

        self::array_sort_by_column($new,'id',SORT_DESC);

        $empty_array = [];

        $final_array = array_merge($empty_array,$users);

        $final_array['data'] = $new;

        return inertia::render('Agents',[
            
            'users' => $final_array
            
        ]);

    }

    /**
     * Display the specific agent.
     *
     * @param  int  $id
     * @return \Inertia\inertia
     */
    public function showAgent($id)
    {
        //

        $property = Property::with('images','user')->where('user_id',$id);

        $properties = $property->paginate(12);

        $user = User::where('id',$id)->get();

        $property_count = $property->count();


        return inertia::render('AgentDetails',[
            'props' => ['user' => $user, 'properties' => $properties, 'property_count' => $property_count]
        ]);
    }


    /**
     * Display a list of all agencies.
     *
     * @return \Inertia\inertia
     */
    public function listAgencies()
    {
        //
        $agencies = User::where('category','agency')->paginate(12)->toArray();

        
        $arr = [];

        foreach($agencies['data'] as $agency){

            $count = Property::where('agency_id',$agency['id'])->count();

            $rating = Review::where('user_id',$agency['id']);

            $rating_count = $rating->count();

            $rating_sum = $rating->sum('star');

            $rating_count == 0 ? $average_review = 0 :  $average_review = round($rating_sum/$rating_count);

            $merge_array = array_merge($agency,array('property_count' => $count,'rating' => $average_review));

            array_push($arr,$merge_array);
        }

        self::array_sort_by_column($arr,'id',SORT_DESC);

        $empty_array = [];

        $final_array = array_merge($empty_array,$agencies);

        $final_array['data'] = $arr;

        return inertia::render('Agencies',[
            'agencies' => $final_array
        ]);

    }

    

    /**
     * Display the specific agency.
     *
     * @param  int  $id
     * @return \Inertia\inertia
     */
    public function showAgency($id)
    {
        //
        $agency = User::where('id',$id)->where('category','agency')->get();
        

        $get_agents = User::where('agency_id',$id)->paginate(12)->toArray();

        //loop through the gets_agents array and add a 'agent_property_count' key to the array
        $new = [];

        foreach($get_agents['data'] as $user){

            $count = Property::where('user_id',$user['id'])->get()->count();

            $merge = array_merge($user,array('agent_property_count' => $count));
            
            array_push($new,$merge);
           
        }

        $empty_array = [];

        $agents = array_merge($empty_array,$get_agents);

        $agents['data'] = $new;

        $properties = Property::with('images')->where('agency_id',$id);

        $agency_property_count = $properties->get()->count();

        $property = $properties->paginate(12);

        $sorted_result = $property->getCollection()->sortBy([['id','asc']])->values();

        $property->setCollection($sorted_result);

        $result = ['agency' => $agency,'agency_property_count' => $agency_property_count, 'agents' => $agents, 'properties' => $property];


        return inertia::render('AgencyDetails',[
            'agencies' => $result
        ]);
    }

    /**
     * Display a list of all agencies and sort them based on the given param.
     *
     * @return \Inertia\inertia
     */
    public function sortAgencies($param)
    {
        $agencies = User::where('category','agency')->paginate(12)->toArray();

        
        $arr = [];

        foreach($agencies['data'] as $agency){

            $count = Property::where('agency_id',$agency['id'])->count();

            $rating = Review::where('user_id',$agency['id']);

            $rating_count = $rating->count();

            $rating_sum = $rating->sum('star');

            $rating_count == 0 ? $average_review = 0 :  $average_review = round($rating_sum/$rating_count);

            $merge_array = array_merge($agency,array('property_count' => $count,'rating' => $average_review));

            array_push($arr,$merge_array);
        }
        
        //sort the array based on the columnn in a descening order

        switch ($param) {
            case 'alphabet':
                self::array_sort_by_column($arr,'name',SORT_ASC);
                break;

            case 'rating':
                self::array_sort_by_column($arr,'rating',SORT_DESC);
                break;

            case 'number':
                self::array_sort_by_column($arr,'property_count',SORT_DESC);
                break;

            case 'date':
                self::array_sort_by_column($arr,'created_at',SORT_ASC);
                break;
            
            default:
                return redirect()->back();
                break;
        }


        //rebuild the original array
        $empty_array = [];

        $final_array = array_merge($empty_array,$agencies);

        $final_array['data'] = $arr;

        return inertia::render('Agencies',[
            'agencies' => $final_array
        ]);
                
       

    }

    /**
     * Display a list of all agents and sort them based on the given param.
     *
     * @return \Inertia\inertia
     */
    public function sortAgents($param)
    {

        $users = User::where('category','agent')->paginate(12)->toArray();

        $new = [];

        foreach($users['data'] as $user){

            $count = Property::where('user_id',$user['id'])->get()->count();

            $rating = Review::where('user_id',$user['id']);

            $rating_count = $rating->count();

            $rating_sum = $rating->sum('star');

            $rating_count == 0 ? $average_review = 0 :  $average_review = round($rating_sum/$rating_count);

            $merge = array_merge($user,array('property_count' => $count,'rating' => $average_review));
            
            array_push($new,$merge);
           
        }

        //sort the array based on the columnn in a descening order

        switch ($param) {
            case 'alphabet':
                self::array_sort_by_column($new,'name',SORT_ASC);
                break;

            case 'rating':
                self::array_sort_by_column($new,'rating',SORT_DESC);
                break;

            case 'number':
                self::array_sort_by_column($new,'property_count',SORT_DESC);
                break;

            case 'date':
                self::array_sort_by_column($new,'created_at',SORT_ASC);
                break;
            
            default:
                return redirect()->back();
                break;
        }

        $empty_array = [];

        $final_array = array_merge($empty_array,$users);

        $final_array['data'] = $new;

        return inertia::render('Agents',[
            
            'users' => $final_array
            
        ]);

    }

    /**
     * Send email notification to user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function mailAgent(Request $request){

        $this->mailAgentNotify($request->user_id,$request->name,$request->phone,$request->email,$request->subject);

        return redirect()->back();

    }

    /**
     * Send email notification to user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function mailAgentNotify($user_id,$name,$phone,$email,$subject)
    {
        //
        $users = User::where('id',$user_id)->get();

        foreach($users as $user){
            $params = [
                'greeting' => 'hi, my name is '.$name.'.',
                'body' => $subject,
                'lastLine' => 'Kind regards, reach me with my phone number '.$phone.' or on my email '.$email
            ];

            Notification::send($user, new MailAgentNotification($params));
    
            // try {
            //     Notification::send($user, new MailAgentNotification($params));
            // } catch (\Throwable $th) {
            //     //throw $th;
            // }
        }

        
    }



    

    



}
