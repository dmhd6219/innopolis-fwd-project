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
	const currentMonth = getMonth(currentDate);
	const currentYear = getYear(currentDate);
	const firstDayOfMonth = (getDay(startOfMonth(currentDate)) + 6) % 7;

	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

	let calendarDays: { date: number | null; isFuture: boolean; dayOfWeek?: string }[] = [];

	// Получение массива дней для текущего месяца
	function generateCalendarDays() {
		calendarDays = [];

		for (let i = 0; i < firstDayOfMonth; i++) {
			calendarDays.push({ date: null, isFuture: false });
		}

		for (let i = 1; i <= daysInMonth; i++) {
			const date = new Date(currentYear, currentMonth, i);
			const isFuture = isAfter(date, currentDate);
			const dayOfWeek = format(date, 'EEEE');
			calendarDays.push({ date: i, isFuture, dayOfWeek });
		}
	}

	onMount(generateCalendarDays);
</script>

<div class="flex flex-col items-center">
	<h1 class="text-2xl font-bold mt-4 mb-8">9 x 9 Paintings</h1>

	<div class="grid-container">
		{#each calendarDays as { date, isFuture, dayOfWeek }, i}
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

<style>
	.grid-container {
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
		width: 100%;
		height: 100%;
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
		transform: translate(-50%, -50%);
		font-size: 0.875rem;
		font-weight: bold;
	}
	.white-square {
		width: 4rem;
		height: 4rem;
		background-color: #ffffff;
	}
</style>
