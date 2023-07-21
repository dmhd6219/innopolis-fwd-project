import {BASE_URL} from '$env/static/private';
import axios from "axios";
import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')
        const passwordAgain = data.get('password-again')

        if (password === passwordAgain) {
            const response = await axios.post(`${BASE_URL}/register?email=${email}&password=${password}`);
            if (response.status === 200) {
                throw redirect(303, '/login');
            }
        }


    },


} satisfies Actions;

export const ssr = true;
