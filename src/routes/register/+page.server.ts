import {BASE_URL} from '$env/static/private';
import axios from "axios";
import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const actions = {
    default: async ({cookies, request}) => {
        console.log('in register action')
        console.log((await axios.post(`${BASE_URL}/debug?message=in_action!!`)).data)
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')
        const passwordAgain = data.get('password-again')

        if (password === passwordAgain) {
            const response = await axios.post(`${BASE_URL}/register?email=${email}&password=${password}`);
            console.log(response.status)
            console.log(response.data)
            if (response.status === 200) {
                cookies.set('token', response.data, {maxAge: 60 * 24 * 7})
                return {success: true}
            }
        }

        throw redirect(303, '/login');
    },


} satisfies Actions;

export const ssr = true;
