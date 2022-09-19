
@include('layouts.header', ['categories' => App\Category::all()])
<section class="wrapper bg-light">
  <div class="container py-14 py-md-16">
    <div class="row gx-md-8 gx-xl-12 gy-8">
      <div class="col-lg-6">
        <div class="swiper-container swiper-thumbs-container dots-over" data-margin="10" data-dots="false" data-nav="true" data-thumbs="true">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <figure class="rounded"><img src="https://res.cloudinary.com/epetstore/image/upload/t_product-category-image/31412/royal_wet_mini_adult.jpg" srcset="https://res.cloudinary.com/epetstore/image/upload/t_product-category-image/31412/royal_wet_mini_adult.jpg" alt="" /><a class="item-link swiper-no-swiping" href="https://res.cloudinary.com/epetstore/image/upload/t_product-category-image/31412/royal_wet_mini_adult.jpg" data-glightbox data-gallery="product-group"><i class="uil uil-focus-add"></i></a></figure>
              </div>
              <!--/.swiper-slide -->
              
              <!--/.swiper-slide -->
            </div>
            <!--/.swiper-wrapper -->
          </div>
          <!-- /.swiper -->
          <div class="swiper swiper-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="./assets/img/photos/shs1-th.jpg" srcset="./assets/img/photos/shs1-th@2x.jpg 2x" class="rounded" alt="" /></div>
              
            </div>
            <!--/.swiper-wrapper -->
          </div>
          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /column -->
      <div class="col-lg-6">
        <div class="post-header mb-5">
          <h2 class="post-title display-5"><a href="" class="link-dark">{{ $product->name }}</a></h2>
          
         
        </div>
        <!-- /.post-header -->
        <p class="mb-6">{{ $product->description }}</p>
        <form>
          @if($product->variants->count() > 0)
          <fieldset class="picker">
            
            <label for="Product" class="form-label">variant</label>
                    
            <select  class="form-select" name="product_id" id="Product" >
              
              @foreach($variants as $variant)
              <option  value="{{$variant->id}}">{{$variant->name}}</option>
             
              
              @endforeach
              
            </select>
            @endif
          </fieldset>
          <div class="row">
            <div class="col-lg-9 d-flex flex-row pt-2">
              <div>
               
                <!--/.form-select-wrapper -->
              </div>
              <div class="flex-grow-1 mx-2">
                <button class="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1"><i class="uil uil-shopping-bag"></i> Add to Cart</button>
              </div>
              <div>
                <button class="btn btn-block btn-red btn-icon rounded px-3 w-100 h-100"><i class="uil uil-heart"></i></button>
              </div>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </form>
        <!-- /form -->
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
    <ul class="nav nav-tabs nav-tabs-basic mt-12">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#tab1-1">Product Slug</a>
      </li>
      
    </ul>
    <!-- /.nav-tabs -->
    <div class="tab-content mt-0 mt-md-5">
      <div class="tab-pane fade show active" id="tab1-1">
       <p>{{ $product->slug }}</p>
      </div>
      <!--/.tab-pane -->
      
      <!--/.tab-pane -->
    </div>
    <!-- /.tab-content -->
  </div>
  <!-- /.container -->
</section>



@include('layouts.footer')
