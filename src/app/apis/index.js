import 'whatwg-fetch';

const fetch = window.fetch;
const githubIssuesUrl = 'https://api.github.com/repos/kuitos/kuitos.github.io/issues';

export function getPosts({perPage = 5, page = 1}) {

	return fetch(`${githubIssuesUrl}?per_page=${perPage}&page=${page}`, {method: 'GET'});

}
