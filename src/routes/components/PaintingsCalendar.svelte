<script lang="ts">
    import { onMount } from "svelte";
    import { getMonth, getYear, startOfMonth, getDay, format } from "date-fns";
    import imgTest from '$lib/9_by_9_paintings/2023-7-1.png'
  
    const currentDate = new Date();
    const currentMonth = getMonth(currentDate);
    const currentYear = getYear(currentDate);
    const firstDayOfMonth = (getDay(startOfMonth(currentDate)) + 6) % 7;
  
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    let calendarDays: { date: number | null, imagePath?: string, dayOfWeek?: string }[] = [];
  
    // Получение массива дней для текущего месяца
    function generateCalendarDays() {
      calendarDays = [];
  
      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push({ date: null });
      }
  
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        // const imagePath = `$lib/9_by_9_paintings/${currentYear}-${currentMonth + 1}-${i}.png`;
        const imagePath = imgTest;
        const dayOfWeek = format(date, 'EEEE');
        calendarDays.push({ date: i, imagePath, dayOfWeek });
      }
    }
  
    onMount(generateCalendarDays);
  </script>
  
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));
      gap: 8px;
    }
  
    .grid-item {
      position: relative;
      overflow: hidden;
      padding-bottom: 100%;
    }
  
    .grid-item img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
  
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mt-4 mb-8">9 x 9 Paintings</h1>
    
    <div class="grid-container">
      {#each calendarDays as { date, imagePath, dayOfWeek }, i}
        <div class="w-full aspect-w-1 aspect-h-1">
          {#if date !== null}
            <img src={imagePath} alt={`Day ${date}`} />
            <p class="mt-2 text-center font-semibold">{dayOfWeek}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  