import type {Actions} from "@sveltejs/kit";
import axios from "axios";
import {BASE_URL} from "$env/static/private";

export const actions = {
    default: async ({cookies}) => {
        const token = (cookies.get('token') as string).toString()
        console.log(token)

        const response = await axios.post(`${BASE_URL}/debug-token?token=${token}&message=a`)
        console.log(response.data)
    },


} satisfies Actions;


