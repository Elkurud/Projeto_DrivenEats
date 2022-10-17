
    let contador = 0

function select (seletor) {

    contador++

    const previous = document.querySelector('.selecionado');

    if ( previous !== null){
        previous.classList.add('escondido');
        previous.classList.remove('selecionado');
        contador = contador - 1
    }

    const element = document.querySelector(seletor);

    element.classList.toggle('escondido');
    element.classList.toggle('selecionado');

    if (contador === 3) {
        
        const buttom3 = document.querySelector('.buttom2')

        buttom3.classList.remove('escondido');

    }

}

function select2 (seletor2) {

    contador++

    const previous2 = document.querySelector('.selecionado2');

    if ( previous2 !== null){
        previous2.classList.add('escondido');
        previous2.classList.remove('selecionado2');
        contador = contador - 1
    }

    const element = document.querySelector(seletor2);

    element.classList.toggle('escondido');
    element.classList.toggle('selecionado2');

    if (contador === 3) {
        
        const buttom3 = document.querySelector('.buttom2')

        buttom3.classList.remove('escondido');

    }
}

function select3 (seletor3) {

    contador++

    const previous3 = document.querySelector('.selecionado3');

    if ( previous3 !== null){
        previous3.classList.add('escondido');
        previous3.classList.remove('selecionado3');
        contador = contador - 1
    }

    const element = document.querySelector(seletor3);

    element.classList.toggle('escondido');
    element.classList.toggle('selecionado3');

    console.log(contador)

    if (contador === 3) {
        
        const buttom3 = document.querySelector('.buttom2')

        buttom3.classList.remove('escondido');

    }

}

    if (contador === 3) {
        
        const buttom3 = document.querySelector('.buttom2')

        buttom3.classList.remove('escondido');

    }