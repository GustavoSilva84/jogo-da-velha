// LIMPAR TABULEIRO
const BUTTON_JOGO = document.querySelectorAll('.button_jogo');         
const GANHADOR = document.querySelector('#fundo_ganhador')

BUTTON_JOGO.forEach(BUTTON_JOGO => {
  BUTTON_JOGO.innerHTML = '';
});

var vez_do_jogador = 0;
var simbolos = ['X','O'];
var tabuleiro_matriz = [
    ['','',''],
    ['','',''],
    ['','',''],
];

var jogo = false;

function button_click_jogo(row, column) {
  
  if(jogo === false && tabuleiro_matriz[row][column] == ''){
  
    let id = `${row}_${column}`;
    
    if(vez_do_jogador === 0) {
      
      if(vez_do_jogador == 0) {
        
        document.getElementById(id).innerHTML = `<p class="x"> X </p>`;
        
      }else {
        
        document.getElementById(id).innerHTML = `<p class="k"> O </p>`;
        
      }
      
      tabuleiro_matriz[row][column] = 'X'
      vez_do_jogador = 1;
      
    }else {
      
      document.getElementById(id).innerHTML = simbolos[vez_do_jogador];              
      tabuleiro_matriz[row][column] = 'O'
      vez_do_jogador = 0;
      
    }
    
    checar()
    
  }
  
}

function checar(){
  
  for(let i = 0; i < 3; i++){
    
    // CHECAR LINHAS
    if(tabuleiro_matriz[i][0] == simbolos[0] && tabuleiro_matriz[i][1] == simbolos[0] && tabuleiro_matriz[i][2] == simbolos[0]) {                         
      
      if(tabuleiro_matriz[i][0] != ''){
        GANHADOR.innerHTML = '<p class="ganhador"> Ganhador X </p>'
        jogo = true
        return
      }
      
    }else if(tabuleiro_matriz[i][0] == simbolos[1] && tabuleiro_matriz[i][1] == simbolos[1] && tabuleiro_matriz[i][2] == simbolos[1]) {
     
      if(tabuleiro_matriz[i][0] != '') {
        GANHADOR.innerHTML = '<p class="ganhador"> Ganhador O </p>'
        jogo = true
        return
      }
      
    }          
    
    // CHECAR COLUNAS
    if(tabuleiro_matriz[0][i] == simbolos[0] && tabuleiro_matriz[1][i] == simbolos[0] && tabuleiro_matriz[2][i] == simbolos[0]) {
      
      if(tabuleiro_matriz[0][i] != '') {
        GANHADOR.innerHTML =  '<p class="ganhador"> Ganhador X </p>'
        jogo = true
        return
      }
      
    }else if(tabuleiro_matriz[0][i] == simbolos[1] && tabuleiro_matriz[1][i] == simbolos[1] && tabuleiro_matriz[2][i] == simbolos[1]){
      
      if(tabuleiro_matriz[0][i] != '') {
        GANHADOR.innerHTML =  '<p class="ganhador"> Ganhador O </p>'
        jogo = true
        return
      }
      
    }
   
  }
  
  // DIAGONAL ESQUERDA
  if(tabuleiro_matriz[0][0] == simbolos[0] && tabuleiro_matriz[1][1] == simbolos[0] && tabuleiro_matriz[2][2] == simbolos[0]) {
  
    if(tabuleiro_matriz[0][0] != '') {
      GANHADOR.innerHTML =  '<p class="ganhador"> Ganhador X </p>'
      jogo = true
      return
    }
    
  }else if(tabuleiro_matriz[0][0] == simbolos[1] && tabuleiro_matriz[1][1] == simbolos[1] && tabuleiro_matriz[2][2] == simbolos[1]){
    
    if(tabuleiro_matriz[0][0] != '') {
      GANHADOR.innerHTML =  '<p class="ganhador"> Ganhador O </p>'
      jogo = true
      return
    }
    
  }
  
  // DIAGONAL DIREITA
  if(tabuleiro_matriz[0][2] == simbolos[0] && tabuleiro_matriz[1][1] == simbolos[0] && tabuleiro_matriz[2][0] == simbolos[0]) {
    
    if(tabuleiro_matriz[0][2] != '') {
      GANHADOR.innerHTML =  '<p class="ganhador"> Ganhador X </p>'
      jogo = true
      return
    }
    
  }else if(tabuleiro_matriz[0][2] == simbolos[1] && tabuleiro_matriz[1][1] == simbolos[1] && tabuleiro_matriz[2][0] == simbolos[1]) {
    
    if(tabuleiro_matriz[0][2] != '') {
      GANHADOR.innerHTML =  '<p class="ganhador"> Ganhador O </p>';
      jogo = true;
      return
    }
    
  }
  empate();
}

function mostrar_text_empate(){
  GANHADOR.innerHTML = '<p class="ganhador"> Empate </p>';
}
function empate(){
  for(let r = 0; r < 3; r++){
    for(let c = 0; c < 3; c++){
      if(tabuleiro_matriz[r][c] == ''){
        return
      }
    }
  }
  mostrar_text_empate()
}
