<script lang="ts">
    import {onMount} from 'svelte';
    import {getMonth, getYear, startOfMonth, getDay, format, isAfter} from 'date-fns';

    export let data;

    const currentDate = new Date();
    let selectedMonth = getMonth(currentDate);
    let selectedYear = getYear(currentDate);
    const currentYear = getYear(currentDate);
    const months = Array.from({length: 12}, (_, i) => i); // Create an array of month numbers from 0 to 11
    const years = Array.from({length: currentYear - 2005}, (_, i) => currentYear - i); // Create an array of years from 2006 to currentYear

    let calendarDays: {
        date: number | null;
        formattedDate?: string;
        isFuture: boolean;
        dayOfWeek?: string;
        imageExists?: string;
        imageUrl?: string
    }[] = [];

    // Generate an array of days for the specified month
    async function generateCalendarDays(year: number, month: number) {
        const firstDayOfMonth = (getDay(startOfMonth(new Date(year, month, 1))) + 6) % 7;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const calendarDays: { date: number | null; isFuture: boolean; dayOfWeek?: string }[] = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push({date: null, isFuture: false});
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            const isFuture = isAfter(date, currentDate);
            const dayOfWeek = format(date, 'EEEE');

            let currentDay = date.getDate();
            let currentMonth = getMonth(date) + 1;
            let currentYear = getYear(date);

            const formattedDate = `${currentYear}-${currentMonth > 9 ? currentMonth : "0"
                + currentMonth}-${currentDay > 9 ? currentDay : "0" + currentDay}`


            let imageExists = false;
            const response = await fetch(`${data.baseUrl}/items/${formattedDate}/exists`)
            imageExists = await response.json()

            let imagePath;
            if (imageExists) {
                imagePath = `${data.baseUrl}/items/${formattedDate}/photo`
            }

            calendarDays.push({
                date: i,
                formattedDate : formattedDate,
                isFuture: isFuture,
                dayOfWeek: dayOfWeek,
                imageExists: imageExists,
                imageUrl: imagePath
            });
        }

        return calendarDays;
    }

    // Update the calendar when a new month or year is selected
    async function updateCalendar() {
        calendarDays = await generateCalendarDays(selectedYear, selectedMonth);
    }

    // Update the selected month and year when transitioning through the previous month
    async function previousMonth() {
        if (selectedMonth === 0) {
            if (selectedYear === years[years.length - 1]) {
                selectedYear = years[0];
            } else {
                selectedYear--;
            }
            selectedMonth = 11;
        } else {
            selectedMonth--;
        }
        await updateCalendar();
    }

    // Update the selected month and year when transitioning through the next month
    async function nextMonth() {
        if (selectedMonth === 11) {
            if (selectedYear === years[0]) {
                selectedYear = years[years.length - 1];
            } else {
                selectedYear++;
            }
            selectedMonth = 0;
        } else {
            selectedMonth++;
        }
        await updateCalendar();
    }

    onMount(updateCalendar);
</script>

<section class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mt-12 mb-8">9 x 9 Paintings</h1>

    <div class="bg-white rounded-lg shadow-m mb-20">
        <div class="flex items-center justify-between mb-8">
            <button
                    class="px-2 py-1 text-2xl text-gray-600 rounded-full hover:bg-gray-200"
                    on:click={previousMonth}
            >
                &lt;
            </button>
            <select
                    class="w-32 p-1 text-gray-600 rounded-lg"
                    bind:value={selectedMonth}
                    on:change={() => {
					updateCalendar();
				}}
            >
                {#each months as month}
                    <option value={month}>{format(new Date(selectedYear, month, 1), 'MMMM')}</option>
                {/each}
            </select>
            <select
                    class="w-24 p-1 text-gray-600 rounded-lg"
                    bind:value={selectedYear}
                    on:change={() => {
					updateCalendar();
				}}
            >
                {#each years as year}
                    <option value={year}>{year}</option>
                {/each}
            </select>
            <button
                    class="px-2 py-1 text-2xl text-gray-600 rounded-full hover:bg-gray-200"
                    on:click={nextMonth}
            >
                &gt;
            </button>
        </div>
        <div class="grid grid-cols-7 gap-0.5">
            {#each calendarDays as {date, formattedDate, isFuture, dayOfWeek, imageExists, imageUrl}, j}
                {#if date === null || !imageExists}
                    <div class="bg-white">
                        <div class="w-10 h-10 bg-white"/>
                    </div>
                {:else if isFuture || !imageExists}
                    <div class="bg-white flex items-center justify-center w-10 h-10 md:w-24 md:h-24">
                        <p>{date}</p>
                    </div>
                {:else}
                    <a href="./painting/{formattedDate}" class="bg-white">
                        <img src={imageUrl} alt={`Day ${date}`} class="w-10 h-10 md:w-24 md:h-24 mx-auto"/>
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</section>
