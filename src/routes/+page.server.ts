import type {PageServerLoad} from "./$types";
import {BASE_URL} from "$env/static/private";
import {format} from 'date-fns';

// getRandomDateInBetween('2021-01-01', '2021-01-30')
function getRandomDateInBetween(start: string, end: string) {
    const startDate = Date.parse(start);
    const endDate = Date.parse(end);

    return new Date(Math.floor(Math.random() * (endDate - startDate + 1) + startDate));
}

export const load = (
    async () => {
        const date = getRandomDateInBetween('2006-03-01', (new Date()).toString())

        const formattedDate = format(date, 'yyyy-MM-dd');
        const response = await fetch(`${BASE_URL}/items/${formattedDate}/exists`)

        if (await response.json()){
            return {url: `${BASE_URL}/items/${formattedDate}/photo`, formattedDate: formattedDate}
        }

        return {url: `https://www.hiroshimatsumoto.com/2009paintings/works/dec032009.jpg`, formattedDate: formattedDate}



    }
) satisfies PageServerLoad;

export const ssr = true
