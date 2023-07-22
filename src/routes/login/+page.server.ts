import {BASE_URL} from '$env/static/private';
import type {Actions} from "@sveltejs/kit";

import type {PageServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load = (
    ({cookies}) => {
        if (cookies.get('token')) {
            console.log('you have cookies')
            throw redirect(303, '/');
        }
        return {error : `You are not authorized`}
    }
) satisfies PageServerLoad;



export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')

        const response = await fetch(`${BASE_URL}/token/?email=${email}&password=${password}`, {
            method : "POST"
        });

        if (response.status === 200) {
            cookies.set('token', await response.json())
            return {success: true}
        }

        return {error : `Error on server side, ${response.status}`}
    },


} satisfies Actions;


export const ssr = true