<script>
    import { format } from 'date-fns';
    import imgTest from '$lib/9_by_9_paintings/2023-7-14.jpeg';
  
    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');
    // const imageUrl = `$lib/9_by_9_paintings/${formattedDate}.jpg`;
  </script>
  
  <div class="flex flex-col items-center justify-center mb-10 h-screen">
    <img class="w-1/2 md:w-3/4 lg:w-1/2 xl:w-1/3 mb-4" src={imgTest} alt="Today's painting" />
    <div class="text-xl font-bold mb-4">Original Abstract Oil Paintings by Hiroshi Matsumoto</div>
    <button class="btn"><a href="./paintings">Explore</a></button>
  </div>
  