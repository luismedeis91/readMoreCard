let botao = document.getElementById('ler_bottom')
    botao.addEventListener('click', function(){
        let cartao = document.querySelector('.card');
        cartao.classList.toggle('active')


            if(cartao.classList.contains('active')){
                return botao.textContent = 'Leia menos'
            }
                botao.textContent = "Leia mais"
    })