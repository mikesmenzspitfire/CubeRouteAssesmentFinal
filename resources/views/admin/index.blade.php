@include('layouts.header', ['categories' => App\Category::all()])
<body>
    <div class="container mt-10 mb-10">
    @if(session('status'))
      <div class="alert alert-success">
          {{ session('status') }}
      </div>
    @endif
    <div class="card">
      <div class="card-header text-center font-weight-bold">
       Cube Route Assesment Administration Panel
      </div>
      <div class="card-body">
        <!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="prodcat-tab" data-bs-toggle="tab" data-bs-target="#prodcat" type="button" role="tab" aria-controls="home" aria-selected="true">Category Relationships</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Products</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Category Management</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Product/Category SEO</button>
    </li>
  </ul>
  
  <!-- Tab panes -->
  <div class="tab-content">
    <div class="tab-pane active" id="prodcat" role="tabpanel" aria-labelledby="prodcat-tab">
        
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Current Category Relationships</h5>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Category Name</th>
                            
                        </tr>
                    </thead>
                 
                        
                        
                            <tr>
                              @if($categories->count() > 0)
                              //get category name and product name
                              @foreach($categories as $category)
                              @foreach($category->products as $product)
                                  <td>{{ $product->name }}</td>
                                  <td>{{ $category->name }}</td>
                                 
                              </tr>
                              @endforeach
                            @endforeach
                            @else
                              <tr>
                                  <td colspan="4" class="text-center">No categories yet</td>
                              </tr>
                            @endif
                              
                                
                             
                            </tr>
                           
                        {{-- @endforeach --}}
                        
                    </tbody>
                </table>
                <form class="row g-3" method="post" action="{{url('admin')}}"> 
                  @method('POST')                 
                  @csrf
                  
                     <h2 class="mt-5 mb-5">Add Relationships</h2>
                     <div class="col-md-6">
                      <label for="Product" class="form-label">Product</label>
                      
                      <select  class="form-select" name="product_id" id="Product" >
                        @foreach($products as $product)
                        <option  value="{{$product->id}}">{{$product->name}}</option>
                       
                        
                        @endforeach
                        
                      </select>
                      
                     
                    </div>
                     <div class="col-md-6">
                       <label for="Category" class="form-label">Category</label>
                       <select class="form-select" name="category_id" data-live-search="true" id="Category" >
                        @foreach($categories as $category)
                          <option value="{{ $category->id }}">{{ $category->name }}</option>
                        
                        
                         @endforeach
                       </select>
                     </div>
                     
                     
                     <div class="col-12">
                      
                      <input type="submit" class="btn btn-primary" >
                    </div>
                   </form>
            </div>
        </div>
    </div>
  

    
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <div class="card">
        <div class="card-header">
                <h5 class="card-title">Product Management</h5>
            </div>
            <div class="card-body">
              
              <form name="product-management" class="row g-3" id="product-management" method="post" action="{{url('admin/products', $product->id)}}">
                @method('PUT')
                @csrf
                
                   <div class="col-md-6">
                    
                     <label for="prodname" class="form-label">Product Name</label>
                     <input class="form-control" name="name" id="prodname">
                   </div>
                   
                   <input type="hidden" name="_token" value="{{ csrf_token() }}">
                   
                     <div class="col-12">
                        <input type="submit" class="btn btn-primary">
                 </form>
            </div>
            
              <table class="table table-bordered">
                <thead>
                    <tr>
                        
                        <th>Product Name</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  @if($products->count() > 0)
                    @foreach($products as $product )
                    
                        <tr>
                         
                            <td><input type="text" class="form-control" name="name" value="{{ $product->name}}"></td>
                            
                           
                            <td>
                                
                              <form action="{{url('admin/delete')}}" method="post" style="display: inline-block;">
                                
                                @method('POST')
                                
                                    @csrf
                                   
                                    
                                    
                                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                    <input type="hidden" name="id" value="{{ $product->id }}">

                                    <input class="btn btn-sm btn-danger" type="submit" value="delete" >
                              </form>
                              
                            </td>
                            
                            
                        </tr>
                       
                    @endforeach
                    @else
                    <td colspan="3" class="text-center">No Products</td>
                    @endif
                    
                </tbody>
                {{ $products->links() }}
                <div class="justify-content-center col-md-12 tab-pane pt-5 mb-10"> {{-- justify pagination --}}</div>
            </table>
            
      
        
      </div>
   </div>
    <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
    <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
  </div>
        </div>
        </div>
        </div>
       
  </body>
  @include('layouts.footer')