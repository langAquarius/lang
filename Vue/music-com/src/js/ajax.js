let ajax = (url, type = "GET") => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(type, url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject('404');
            }
        }
        xhr.send(null);
    });
    return promise;
}
export default ajax;