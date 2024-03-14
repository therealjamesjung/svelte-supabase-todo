import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';

export async function load() {
	let { data } = await supabase.from('todos').select('*');

	return {
		todos: data ?? []
	};
}

export const actions = {
	delete: async ({ cookies, request }: { cookies: any; request: Request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const result = await supabase.from('todos').delete().eq('id', id).select();
		throw redirect(303, '/');
	}
};
