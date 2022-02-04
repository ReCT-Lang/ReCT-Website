axios.get("./static/includes/header.html")
    .then((response) => {
        document.querySelector("header").innerHTML = response.data;
        headerLoaded();
    })
    .catch((err) => {

    });

axios.get("./static/includes/footer.html")
    .then((response) => {
        document.querySelector("footer").innerHTML = response.data;
    })
    .catch((err) => {

    });