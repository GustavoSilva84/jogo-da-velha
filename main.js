var vez_jogador = 'x';
var vencedor_x = 0
var vencedor_o = 0
var button_iniciar_jogo = document.querySelector('.button_iniciar_jogo')
var tabuleiro_matriz = [
  ['','',''],
  ['','',''],
  ['','',''],
];

var jogando = false;

function iniciar_reiniciar_jogo(){
  jogando = true;
  
  button_iniciar_jogo.innerHTML = 'Jogo iniciado'
  button_iniciar_jogo.style.background = '#00FF83'
  button_iniciar_jogo.style.color= 'white'
  button_iniciar_jogo.style.fontWeight = '400'
  
  // modo de reiniciar joga sera adicionando em breve!
  
  return;
}

function click_button_game(row, column){
  
  if(jogando === true){
    
    let vez_do_jogador = document.querySelector('.vez_do_jogador');                        
    let texto_vez_do_jogador = document.querySelector('.texto_vez_do_jogador');
    let button_game = document.querySelector('.button_game');
    let id = `row${row}_column${column}`;
    
    if(tabuleiro_matriz[row][column] === ''){
      
      if(vez_jogador === 'x'){
        document.getElementById(id).innerHTML = '<p id="x"> X </p>';
        
        tabuleiro_matriz[row][column] = 'x';
        
        texto_vez_do_jogador.innerHTML = 'VEZ DO O';
        button_game.style.color = '#12B4FF';
        vez_do_jogador.style.background = '#FF125E';
        vez_jogador = 'o';
      }else{
        document.getElementById(id).innerHTML = '<p id="o"> O </p>';
        
        tabuleiro_matriz[row][column] = 'o';
        
        texto_vez_do_jogador.innerHTML = 'VEZ DO X';
        button_game.style.color = '#FF125E';
        vez_do_jogador.style.background = '#12B4FF';
        vez_jogador = 'x';
      }
      
    }
    checar_ganhador()
  }
}

function checar_ganhador(){
  
  if(jogando === true){
    
    for(let check_row = 0; check_row < 3; check_row++){
      for(let check_column = 0; check_column < 3; check_column++){
        
        if(tabuleiro_matriz[check_row][0] === tabuleiro_matriz[check_row][1] && tabuleiro_matriz[check_row][0] == tabuleiro_matriz[check_row][2]){                      
          if(tabuleiro_matriz[check_row][0] != ''){
            
            if(vez_jogador != 'o'){
              
              let pontuacao_o = document.querySelector('.pontuacao_o');
              
              vencedor_o++;
              pontuacao_o.innerHTML = `O = ${vencedor_o}`
              jogando = false;
              
              return;
              
            }else if(vez_jogador != 'x'){
              
              let pontuacao_x = document.querySelector('.pontuacao_x')
              
              vencedor_x++
              pontuacao_x.innerHTML = `X = ${vencedor_x}`
              jogando = false;
              
              return;
              
            }
            
          }
        }
        
        if (tabuleiro_matriz[0][check_column] === tabuleiro_matriz[1][check_column] && tabuleiro_matriz[1][check_column] == tabuleiro_matriz[1][check_column]) {
          if (tabuleiro_matriz[0][check_column] != '') {
        
            if (vez_jogador != 'o') {
        
              let pontuacao_o = document.querySelector('.pontuacao_o');
        
              vencedor_o++;
              pontuacao_o.innerHTML = `O = ${vencedor_o}`
              jogando = false;
              
              return;
        
            } else if (vez_jogador != 'x') {
        
              let pontuacao_x = document.querySelector('.pontuacao_x')
        
              vencedor_x++
              pontuacao_x.innerHTML = `X = ${vencedor_x}`
              jogando = false;
              
              return;
        
            }
        
          }
        }
        
      }
    }
    
    if(tabuleiro_matriz[0][0] == tabuleiro_matriz[1][1] && tabuleiro_matriz[0][0] == tabuleiro_matriz[2][2]){
      if(tabuleiro_matriz[0][0] != ''){
        
        if (vez_jogador != 'o') {
        
          let pontuacao_o = document.querySelector('.pontuacao_o');
        
          vencedor_o++;
          pontuacao_o.innerHTML = `O = ${vencedor_o}`
          jogando = false;
        
          
        
        } else if (vez_jogador != 'x') {
        
          let pontuacao_x = document.querySelector('.pontuacao_x')
        
          vencedor_x++
          pontuacao_x.innerHTML = `X = ${vencedor_x}`
          jogando = false;
        
          return;
        
        }
       
      }
    }
    
    
    if (tabuleiro_matriz[0][2] == tabuleiro_matriz[1][1] && tabuleiro_matriz[0][2] == tabuleiro_matriz[2][0]) {
      if (tabuleiro_matriz[0][2] != '') {
    
        if (vez_jogador != 'o') {
    
          let pontuacao_o = document.querySelector('.pontuacao_o');
    
          vencedor_o++;
          pontuacao_o.innerHTML = `O = ${vencedor_o}`
          jogando = false;
    
          return;
    
        } else if (vez_jogador != 'x') {
    
          let pontuacao_x = document.querySelector('.pontuacao_x')
    
          vencedor_x++
          pontuacao_x.innerHTML = `X = ${vencedor_x}`
          jogando = false;
    
          return;
    
        }
    
      }
    }
    
  }
  
}

