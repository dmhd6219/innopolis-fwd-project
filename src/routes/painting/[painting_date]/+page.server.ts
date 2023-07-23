import {redirect} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {BASE_URL} from "$env/static/private";
import {getImageUrlFromDate} from "$lib/getImageUrl";

export const load = (async ({params, cookies}) => {
    console.log(params.painting_date)

    const response = await fetch(`${BASE_URL}/items/${params.painting_date}`);
    const json = await response.json();

    if (!json) {
        throw redirect(307, '/paintings');
    }


    const token = cookies.get('token');
    const logged = !!token;

    return {
        date: new Date(params.painting_date),
        imageUrl: !json.original ? `${BASE_URL}/items/${params.painting_date}/photo` : getImageUrlFromDate(new Date(params.painting_date)),
        logged : logged,
        token : token,
        original : json.original,
        title : json.title,
        description : json.description
    }
}) satisfies PageServerLoad;

export const ssr = true