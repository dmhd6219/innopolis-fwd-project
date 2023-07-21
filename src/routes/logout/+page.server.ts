import type {Actions} from "@sveltejs/kit";

export const actions = {
    default: async ({cookies}) => {
        if (cookies.get('token')) {
            cookies.delete('token')
        }

        return {success: true}
    },


} satisfies Actions;


