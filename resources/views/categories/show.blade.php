
@include('layouts.header', ['categories' => App\Category::all()])

<div class="container d-flex mt-10 mb-6">
{{-- show products in category --}}

@forelse ($category->products as $product)
<div class="project item col-md-6 col-xl-4">
    {{-- Add section --}}
  <figure class="rounded mb-6">
    <img src="https://res.cloudinary.com/epetstore/image/upload/t_product-category-image/31412/royal_wet_mini_adult.jpg" alt="" />
    
    
    <span class="avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13" style="top: 1rem; left: 1rem;"><span>Sale!</span></span>
  </figure>
  <div class="post-header">
    <div class="d-flex flex-row align-items-center justify-content-between mb-2">
      <h6 class="mb-0"><a href="{{url('categories', ['id' => $category->id])}}" class="text-dark">{{ $category->name }}</a></h6>
      <div class="d-flex flex-row align-items-center">
        
        
      </div>
      
      
      
    </div>
    <h3 class="h5 mb-2"><a href="{{url('products', ['id' => $product->id])}}">{{ $product->name }}</a></h3>
    
  </div>
  <!-- /.post-header -->
</div>
@endforeach

</div>



@include('layouts.footer')
