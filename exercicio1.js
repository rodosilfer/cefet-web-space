// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let btoes = document.querySelectorAll(".botao-expandir-retrair");

for (let i = 0; i < btoes.length; i++) {
   
	btoes[i].addEventListener('click', function(e) {
       
      
       let p =btoes[i].parentNode
       console.log(p) 
        p.classList.toggle('expandido')
       
        if (btoes[i].innerHTML==='+'){
          btoes[i].innerHTML='-'
        }   

        else {
           btoes[i].innerHTML='+'
        }
  })
}