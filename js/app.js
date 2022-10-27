const fetchApp = (province) => {

    return fetch(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${province}`)
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  const $form = document.querySelector('#form');
  const $input = document.querySelector('#input');
  const $submit = document.querySelector('#submit');
  const $results = document.querySelector('#results');

  $form.addEventListener('submit', async function (event) { 


    event.preventDefault();//evita que se recargue la pagina

    const { value } = $input;

    if (!value) return

    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');

    const infoApi = await fetchApp(value);

    if (infoApi) {
      $results.innerHTML = JSON.stringify(infoApi, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy');
  })