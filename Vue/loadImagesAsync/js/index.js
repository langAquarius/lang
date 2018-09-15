const ajax = (type, url) => {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(type, url);
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;
            if (xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                let error = "source can not find!"
                reject(error);
            }
        }
        xhr.send();
    });
    return promise;
}

let loadImageAsync = (url) => {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function() {
            resolve(image);
        }
        image.onerror = function() {
            let error = new Error("Can not find source" + url);
            reject(error)
        }
        image.src = url;
    });
}