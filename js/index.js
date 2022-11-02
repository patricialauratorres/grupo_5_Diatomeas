const PRODUCT_CARD = document.querySelectorAll('.opciones')

PRODUCT_CARD.forEach((card) => {
    card.addEventListener('click', (e) => {
        const CARD_ID = card.id
        const URL_ID = `introduccion.html#${CARD_ID}`
        window.location.href = URL_ID
    })
});

const RESULTADOS2 = document.querySelectorAll('.opciones2')
RESULTADOS2.forEach((card) => {
    card.addEventListener('click', (e) => {
        const CARD_ID = card.id
        const URL_ID = `res_y_disc.html#${CARD_ID}`
        window.location.href = URL_ID
    })
});
const RESULTADOS3 = document.querySelectorAll('.opciones3')
RESULTADOS3.forEach((card) => {
    card.addEventListener('click', (e) => {
        const CARD_ID = card.id
        const URL_ID = `mat_y_metodos.html#${CARD_ID}`
        window.location.href = URL_ID
    })
});
const RESULTADOS4 = document.querySelectorAll('.opciones4')
RESULTADOS4.forEach((card) => {
    card.addEventListener('click', (e) => {
        const CARD_ID = card.id
        const URL_ID = `conclusiones.html#${CARD_ID}`
        window.location.href = URL_ID
    })
});