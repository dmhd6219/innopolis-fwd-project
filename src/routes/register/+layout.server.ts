import type {LayoutServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load = (
    ({cookies}) => {
        if (cookies.get('token')) {
            console.log('you have cookies')
            throw redirect(303, '/');
        }
        return {session: false}
    }
) satisfies LayoutServerLoad;

