import type { Actions } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (({ cookies }) => {
	if (!cookies.get('token')) {
		console.log('you have no cookies');
		throw redirect(303, '/');
	}
	return { session: true, error: undefined };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies }) => {
		if (cookies.get('token')) {
			cookies.delete('token');
		} else {
			return { error: `You are not authorized` };
		}

		return { success: true, error: undefined };
	}
} satisfies Actions;

export const ssr = true;
