<script lang="ts">
	import { onMount } from 'svelte';
	import {
		getMonth,
		getYear,
		startOfMonth,
		getDay,
		format,
		isAfter,
		isBefore,
		isToday
	} from 'date-fns';
	import imgTest from '$lib/9_by_9_paintings/2023-7-1.png';

	const currentDate = new Date();
	let selectedMonth = getMonth(currentDate);
	let selectedYear = getYear(currentDate);
	const currentYear = getYear(currentDate);
	const months = Array.from({ length: 12 }, (_, i) => i); // Create an array of month numbers from 0 to 11
	const years = Array.from({ length: currentYear - 2005 }, (_, i) => currentYear - i); // Create an array of years from 2006 to currentYear

	let calendarDays: { date: number | null; isFuture: boolean; dayOfWeek?: string }[] = [];

	// Generate an array of days for the specified month
	function generateCalendarDays(year: number, month: number) {
		const firstDayOfMonth = (getDay(startOfMonth(new Date(year, month, 1))) + 6) % 7;
		const daysInMonth = new Date(year, month + 1, 0).getDate();

		const calendarDays: { date: number | null; isFuture: boolean; dayOfWeek?: string }[] = [];

		for (let i = 0; i < firstDayOfMonth; i++) {
			calendarDays.push({ date: null, isFuture: false });
		}

		for (let i = 1; i <= daysInMonth; i++) {
			const date = new Date(year, month, i);
			const isFuture = isAfter(date, currentDate);
			const dayOfWeek = format(date, 'EEEE');
			calendarDays.push({ date: i, isFuture, dayOfWeek });
		}

		return calendarDays;
	}

	// Update the calendar when a new month or year is selected
	function updateCalendar() {
		calendarDays = generateCalendarDays(selectedYear, selectedMonth);
	}

	// Update the selected year when transitioning through January
	function updateYearOnJanuaryChange() {
		if (selectedMonth === 0) {
			selectedYear--;
		} else if (selectedMonth === 11) {
			selectedYear++;
		}
	}

	onMount(updateCalendar);
</script>

<div class="flex flex-col items-center">
	<h1 class="text-2xl font-bold mt-12 mb-8">9 x 9 Paintings</h1>

	<div class="calendar-container">
		<div class="grid-container">
			<div class="month-year-selector">
				<button
					class="arrow-button"
					on:click={() => {
						selectedMonth = (selectedMonth - 1 + 12) % 12;
						updateYearOnJanuaryChange();
						updateCalendar();
					}}
				>
					&lt;
				</button>
				<div class="month-selector">
					<select
						class="select select-bordered"
						bind:value={selectedMonth}
						on:change={() => {
							updateYearOnJanuaryChange();
							updateCalendar();
						}}
					>
						{#each months as month}
							<option value={month}>{format(new Date(selectedYear, month, 1), 'MMMM')}</option>
						{/each}
					</select>
				</div>
				<div class="year-selector">
					<select
						class="select select-bordered"
						bind:value={selectedYear}
						on:change={() => {
							updateCalendar();
						}}
					>
						{#each years as year}
							<option value={year}>{year}</option>
						{/each}
					</select>
				</div>
				<button
					class="arrow-button"
					on:click={() => {
						selectedMonth = (selectedMonth + 1) % 12;
						updateYearOnJanuaryChange();
						updateCalendar();
					}}
				>
					&gt;
				</button>
			</div>
			<div class="grid">
				{#each calendarDays as { date, isFuture, dayOfWeek }, j}
					{#if date !== null}
						<div class="grid-item">
							{#if isFuture}
								<div class="white-square" />
								<p class="day-number">{date}</p>
							{:else}
								<img src={imgTest} alt={`Day ${date}`} />
								<p class="day-number">{date}</p>
							{/if}
						</div>
					{:else}
						<div class="empty-item" />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.calendar-container {
		height: 80vh; /* Set the desired height for the calendar container */
		overflow-y: auto; /* Enable vertical scrolling if the content exceeds the height */
	}

	.grid-container {
		display: grid;
		gap: 16px;
	}

	.month-year-selector {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.month-selector {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.arrow-button {
		border: none;
		background-color: transparent;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.year-selector {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(7, minmax(0, 1fr));
		gap: 8px;
	}

	.grid-item {
		position: relative;
		overflow: hidden;
		padding-bottom: 0;
		background-color: #ffffff;
	}

	.grid-item img {
		display: block;
		width: 4rem;
		height: 4rem;
		object-fit: cover;
	}

	.empty-item {
		padding-bottom: 100%;
		background-color: #ffffff;
	}

	.day-number {
		position: absolute;
		top: 50%;
		left: 50%;
		/* transform: translate(-50%, -50%); */
		font-size: 0.875rem;
		font-weight: bold;
	}

	.white-square {
		width: 4rem;
		height: 4rem;
		background-color: #ffffff;
	}
</style>
