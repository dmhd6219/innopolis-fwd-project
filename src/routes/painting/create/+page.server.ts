import { BASE_URL } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (({ cookies }) => {
	if (!cookies.get('token')) {
		console.log('you have no cookies');
		throw redirect(303, '/');
	}
	return { session: false, error: undefined };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request }) => {
		const token = cookies.get('token');
		if (!token) {
			return { error: `You are not authorized` };
		}

		const data = await request.formData();

		const response = await fetch(`${BASE_URL}/items/create?token=${token}`, {
			method: 'POST',
			body: data
		});

		if (response.status === 200) {
			throw redirect(303, `/painting/${data.get('date')}`);
		}

		return { error: `Error on server side, ${response.status}` };
	}
} satisfies Actions;

export const ssr = true;
