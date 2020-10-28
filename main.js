var vez_jogador = 'x';

const button_game = document.querySelectorAll('.button_game');
const button_iniciar_jogo = document.querySelector('.button_iniciar_jogo');
const vez_do_jogador = document.querySelector('.vez_do_jogador');
const texto_vez_do_jogador = document.querySelector('.texto_vez_do_jogador');
const pontuacao = document.querySelector('.pontuacao');

var tabuleiro_matriz = [
  ['','',''],
  ['','',''],
  ['','',''],
];

var jogando = false;

function iniciar_reiniciar_jogo(){
  
  jogando = true;
  
  button_iniciar_jogo.innerHTML = 'Jogo iniciado';
  button_iniciar_jogo.style.background = '#00FF83';
  button_iniciar_jogo.style.color = 'white';
  button_iniciar_jogo.style.fontWeight = '400';
  
  pontuacao.style.fontSize = '0px';
  pontuacao.style.padding = '0px 0px 0px 0px';
  pontuacao.innerHTML = '';
  
  tabuleiro_matriz = [
    ['','',''],
    ['','',''],
    ['','',''],
  ];
  
  button_game.forEach(button_game => {
    button_game.innerHTML = '';
  });
  
};



function click_button_game(row, column){
  
  if(jogando === true){
    
    let id = `row${row}_column${column}`;
    
    if(tabuleiro_matriz[row][column] === ''){
      if(vez_jogador === 'x'){
        
        tabuleiro_matriz[row][column] = 'x';
        
        document.getElementById(id).innerHTML = '<p id="x"> X </p>';
        
        texto_vez_do_jogador.innerHTML = 'VEZ DO O';
        vez_do_jogador.style.background = '#FF125E';
        vez_jogador = 'o';
        
      }
    }
      do{
        var t = Math.round(Math.random() * 2)
        var u = Math.round(Math.random() * 2)
      }while(tabuleiro_matriz[t][u] != '')
        
      tabuleiro_matriz[t][u] = 'o';
     
      var k = `row${t}_column${u}`
     
      document.getElementById(k).innerHTML = '<p id="o"> O </p>';
        
      texto_vez_do_jogador.innerHTML = 'VEZ DO X';
      vez_do_jogador.style.background = '#12B4FF';
      vez_jogador = 'x';
      }
    
        
      
        /*
          tabuleiro_matriz[row][column] = 'o';
          
          document.getElementById(id).innerHTML = '<p id="o"> O </p>';
          
          texto_vez_do_jogador.innerHTML = 'VEZ DO X';
          vez_do_jogador.style.background = '#12B4FF';
          vez_jogador = 'x';
        */
         
   checar_ganhador();
  
  
};

function checar_ganhador(){
 
  if(jogando === true){
    
    for(let check_row = 0; check_row < 3; check_row++) {
      for(let check_column = 0; check_column < 3; check_column++) {
        
        if(tabuleiro_matriz[check_row][0] === tabuleiro_matriz[check_row][1] && tabuleiro_matriz[check_row][0] == tabuleiro_matriz[check_row][2]) {                      
          if(tabuleiro_matriz[check_row][0] != '') {

            ganhou();
            return;
          
          }
        }
        
        if(tabuleiro_matriz[0][check_column] === tabuleiro_matriz[1][check_column] && tabuleiro_matriz[1][check_column] == tabuleiro_matriz[2][check_column]) {
          if(tabuleiro_matriz[0][check_column] != '') {
        
            ganhou()
            return;
            
          }
        }
        
      }
    }
    
    if(tabuleiro_matriz[0][0] == tabuleiro_matriz[1][1] && tabuleiro_matriz[0][0] == tabuleiro_matriz[2][2]){
      if(tabuleiro_matriz[0][0] != ''){
        
        ganhou()
        return;
       
      }
    }
    
    if(tabuleiro_matriz[0][2] == tabuleiro_matriz[1][1] && tabuleiro_matriz[0][2] == tabuleiro_matriz[2][0]) {
      if(tabuleiro_matriz[0][2] != '') {
    
        ganhou()
        return;
    
      }
    }
    
  checar_empate()
  return;
    
  }
  
}

function checar_empate() {
  
  for(let row = 0; row < 3; row++){
    for(let column = 0; column < 3; column++){
      
      if(tabuleiro_matriz[row][column] == ''){
        
        return;
        
      }
      
    }
  }
  
  empate();
  return;
 
}

function empate() {
  
  button_iniciar_jogo.innerHTML = 'Iniciar nova partida';
  
  window.navigator.vibrate([50, 50]);
  
  pontuacao.style.fontSize = '75px';
  pontuacao.style.padding = '20px 100px 20px 100px';
  pontuacao.innerHTML = 'Jogo empatado';
  
  jogando = false;
  
  return;
  
}

function ganhou() {
  
  if(vez_jogador != 'o') {
    
    button_iniciar_jogo.innerHTML = 'Iniciar nova partida';
    
    window.navigator.vibrate([100, 100, 100, 100, 100, 100, 100, 500, 600, 700, 100, 0, 100]);
    
    pontuacao.style.fontSize = '75px';
    pontuacao.style.padding = '10px 130px 10px 130px';
    pontuacao.style.color = '#FF125E';
    pontuacao.innerHTML = 'Vencedor O';
    
    jogando = false;
    
    return;
  
  }else if(vez_jogador != 'x') {
    
    button_iniciar_jogo.innerHTML = 'Iniciar nova partida'
    
    window.navigator.vibrate([100, 100, 100, 100, 100, 100, 100, 500, 600, 700, 100, 0, 100]);
    
    pontuacao.style.fontSize = '75px';
    pontuacao.style.padding = '10px 130px 10px 130px';
    pontuacao.style.color = '#12B4FF';
    pontuacao.innerHTML = 'Vencedor X';
    
    jogando = false;
    
    return;
  
  }
  
}




