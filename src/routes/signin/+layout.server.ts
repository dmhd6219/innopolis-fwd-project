import type {LayoutServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load = (
    ({cookies}) => {
        if (cookies.get('token')) {
            throw redirect(307, '/me');
        }
        throw redirect(307, '/login');
    }
) satisfies LayoutServerLoad;

