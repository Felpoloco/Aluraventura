const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    //FELIPE DA SILVA SANTOS 3ºD /18/09/2024/
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
