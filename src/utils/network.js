export const getAPIResource = (url) => {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                console.error('Could not fetch: ' + res.status);
                return false;
            }
            return res.json();
        })
        .catch(error => {
            console.error('Could not fetch: ' + error.message.toString());
            return false;
        });
}
