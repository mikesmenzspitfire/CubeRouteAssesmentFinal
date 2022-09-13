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
  {{-- -------------------------------------------------------------------------------------- --}}


<body>
    <div class="content-wrapper" id="app">
        <nav class="navbar navbar-expand-lg classic transparent navbar-light">
  <div class="container flex-lg-row flex-nowrap align-items-center">
    <div class="navbar-brand w-100">
      <a href="{{ url('/') }}">
        <img src="./assets/img/logo.png" srcset="./assets/img/logo@2x.png 2x" alt="" />
      </a>
    </div>
    <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
      <div class="offcanvas-header d-lg-none">
        <a href="{{ url('/') }}"><img src="./assets/img/logo-light.png" srcset="./assets/img/logo-light@2x.png 2x" alt="" /></a>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="dropdown-item" href="#">Action</a></li>
              <li class="dropdown dropdown-submenu dropend"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
                <ul class="dropdown-menu">
                  <li class="dropdown dropdown-submenu dropend"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item"><a class="dropdown-item" href="#">Action</a></li>
                      <li class="nav-item"><a class="dropdown-item" href="#">Another Action</a></li>
                    </ul>
                  </li>
                  <li class="nav-item"><a class="dropdown-item" href="#">Action</a></li>
                  <li class="nav-item"><a class="dropdown-item" href="#">Another Action</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="dropdown-item" href="#">Another Action</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown dropdown-mega"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mega Menu</a>
            <ul class="dropdown-menu mega-menu">
              <li class="mega-menu-content">
                <div class="row gx-0 gx-lg-3">
                  <div class="col-lg-6">
                    <h6 class="dropdown-header">One</h6>
                    <div class="row gx-0">
                      <div class="col-lg-6">
                        <ul class="list-unstyled">
                          <li><a class="dropdown-item" href="#">Link</a></li>
                          <li><a class="dropdown-item" href="#">Link</a></li>
                          <li><a class="dropdown-item" href="#">Link</a></li>
                        </ul>
                      </div>
                      <!--/column -->
                      <div class="col-lg-6">
                        <ul class="list-unstyled">
                          <li><a class="dropdown-item" href="#">Link</a></li>
                          <li><a class="dropdown-item" href="#">Link</a></li>
                          <li><a class="dropdown-item" href="#">Link</a></li>
                        </ul>
                      </div>
                      <!--/column -->
                    </div>
                    <!--/.row -->
                  </div>
                  <!--/column -->
                  <div class="col-lg-3">
                    <h6 class="dropdown-header">Two</h6>
                    <ul class="list-unstyled">
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                    </ul>
                  </div>
                  <!--/column -->
                  <div class="col-lg-3">
                    <h6 class="dropdown-header">Three</h6>
                    <ul class="list-unstyled">
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                    </ul>
                  </div>
                  <!--/column -->
                </div>
                <!--/.row -->
              </li>
              <!--/.mega-menu-content-->
            </ul>
            <!--/.dropdown-menu -->
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown Large</a>
            <div class="dropdown-menu dropdown-lg">
              <div class="dropdown-lg-content">
                <div>
                  <h6 class="dropdown-header">One</h6>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Link</a></li>
                    <li><a class="dropdown-item" href="#">Link</a></li>
                    <li><a class="dropdown-item" href="#">Another Link</a></li>
                  </ul>
                </div>
                <!-- /.column -->
                <div>
                  <h6 class="dropdown-header">Two</h6>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Link</a></li>
                    <li><a class="dropdown-item" href="#">Link</a></li>
                    <li><a class="dropdown-item" href="#">Another Link</a></li>
                  </ul>
                </div>
                <!-- /.column -->
              </div>
              <!-- /auto-column -->
            </div>
          </li>
        </ul>
        <!-- /.navbar-nav -->
        <div class="d-lg-none mt-auto pt-6 pb-6 order-4">
          <a href="mailto:first.last@email.com" class="link-inverse">info@email.com</a>
          <br /> 00 (123) 456 78 90 <br />
          <nav class="nav social social-white mt-4">
            <a href="#"><i class="uil uil-twitter"></i></a>
            <a href="#"><i class="uil uil-facebook-f"></i></a>
            <a href="#"><i class="uil uil-dribbble"></i></a>
            <a href="#"><i class="uil uil-instagram"></i></a>
            <a href="#"><i class="uil uil-youtube"></i></a>
          </nav>
          <!-- /.social -->
        </div>
        <!-- /offcanvas-nav-other -->
      </div>
      <!-- /.offcanvas-body -->
    </div>
    <!-- /.navbar-collapse -->
    <div class="navbar-other ms-lg-4">
      <ul class="navbar-nav flex-row align-items-center ms-auto">
        <li class="nav-item"><a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info"><i class="uil uil-info-circle"></i></a></li>
        {{--  --}}
        <!-- Authentication Links -->
        @guest
        <li class="nav-item d-none d-md-block">
            <a href="{{ route('login') }}" class="btn btn-sm btn-primary rounded-pill" data-bs-target="#modal-signin" data-bs-toggle="modal" data-bs-target="trueLink">{{ __('Login') }}</a>
          </li>
        
        @if (Route::has('register'))
        <li class="nav-item d-none d-md-block">
            <a href="{{ route('register') }}" class="btn btn-sm btn-primary rounded-pill" data-bs-target="#modal-signup" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="trueLink">{{ __('Register') }}</a>
          </li>
            
        @endif
    @else
        <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {{ Auth::user()->name }}
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{ route('logout') }}"
                   onclick="event.preventDefault();
                                 document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </div>
        </li>
    @endguest
    {{--  --}}
        
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
<div class="modal fade" id="modal-signin" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content text-center">
      <div class="modal-body">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <h2 class="mb-3 text-start">Welcome Back , </h2>
        <p class="lead mb-6 text-start">Fill your email and password to sign in.</p>
        <form class="text-start mb-3">
          <div class="form-floating mb-4">
            <input type="email" class="form-control" placeholder="Email" id="loginEmail">
            <label for="loginEmail">Email</label>
          </div>
          <div class="form-floating password-field mb-4">
            <input type="password" class="form-control" placeholder="Password" id="loginPassword">
            <span class="password-toggle"><i class="uil uil-eye"></i></span>
            <label for="loginPassword">Password</label>
          </div>
          <a class="btn btn-primary rounded-pill btn-login w-100 mb-2">Sign In</a>
        </form>
        <!-- /form -->
        <p class="mb-1"><a href="#" class="hover">Forgot Password?</a></p>
        <p class="mb-0">Don't have an account? <a href="#" data-bs-target="#modal-signup" data-bs-toggle="modal" data-bs-dismiss="modal" class="hover">Sign up</a></p>
        <div class="divider-icon my-4">or</div>
        
      </div>
      <!--/.modal-content -->
    </div>
    <!--/.modal-body -->
  </div>
  <!--/.modal-dialog -->
</div>
<!--/.modal -->
<div class="modal fade" id="modal-signup" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content text-center">
      <div class="modal-body">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <h2 class="mb-3 text-start">Sign up to Sandbox</h2>
        <p class="lead mb-6 text-start">Registration takes less than a minute.</p>
        <form class="text-start mb-3">
          
          <div class="form-floating mb-4">
            <input type="email" class="form-control" placeholder="Email" id="loginEmail">
            <label for="loginEmail">Email</label>
          </div>
          <div class="form-floating password-field mb-4">
            <input type="password" class="form-control" placeholder="Password" id="loginPassword">
            <span class="password-toggle"><i class="uil uil-eye"></i></span>
            <label for="loginPassword">Password</label>
          </div>
          <div class="form-floating password-field mb-4">
            <input type="password" class="form-control" placeholder="Confirm Password" id="loginPasswordConfirm">
            <span class="password-toggle"><i class="uil uil-eye"></i></span>
            <label for="loginPasswordConfirm">Confirm Password</label>
          </div>
          <a class="btn btn-primary rounded-pill btn-login w-100 mb-2">Sign Up</a>
        </form>
        <!-- /form -->
        <p class="mb-0">Already have an account? <a href="#" data-bs-target="#modal-signin" data-bs-toggle="modal" data-bs-dismiss="modal" class="hover">Sign in</a></p>
        
        
        <!--/.social -->
      </div>
      <!--/.modal-content -->
    </div>
    <!--/.modal-body -->
  </div>
  <!--/.modal-dialog -->
</div>
<!--/.modal -->
<div class="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
  <div class="offcanvas-header">
    <a href="./index.html"><img src="./assets/img/logo-light.png" srcset="./assets/img/logo-light@2x.png 2x" alt="" /></a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
  </div>
  <!-- /.offcanvas-body -->
</div>
<!-- /.offcanvas -->





        {{-- ________________________________________________________ --}}
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            
            @yield('content')
            
        </main>
    
      <script src="{{ asset('js/plugins.js') }}"></script>
      <script src="{{ asset('js/theme.js') }}"></script>
</body>

</html>
