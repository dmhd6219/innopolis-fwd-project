import {BASE_URL} from '$env/static/private';
import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

import type {PageServerLoad} from "./$types";

export const load = (
    ({cookies}) => {
        if (cookies.get('token')) {
            console.log('you have cookies')
            throw redirect(303, '/');
        }
        return {session: false}
    }
) satisfies PageServerLoad;



export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')
        const passwordAgain = data.get('password-again')

        if (password === passwordAgain) {
            const response = await fetch(`${BASE_URL}/register?email=${email}&password=${password}`, {
                method : "POST"
            });
            if (response.status === 200) {
                throw redirect(303, '/login');
            }
        }


    },


} satisfies Actions;

export const ssr = true;
