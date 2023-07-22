import {redirect} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {BASE_URL} from "$env/static/private";

export const load = (async ({params, cookies}) => {
    console.log(params.painting_date)

    const response = await fetch(`${BASE_URL}/items/${params.painting_date}/exists`);

    if (await response.json() === "false") {
        throw redirect(307, '/paintings');
    }


    const token = cookies.get('token');
    const logged = !!token;

    return {
        date: new Date(params.painting_date),
        imageUrl: `${BASE_URL}/items/${params.painting_date}/photo`,
        logged : logged,
        token : token
    }
}) satisfies PageServerLoad;

export const ssr = true