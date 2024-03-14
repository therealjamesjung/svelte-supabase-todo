import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ cookies, request }: { cookies: any; request: Request }) => {
		const formData = await request.formData();
		await supabase.from('todos').insert([
			{
				title: formData.get('title'),
				content: formData.get('content'),
				user_id: 1
			}
		]);

		throw redirect(303, '/');
	}
};
