@extends('header.layout')
@section('content')
    <div class="container mt-4">
    @if(session('status'))
      <div class="alert alert-success">
          {{ session('status') }}
      </div>
    @endif
    <div class="card">
      <div class="card-header text-center font-weight-bold">
        Laravel 8 - Add Blog Post Form Example
      </div>
      <div class="card-body col-md-12">
        <form name="add-blog-post-form" id="add-blog-post-form" method="post" action="{{url('store-form')}}">
         @csrf
         <div class="row">
          <div class="form-group col-md-6">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" id="title" name="title" class="form-control" required="">
          </div>
         </div>
          <div class="form-group col-md-6">
            <label for="exampleInputEmail1">Description</label>
            <textarea name="description" class="form-control" required=""></textarea>
          </div>
          <div class="row">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4">
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  </div>
@endsection