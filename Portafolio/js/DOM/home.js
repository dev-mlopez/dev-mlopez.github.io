const d = document;

export default function changeSubtitle(id) {
    const $text = d.getElementById(id),
        textContent = [
            "Egresado en Ingeniería en Informática.",
            "Desarrollador Front-End."
        ];

    let i = 0
    let textTempo = setInterval(() => {
        $text.innerHTML = textContent[i];
        if(i === 0) i++;
        else if (i === 1) i = 0;
    },5000);
}