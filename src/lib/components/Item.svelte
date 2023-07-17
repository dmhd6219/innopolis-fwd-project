<script>
    import { format } from 'date-fns';
    import PaintingPhoto from '$lib/9_by_9_paintings/2023-7-14.jpeg';
  
    // Компонент для левой части страницы
    let painting = {
      date: new Date(2023, 7, 14),
      image: PaintingPhoto,
      collection: '9 by 9 paintings',
      materials: 'Oil on canvas',
      size: '9 cm by 9 cm',
      isPrivate: true
    };
  </script>
  
  <div class="flex">
    <div class="w-1/2 bg-base-200 flex flex-col items-center justify-center">
      <img src={painting.image} alt="painting" class="w-1/2 mx-auto mb-4 shadow-2xl" />
      <p class="text-xs text-gray-500">I appreciate your support. Thanks, Hiroshi.</p>
    </div>
    <div class="w-1/2 p-20">
      <a href="/paintings"> &lt; Back </a>
      <h2 class="text-3xl font-bold mt-24 mb-6">
        {format(painting.date, 'MMMM dd, yyyy')}
      </h2>
      <p class="text-s text-gray-500">
        Collection: {painting.collection}<br />
        Materials: {painting.materials}<br />
        Size: {painting.size}
      </p>
      <hr class="my-4"/>
      <a href="https://www.etsy.com/shop/hiroshimatsumoto" target="_blank">
        <button class="bg-black text-base-200 py-2 px-4 w-full mt-8 mb-16">Buy on Etsy Shop</button>
      </a>

      <!-- FEATURE: For admin -->
      <!-- <div class="flex justify-between">
        <button class="bg-sky-400 text-white py-2 px-4 mr-2 w-1/2">Edit</button>
        <button class="bg-red-400 text-white py-2 px-4 ml-2 w-1/2">Delete</button>
      </div> -->
    </div>
  </div>
  