<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- TODO: Add Description from From Table -->
    <meta name="description" content="">
    <!-- TODO: Add Keywords From Table -->
    <meta name="keywords" content="">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugins.css') }}" rel="stylesheet">
    
    <style>
      section header.image-wrapper:not(.mobile) {
        background-attachment: scroll !important;
      }
  
      section header.image-wrapper,
      section .navbar {
        z-index: 2 !important;
      }
  
      section .navbar .hamburger,
      section .navbar [data-bs-toggle="offcanvas"],
      section .navbar .btn {
        pointer-events: none;
      }
  
      section .navbar .container {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    </style>
  </head>
  <body>
    <div class="content-wrapper" id="app">
<nav class="navbar navbar-expand-lg classic transparent navbar-light">
    <div class="container flex-lg-row flex-nowrap align-items-center">
      <div class="navbar-brand w-100">
        <a href="./index.html">
          <img src="https://www.epetstore.co.za/svg/epet-logo.svg" width="200px" srcset="./assets/img/logo@2x.png 2x" alt="" />
        </a>
      </div>
      <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div class="offcanvas-header d-lg-none">
          <a href="#"><img src="https://www.epetstore.co.za/svg/epet-logo.svg" srcset="./assets/img/logo-light@2x.png 2x" alt="" /></a>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="{{url('/products')}}">Products</a></li>
           
            
                <!--/.mega-menu-content-->
              </div>
           
          </ul>
          <!-- /.navbar-nav -->
          
      <!-- /.navbar-collapse -->
      <div class="navbar-other ms-lg-4">
        <ul class="navbar-nav flex-row align-items-center ms-auto">
         
          <li class="nav-item d-none d-md-block">
           
            <a href="{{url('/product-category')}}" class="btn btn-sm btn-primary rounded-pill" >Administration</a>
          </li>
          <li class="nav-item d-lg-none">
            <button class="hamburger offcanvas-nav-btn"><span></span></button>
          </li>
        </ul>
        <!-- /.navbar-nav -->
      </div>
      <!-- /.navbar-other -->
    </div>
    <!-- /.container -->
  </nav>
  <!-- /.navbar -->
  
  <!--/.modal -->

  
  <!-- /.offcanvas -->
  
    
    @yield('content')
    
    
