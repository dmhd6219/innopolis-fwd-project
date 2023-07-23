export const getImageUrlFromDate: (date: Date) => string = (date) => {
	const monthNames = [
		'jan',
		'feb',
		'mar',
		'apr',
		'may',
		'june',
		'july',
		'aug',
		'sept',
		'oct',
		'nov',
		'dec'
	];

	const formattedDay = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

	return `https://www.hiroshimatsumoto.com/${date.getFullYear()}paintings/works/${
		monthNames[date.getMonth()]
	}${formattedDay}${date.getFullYear()}.jpg`;
};
