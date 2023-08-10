<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageWatermarkController extends Controller
{

    /**
     * stores an image, reduces the image size and watermarks it
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  final name of the image
     * @param  watermark file(png,jpg,gif) in the public directory
     * @return a saved and watermarked image
     */

    //
	static function cybaghostWatermarkImage($request,$imagename,$watermark_file){
		
        
        $file = $request->file('file');

        $source = $file;
        
        //uploads image to the photos directory
        $file->move(public_path('photos'),$imagename);
        
        $target = public_path('photos/'.$imagename);

        $type = pathinfo($file->getClientOriginalName(),PATHINFO_EXTENSION);
        
        //if the file is a jpeg or jpg image
        if($type == 'jpeg' || $type == 'jpg'){

            
            //image watermarking section
            
            $wtrmrk_file = $watermark_file;
        
            //create image from jpeg if the watermark image is a jpeg file
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'jpg' || pathinfo($watermark_file, PATHINFO_EXTENSION) == 'jpeg') $watermark = imagecreatefromjpeg($wtrmrk_file);
            
            //create from png if the watermark image is png
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'png') $watermark = imagecreatefrompng($wtrmrk_file);
            
            //create from gif if the watermark image is a gif file
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'gif') $watermark = imagecreatefromgif($wtrmrk_file);
        
            imagealphablending($watermark, false);
            
            imagesavealpha($watermark, true);
            
            $img = imagecreatefromjpeg($target);
            
            $img_w = imagesx($img);
            
            $img_h = imagesy($img);
            
            $wtrmrk_w = imagesx($watermark);
            
            $wtrmrk_h = imagesy($watermark);
            
            $dst_x = ($img_w / 2) - ($wtrmrk_w / 2); // For centering the watermark on any image
            
            $dst_y = ($img_h / 2) - ($wtrmrk_h / 2); // For centering the watermark on any image
            
            imagecopy($img, $watermark, $dst_x, $dst_y, 0, 0, $wtrmrk_w, $wtrmrk_h);
            
            imagejpeg($img, $target, 100);
            
            imagedestroy($img);
            
            imagedestroy($watermark);

        
            //image size reduction section

            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 750;
            
            $diff= $width / $modwidth;
            
            $modheight= 750;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromjpeg($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagejpeg($tn,$save,75);

            
        //if the file is a gif image
        }elseif($type == 'gif'){

            //watermark section
            $wtrmrk_file = $watermark_file;
            
            //create image from jpeg if the watermark image is a jpeg file
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'jpg' || pathinfo($watermark_file, PATHINFO_EXTENSION) == 'jpeg') $watermark = imagecreatefromjpeg($wtrmrk_file);
            
            //create from png if the watermark image is png
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'png') $watermark = imagecreatefrompng($wtrmrk_file);
            
            //create from gif if the watermark image is a gif file
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'gif') $watermark = imagecreatefromgif($wtrmrk_file);
            
            imagealphablending($watermark, false);
            
            imagesavealpha($watermark, true);
            
            $img = imagecreatefromjpeg($target);
            
            $img_w = imagesx($img);
            
            $img_h = imagesy($img);
            
            $wtrmrk_w = imagesx($watermark);
            
            $wtrmrk_h = imagesy($watermark);
            
            $dst_x = ($img_w / 2) - ($wtrmrk_w / 2); // For centering the watermark on any image
            
            $dst_y = ($img_h / 2) - ($wtrmrk_h / 2); // For centering the watermark on any image
            
            imagecopy($img, $watermark, $dst_x, $dst_y, 0, 0, $wtrmrk_w, $wtrmrk_h);
            
            imagejpeg($img, $target, 100);
            
            imagedestroy($img);
            
            imagedestroy($watermark);

            
            //size reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 750;
            
            $diff= $width / $modwidth;
            
            $modheight= 750;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromgif($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagegif($tn,$save,7);

        
        //if the file is a png image
        }elseif($type == 'png'){

            //watermark section
            $wtrmrk_file = $watermark_file;
            
            //create image from jpeg if the watermark image is a jpeg file
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'jpg' || pathinfo($watermark_file, PATHINFO_EXTENSION) == 'jpeg') $watermark = imagecreatefromjpeg($wtrmrk_file);
            
            //create from png if the watermark image is png
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'png') $watermark = imagecreatefrompng($wtrmrk_file);
            
            //create from gif if the watermark image is a gif file
            if(pathinfo($watermark_file, PATHINFO_EXTENSION) == 'gif') $watermark = imagecreatefromgif($wtrmrk_file);
            
            imagealphablending($watermark, false);
            
            imagesavealpha($watermark, true);
            
            $img = imagecreatefromjpeg($target);
            
            $img_w = imagesx($img);
            
            $img_h = imagesy($img);
            
            $wtrmrk_w = imagesx($watermark);
            
            $wtrmrk_h = imagesy($watermark);
            
            $dst_x = ($img_w / 2) - ($wtrmrk_w / 2); // For centering the watermark on any image
            
            $dst_y = ($img_h / 2) - ($wtrmrk_h / 2); // For centering the watermark on any image
            
            imagecopy($img, $watermark, $dst_x, $dst_y, 0, 0, $wtrmrk_w, $wtrmrk_h);
            
            imagejpeg($img, $target, 100);
            
            imagedestroy($img);
            
            imagedestroy($watermark);

            
            //quality reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 750;
            
            $diff= $width / $modwidth;
            
            $modheight= 750;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefrompng($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagepng($tn,$save,9);
        
        }

         
		
	    
	}

    /**
     * stores an image, reduces the image size
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  final name of the image
     * @return a saved and reduced image
     */

    //
	static function cybaghostAgent($request,$imagename){
		
        
        $file = $request->file('file');

        $source = $file;
        
        //uploads image to the photos directory
        $file->move(public_path('photos'),$imagename);
        
        $target = public_path('photos/'.$imagename);

        $type = pathinfo($file->getClientOriginalName(),PATHINFO_EXTENSION);
        
        //if the file is a jpeg or jpg image
        if($type == 'jpeg' || $type == 'jpg'){
        
            //image size reduction section

            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 500;
            
            $diff= $width / $modwidth;
            
            $modheight= 500;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromjpeg($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagejpeg($tn,$save,75);

            
        //if the file is a gif image
        }elseif($type == 'gif'){

            
            //size reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 500;
            
            $diff= $width / $modwidth;
            
            $modheight= 500;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromgif($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagegif($tn,$save,7);

        
        //if the file is a png image
        }elseif($type == 'png'){

            
            //quality reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 500;
            
            $diff= $width / $modwidth;
            
            $modheight= 500;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefrompng($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagepng($tn,$save,9);
        
        }

         
		
	    
	}

    /**
     * stores an image, reduces the image size
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  final name of the image
     * @return a saved and reduced image
     */

    //
	static function cybaghostAgency($request,$imagename){
		
        
        $file = $request->file('file');

        $source = $file;
        
        //uploads image to the photos directory
        $file->move(public_path('photos'),$imagename);
        
        $target = public_path('photos/'.$imagename);

        $type = pathinfo($file->getClientOriginalName(),PATHINFO_EXTENSION);
        
        //if the file is a jpeg or jpg image
        if($type == 'jpeg' || $type == 'jpg'){
        
            //image size reduction section

            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 200;
            
            $diff= $width / $modwidth;
            
            $modheight= 200;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromjpeg($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagejpeg($tn,$save,75);

            
        //if the file is a gif image
        }elseif($type == 'gif'){

            
            //size reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 200;
            
            $diff= $width / $modwidth;
            
            $modheight= 200;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromgif($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagegif($tn,$save,7);

        
        //if the file is a png image
        }elseif($type == 'png'){

            
            //quality reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 200;
            
            $diff= $width / $modwidth;
            
            $modheight= 200;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefrompng($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagepng($tn,$save,9);
        
        }

         
		
	    
	}

    /**
     * stores an image, reduces the image size
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  final name of the image
     * @return a saved and reduced image
     */

    //
	static function cybaghostReview($request,$imagename){
		
        
        $file = $request->file('file');

        $source = $file;
        
        //uploads image to the photos directory
        $file->move(public_path('photos'),$imagename);
        
        $target = public_path('photos/'.$imagename);

        $type = pathinfo($file->getClientOriginalName(),PATHINFO_EXTENSION);
        
        //if the file is a jpeg or jpg image
        if($type == 'jpeg' || $type == 'jpg'){
        
            //image size reduction section

            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 300;
            
            $diff= $width / $modwidth;
            
            $modheight= 300;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromjpeg($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagejpeg($tn,$save,75);

            
        //if the file is a gif image
        }elseif($type == 'gif'){

            
            //size reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 300;
            
            $diff= $width / $modwidth;
            
            $modheight= 300;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefromgif($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagegif($tn,$save,7);

        
        //if the file is a png image
        }elseif($type == 'png'){

            
            //quality reduction section
            $save= $target; // this is the new file you are saving
            
            $file = $target; // this is the original file
            
            list($width, $height)= getimagesize($file);
            
            $modwidth = 300;
            
            $diff= $width / $modwidth;
            
            $modheight= 300;
            
            $tn = imagecreatetruecolor($modwidth,$modheight);
            
            $image= imagecreatefrompng($file);
            
            imagecopyresampled($tn,$image,0,0,0,0, $modwidth,$modheight,$width,$height);

            imagepng($tn,$save,9);
        
        }

         
		
	    
	}


}
