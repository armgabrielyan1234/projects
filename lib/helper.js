function loading(param) {
    if (param === "true") {
        loadingContainer.style.display = "flex";
    }
    if (param === "false") {
        loadingContainer.style.display = "none";
    }
}