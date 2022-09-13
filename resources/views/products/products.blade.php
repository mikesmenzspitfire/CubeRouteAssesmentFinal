@extends('layouts.header')
    
    
    @section('content')
    <section class="wrapper bg-light">
        <div class="container py-14 py-md-16">
          <div class="row align-items-center mb-10 position-relative zindex-1">
            <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
              <h2 class="display-6">Products</h2>
              <nav class="d-inline-block" aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                 
                </ol>
              </nav>
              <!-- /nav -->
            </div>
            <!--/column -->
            <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
              
              <!--/.form-select-wrapper -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <div class="grid grid-view projects-masonry shop mb-13">
            <div class="row gx-md-8 gy-10 gy-md-13 isotope">
                @foreach ($products as $product)
              <div class="project item col-md-6 col-xl-4">
                <figure class="rounded mb-6">
                  <img src="https://res.cloudinary.com/epetstore/image/upload/t_product-category-image/31412/royal_wet_mini_adult.jpg" alt="" />
                  
                  
                  <span class="avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13" style="top: 1rem; left: 1rem;"><span>Sale!</span></span>
                </figure>
                <div class="post-header">
                  <div class="d-flex flex-row align-items-center justify-content-between mb-2">
                    
                    
                    
                  </div>
                  <h3 class="h5 mb-2"><a href="{{url('products', ['id' => $product->id])}}">{{$product->name}}</a></h3>
                  
                </div>
                <!-- /.post-header -->
              </div>
              @endforeach
              <!-- /.item -->
             
            </div>
            <!-- /.row -->
          </div>
          <!-- /.grid -->
          <nav class="d-flex justify-content-center" aria-label="pagination">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true"><i class="uil uil-arrow-left"></i></span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true"><i class="uil uil-arrow-right"></i></span>
                </a>
              </li>
            </ul>
            <!-- /.pagination -->
          </nav>
          <!-- /nav -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /section -->
      
      <!-- /section -->
    </div>

    @endsection
    
    