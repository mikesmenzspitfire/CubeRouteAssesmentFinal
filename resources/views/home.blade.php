@include('layouts.header', ['categories' => App\Category::all()])


<div class="container">
    @if(session('status'))
      <div class="alert alert-success">
          {{ session('status') }}
      </div>
      @endif
      
    

@include('layouts.footer')

