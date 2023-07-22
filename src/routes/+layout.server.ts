import type {LayoutServerLoad} from "./$types";
import {BASE_URL} from "$env/static/private";
import axios from "axios";
import { format } from 'date-fns';

// getRandomDateInBetween('2021-01-01', '2021-01-30')
function getRandomDateInBetween(start: string, end: string) {
    const startDate = Date.parse(start);
    const endDate = Date.parse(end);

    return new Date(Math.floor(Math.random() * (endDate - startDate + 1) + startDate));
}

export const load = (
    async () => {
        const date = getRandomDateInBetween('2006-03-01', (new Date()).toString())
        const result = false;

        while (!result) {
            const formattedDate = format(date, 'yyyy-MM-dd');

            const response = await axios.get(`${BASE_URL}/items/${formattedDate}/exists`)

            if (response.data === true) {
                return {url: `${BASE_URL}/items/${formattedDate}/photo`}
            }
        }


    }
) satisfies LayoutServerLoad;


