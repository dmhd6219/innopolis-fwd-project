import type {PageServerLoad} from "./$types";
import { redirect} from "@sveltejs/kit";
import type {Actions} from "@sveltejs/kit";
import axios from "axios";
import {BASE_URL} from "$env/static/private";
export const load = (
    ({params, cookies}) => {
        if (!cookies.get('token')) {
            console.log('you have no cookies')
            throw redirect(303, '/paintings');
        }
        console.log(params.painting_date)
        return {success : true, formattedDate : params.painting_date}
    }
) satisfies PageServerLoad;


export const actions = {
    default: async ({params, cookies}) => {
        const token = cookies.get('token');
        if (!token) {
            return {success: false}
        }

        await axios.delete(`${BASE_URL}/items/${params.painting_date}/delete?token=${token}`)
        return {success: true}
    },


} satisfies Actions;


