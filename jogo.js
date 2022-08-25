let altura = null
let largura = null
let vidas = 1
let tempo = 15
let pontos = 0
let tempoMosquito = 1000
const pontuacao = document.querySelector('#pontos')

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel == 'baby') {
  document.querySelector('#cronometro').innerHTML = tempo

  const html = document.querySelector('html')
  
  document.body.style.backgroundImage = 'url("./src/imagens/castelo_princesa.jpg")'

  html.style.cursor = 'url("./src/imagens/coroapng.png") 30 30, auto'

  console.log('baby level', html.style.cursor)

  function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
  }
  
  ajustaTamanhoPalcoJogo()
  
  let cronometro = setInterval(function() {
    tempo -= 1
    document.querySelector('#cronometro').innerHTML = tempo
  
    if (tempo < 0) {
      window.location.href = 'vitoria2.html?' + pontos
    }
  }, 1000)
  
  function posicaoRandomica() {
  
    //remover mosquito anterior (caso exista)
    if (document.querySelector('#mosquito')) {
      document.querySelector('#mosquito').remove()
  
      if (vidas > 3) {
        window.location.href = 'fim_de_jogo.html?' + pontos
      } else {
        document.querySelector('#v' + vidas).src = "./src/imagens/coracao_vazio.png"
  
        vidas++
      }
    }
  
    let posicaoX = Math.floor(Math.random() * largura -90)
    let posicaoY = Math.floor(Math.random() * altura -90)
  
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
  
    console.log(posicaoX, posicaoY)
  
    const mosquito = document.createElement('img')
    mosquito.src = './src/imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
  
    document.body.appendChild(mosquito)
  
    mosquito.addEventListener('click', function() {
      this.remove()
      pontos++
      pontuacao.innerHTML = ` ${pontos}`
      console.log(pontos, pontuacao)
    })
  }
  
  function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
  
    switch(classe) {
      case 0:
        return 'mosquito1'
      case 1:
        return 'mosquito2'
      case 2:
        return 'mosquito3'
    }
  }
  
  tamanhoAleatorio()
  
  function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
  
    switch(classe) {
      case 0:
        return 'ladoA'
      case 1:
        return 'ladoB'
    }
  }
  
  setInterval(function() {
    posicaoRandomica()
  }, tempoMosquito)
} else {
  
  switch (nivel) {
    case 'facil':
      tempoMosquito = 1500
      break
  
    case 'normal':
      tempoMosquito = 1000
      break
  
    case 'dificil':
      tempoMosquito = 750
      break
  }
  
  document.querySelector('#cronometro').innerHTML = tempo
  
  function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
  }
  
  ajustaTamanhoPalcoJogo()
  
  let cronometro = setInterval(function() {
    tempo -= 1
    document.querySelector('#cronometro').innerHTML = tempo
  
    if (tempo < 0) {
      window.location.href = 'vitoria.html?' + pontos
    }
  }, 1000)
  
  function posicaoRandomica() {
  
    //remover mosquito anterior (caso exista)
    if (document.querySelector('#mosquito')) {
      document.querySelector('#mosquito').remove()
  
      if (vidas > 3) {
        window.location.href = 'fim_de_jogo.html?' + pontos
      } else {
        document.querySelector('#v' + vidas).src = "./src/imagens/coracao_vazio.png"
  
        vidas++
      }
    }
  
    let posicaoX = Math.floor(Math.random() * largura -90)
    let posicaoY = Math.floor(Math.random() * altura -90)
  
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
  
    console.log(posicaoX, posicaoY)
  
    const mosquito = document.createElement('img')
    mosquito.src = './src/imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
  
    document.body.appendChild(mosquito)
  
    mosquito.addEventListener('click', function() {
      this.remove()
      pontos++
      pontuacao.innerHTML = ` ${pontos}`
      console.log(pontos, pontuacao)
    })
  }
  
  function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
  
    switch(classe) {
      case 0:
        return 'mosquito1'
      case 1:
        return 'mosquito2'
      case 2:
        return 'mosquito3'
    }
  }
  
  tamanhoAleatorio()
  
  function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
  
    switch(classe) {
      case 0:
        return 'ladoA'
      case 1:
        return 'ladoB'
    }
  }
  
  setInterval(function() {
    posicaoRandomica()
  }, tempoMosquito)
}

