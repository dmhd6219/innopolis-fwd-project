import type {Actions} from "@sveltejs/kit";
import {BASE_URL} from "$env/static/private";

export const actions = {
    default: async ({cookies}) => {
        const token = (cookies.get('token') as string).toString()
        console.log(token)

        const formData = new FormData();
        formData.append("username", "Chris");

        const response = await fetch(`${BASE_URL}/debug-image-body`, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        console.log(response.json())
    },


} satisfies Actions;


export const ssr = true