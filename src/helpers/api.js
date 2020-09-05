export const getData = url => {
	return fetch(url).then(response => {
		return response.json();
	});
}