@include('layouts.header', ['categories' => App\Category::all()])
<div class="container">
  <div class="row">
      <div class="col-md-3">
          <ul class="list-group">
              <li class="list-group-item">
                  <a href="{{ route('home') }}">Home</a>
              </li>
              <li class="list-group-item">
                  <a href="">Categories</a>
              </li>
              <li class="list-group-item">
                  <a href="">Product</a>
              </li>
          </ul>
      </div>
      <div class="col-md-9">
          <div class="card">
              <div class="card-header">Category</div>
              <div class="card-body">
                  <table class="table table-bordered">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Slug</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          @foreach ($products as $product)
                          <tr>
                              <td>{{ $category->name }}</td>
                              <td>{{ $category->name }}</td>
                              <td>
                                  <a href="" class="btn btn-sm btn-primary">Edit</a>
                                  <a href="" class="btn btn-sm btn-danger">Delete</a>
                              </td>
                          </tr>
                          @endforeach
                      </tbody>
                  </table>
              <div class="card-body">
                  <table class="table table-hover">
                      <thead>
                          <th>Name</th>
                          <th>Edit</th>
                          <th>Delete</th>
                      </thead>
                      <tbody>
                          @foreach ($categories as $category)
                          <tr>
                              <td>{{ $category->name }}</td>
                              <td>
                                  <a href="" class="btn btn-xs btn-info">
                                      <span class="glyphicon glyphicon-pencil"></span>
                                  </a>
                              </td>
                              <td>
                                  <a href="" class="btn btn-xs btn-danger">
                                      <span class="glyphicon glyphicon-trash"></span>
                                  </a>
                              </td>
                          </tr>
                          @endforeach
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</div>
@include('layouts.footer')