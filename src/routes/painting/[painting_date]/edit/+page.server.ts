import {BASE_URL} from '$env/static/private';
import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";


export const actions = {
    default: async ({params, cookies, request}) => {

        const token = cookies.get('token');
        if (!token) {
            return {error : `You are not authorized`}
        }

        const data = await request.formData()

        const response = await fetch(`${BASE_URL}/items/${params.painting_date}/edit?token=${token}`, {
            method : "POST",
            body : data
        })

        if (response.status === 200) {
            throw redirect(303, `/painting/${params.painting_date}`);
        }

        return {error : `Error on server side, ${response.status}`}
    },


} satisfies Actions;

export const ssr = true

