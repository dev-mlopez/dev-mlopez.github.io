const $btn = document.querySelector(".panelRating__form_btn"),
    $panelRating = document.querySelector(".panelRating"),
    $panelResult = document.querySelector(".panelResult"),
    $rating = document.querySelector(".panelResult__selected span"),
    $ratingLabel = document.querySelectorAll(".rating__label");

$btn.addEventListener("click", e => {
    $panelRating.classList.add("is-active");
    $panelResult.classList.remove("is-active");
})

$ratingLabel.forEach(btn => {
    btn.addEventListener("click", e => {
        $rating.textContent = btn.innerHTML;
    })
})