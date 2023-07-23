import type { PageServerLoad } from './$types';
import { BASE_URL } from '$env/static/private';

export const load = (() => {
	return { baseUrl: BASE_URL };
}) satisfies PageServerLoad;

export const ssr = true;
