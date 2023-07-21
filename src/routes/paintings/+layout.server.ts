import type {LayoutServerLoad} from "./$types";
import {BASE_URL} from "$env/static/private";

export const load = (
    () => {
        return {baseUrl: BASE_URL}
    }
) satisfies LayoutServerLoad;
