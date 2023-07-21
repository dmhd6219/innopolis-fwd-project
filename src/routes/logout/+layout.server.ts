import type {LayoutServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load = (
    ({cookies}) => {
        if (!cookies.get('token')) {
            console.log('you have no cookies')
            throw redirect(303, '/');
        }
        return {session: true}
    }
) satisfies LayoutServerLoad;

