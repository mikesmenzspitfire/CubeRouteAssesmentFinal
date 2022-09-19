@include('layouts.header', ['categories' => App\Category::all()])
{{-- mkae this look better --}}
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
            <div class="panel-heading">Create New Category</div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-6">
                  <form class="form-horizontal" role="form" method="POST" action="{{ url('/categories.store') }}">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" class="form-control" id="name">
                    </div>
                    <div class="form-group">
                        <label for="meta_title">Meta Title</label>
                        <input type="text" name="meta_title" class="form-control" id="meta_title">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="meta_keywords">Meta Keywords</label>
                        <input type="text" name="meta_keywords" class="form-control" id="meta_keywords">
                    </div>
                    <div class="form-group">
                        <label for="meta_description">Meta Description</label>
                        <input type="text" name="meta_description" class="form-control" id="meta_description">
                        </div>
                    </div class="row">
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary">
                </div>
                </form>
            </div>
            </div>
    

@include('layouts.footer')