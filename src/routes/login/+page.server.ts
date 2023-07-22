import {BASE_URL} from '$env/static/private';
import axios from "axios";
import type {Actions} from "@sveltejs/kit";

import type {PageServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

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
    default: async ({cookies, request}) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')

        const response = await axios.post(`${BASE_URL}/token/?email=${email}&password=${password}`);
        console.log(response.status)
        console.log(response.data)
        if (response.status === 200) {
            cookies.set('token', response.data)
            return {success: true}
        }

        return {success: false}
    },


} satisfies Actions;


export const ssr = true