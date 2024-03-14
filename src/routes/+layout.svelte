<h2>
	<a href="/">목록</a>
	<a href="/new">추가</a>
</h2>

<slot />

<style>
	@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
	:global(:root) {
		font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable',
			Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji',
			'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
		color: white;
		background-color: #1e1e1e;
	}

	:global(a, a:visited, a:hover, a:active) {
		color: inherit;
	}

	:global(input) {
		background-color: #292929;
		color: white;
		border: 2px solid #363636;
		border-radius: 4px;
		padding: 10px 16px;
		outline: none;
	}
</style>
