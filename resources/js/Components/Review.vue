<template>
    
    <!-- Star Reviews -->
    <section class="reviews comments">
        <h3 class="mb-5">3 Reviews</h3>
        <div class="row mb-5">
            <ul class="col-12 commented pl-0">
                <li class="comm-inf">
                    <div class="col-md-2">
                        <img src="images/testimonials/ts-5.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-10 comments-info">
                        <div class="conra">
                            <h5 class="mb-2">Mary Smith</h5>
                            <div class="rating-box">
                                <div class="detail-list-rating mr-0">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                        <p class="mb-4">May 30 2020</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.</p>
                        <div class="rest"><img src="images/single-property/s-1.jpg" class="img-fluid" alt=""></div>
                    </div>
                </li>

            </ul>
        </div>
        
        
    </section>
    <!-- End Reviews -->
    <!-- Star Add Review -->
    <section class="single reviews leve-comments details">
        <div id="add-review" class="add-review-box">
            <!-- Add Review -->
            <h3 class="listing-desc-headline margin-bottom-20 mb-4">Add Review</h3>
            <span class="leave-rating-title">Your rating for this listing</span>
            <!-- Rating / Upload Button -->
            <div class="row mb-4">
                <div class="col-md-6">
                    <!-- Leave Rating -->
                    <div class="clearfix"></div>
                    <div class="leave-rating margin-bottom-30">
                        <input type="radio" name="rating" id="rating-1" value="1" />
                        <label for="rating-1" class="fa fa-star"></label>
                        <input type="radio" name="rating" id="rating-2" value="2" />
                        <label for="rating-2" class="fa fa-star"></label>
                        <input type="radio" name="rating" id="rating-3" value="3" />
                        <label for="rating-3" class="fa fa-star"></label>
                        <input type="radio" name="rating" id="rating-4" value="4" />
                        <label for="rating-4" class="fa fa-star"></label>
                        <input type="radio" name="rating" id="rating-5" value="5" />
                        <label for="rating-5" class="fa fa-star"></label>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="col-md-6">
                    <!-- Uplaod Photos -->
                    <div class="add-review-photos margin-bottom-30">
                        <div class="photoUpload">
                            <span><i class="sl sl-icon-arrow-up-circle"></i> Upload Photos</span>
                            <input type="file" class="upload" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 data">
                    <form action="#">
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" placeholder="First Name" required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" placeholder="Last Name" required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="email" name="email" class="form-control" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="col-md-12 form-group">
                            <textarea class="form-control" id="exampleTextarea" rows="8" placeholder="Review" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg mt-2">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Add Review -->

</template>
