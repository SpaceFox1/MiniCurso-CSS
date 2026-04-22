import { page } from '$app/state';

export function getCurrStep() {
	return Number(page.url.searchParams.get('step')) || 0;
}