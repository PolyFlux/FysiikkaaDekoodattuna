document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
