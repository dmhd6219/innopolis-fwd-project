import { BASE_URL } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
	if (!cookies.get('token')) {
		console.log('you have no cookies');
		throw redirect(303, '/paintings');
	}

	const response = await fetch(`${BASE_URL}/items/${params.painting_date}`);
	const json = await response.json();

	if (!json || !(response.status === 200)) {
		return { error: `Error on server side, ${response.status}` };
	}
	console.log(json);
	return {
		success: true,
		formattedDate: params.painting_date,
		title: json.title,
		desc: json.description
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ params, cookies, request }) => {
		const token = cookies.get('token');
		if (!token) {
			return { error: `You are not authorized` };
		}

		const data = await request.formData();

		const response = await fetch(`${BASE_URL}/items/${params.painting_date}/edit?token=${token}`, {
			method: 'POST',
			body: data
		});

		if (response.status === 200) {
			throw redirect(303, `/painting/${params.painting_date}`);
		}

		return { error: `Error on server side, ${response.status}` };
	}
} satisfies Actions;

export const ssr = true;
