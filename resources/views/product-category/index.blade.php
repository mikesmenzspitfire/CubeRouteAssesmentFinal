
@includeFirst(['layouts.header'])
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                 
                        @foreach($join as $join )
                        
                            <tr>
                              
                                <td>{{ $join->product_id}}</td>
                                
                                <td>{{ $join->name}}</td>
                                <td>
                                    {{-- <a href="{{ url('product-category', $join->id) }}" class="btn btn-xs btn-primary">Edit</a> --}}
                                    <form action="{{url('product-category', ['id' => $join->id])}}" method="post" style="display: inline-block;">
                                        @csrf
                                        <input type="hidden" name="_method" value="delete" />
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <button type="submit" value="delete" class="btn btn-sm btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                           
                        @endforeach
                        
                    </tbody>
                </table>
                <form name="add-product-category-relationship" class="row g-3" id="add-product-category-relationship" method="post" action="{{url('product-category')}}">                  
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
                        @foreach($category as $category)
                          <option value="{{ $category->id }}">{{ $category->name }}</option>
                        
                        
                         @endforeach
                       </select>
                     </div>
                     
                     
                     <div class="col-12">
                       <button type="submit" name="product_name" value="{{$product->name}}" class="btn btn-primary">Save</button>
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
              
              <form name="product-management" class="row g-3" id="product-management" method="post" action="{{url('/products')}}">
                @csrf
                
                   <div class="col-md-12">
                     <label for="prodname" class="form-label">Product Name</label>
                     <input class="form-control" name="name" id="prodname">
                   </div>
                   
                   
                   <div class="col-12">
                     <button type="submit" class="btn btn-primary">Add Product</button>
                   </div>
                 </form>
              <table class="table table-bordered">
                <thead>
                    <tr>
                        
                        <th>Product Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                    @foreach($products as $product )
                    
                        <tr>
                          <form action="{{url('products', ['id' => $product->id])}}" method="post" style="display: inline-block;">
                            <td><input type="text" class="form-control" name="name" value="{{ $product->name}}"></td>
                            
                            <td>
                                <a href="#" class="btn btn-sm btn-primary">Edit</a>
                                
                                    @csrf
                                    @method('UPDATE')
                                    <input type="hidden" name="_method" value="delete" />
                                    
                                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                    <button type="submit" value="delete" class="btn btn-sm btn-danger">Delete</button>
                                </form>
                            
                        </tr>
                       
                    @endforeach
                    
                </tbody>
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