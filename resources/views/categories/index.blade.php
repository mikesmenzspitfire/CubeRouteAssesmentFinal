
@foreach ($categories as $category)
    <h1>{{ $category->name }}</h1>
    <p>{{ $category->description }}</p>
<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
  <img :src="" :alt="" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
</div>
<div class="mt-4 flex justify-between">
  <div>
    <h3 class="text-sm text-gray-700">
      <a :href="#">
        <span aria-hidden="false" class="absolute inset-0" />
        {{ $category->name }}
      </a>
    </h3>
    {{-- <p class="card-text">{{ $product->description }}</p> --}}
    <p class="mt-1 text-sm text-gray-500">{{ $category->name }}</p>
  </div>
  <p class="text-sm font-medium text-gray-900">{{ $category->name }}</p>
</div>
@endforeach