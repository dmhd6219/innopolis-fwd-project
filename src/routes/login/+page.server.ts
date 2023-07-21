import {BASE_URL} from '$env/static/private';
import axios from "axios";
import type {Actions} from "@sveltejs/kit";

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


