import {BASE_URL} from '$env/static/private';
import axios from "axios";
import type {Actions} from "@sveltejs/kit";

export const actions = {
    default: async ({cookies, request}) => {

        const token = cookies.get('token');
        if (!token) {
            return {success: false}
        }

        const data = await request.formData()
        const title = data.get('title')
        const date = data.get('date')
        const file = data.get('file') as File
        const desc = data.get('desc')

        const img = await file.arrayBuffer()
        console.log(img)

        const decoder = new TextDecoder("utf-8");
        const a = decoder.decode(new Uint8Array(img));

        const response = await axios.post(`${BASE_URL}/items/create?token=${token}&date=${date}&title=${title}&desc=${desc}&image=${a}`)
        if (response.status === 200) {
            return {success: true}
        }

        return {success: false}
    },


} satisfies Actions;


