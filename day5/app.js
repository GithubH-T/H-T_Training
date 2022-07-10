function apply() {
    const payload = {
        albumId: document.getElementById('albumId').value,
        id:document.getElementById('id').value,
        title:document.getElementById("title").value,
        url: document.getElementById('url').value,
        thumbnailUrl: document.getElementById('thumbnailUrl').value
    }
    fetch("http://localhost:3000/Album", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json'
        }
    });
}

(function () {//IIFE 

    const promise = fetch("http://localhost:3000/Album");
    promise.then(function (response) {
        console.log(response);
        const body = response.json();
        body.then(function (apply) {
            const list = document.getElementById("id");
            console.log(Album);
            Album.forEach(apply => {
                const row = document.createElement('li');
                row.textContent = Album.id;
                list.appendChild(row);
            });
        })

    })
})();
    