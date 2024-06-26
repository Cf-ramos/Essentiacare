var slide = 0

function temporizador() { //o TEMPORIZADOR define a animação do banner
    const navega = document.getElementsByClassName("controSlide")
    const mostre = document.querySelectorAll(".container img") 
    const box = document.getElementById("container")
    var array = Array.from(navega)
    var slide = window.slide;

        window.slide++ //aqui eu fiz as imagens passarem automaticamente
        if (slide >= mostre.length -1) {
            window.slide = 0}
        array[slide].checked = true //aqui eu fiz os botões acompanharem as imagens

    box.style.transform = `translateX(${-slide * 100}%)`//aqui eu fiz a animação das imagens

    setInterval (temporizador, 8000); //define o intervalo entre a animação do Banner
    }


function navBanner(n) { //o NAV BANNER permite a navegação atravez dos botões
    const box = document.getElementById("container")
    box.style.transform = `translateX(${-n * 100}%)`
    } 

function exibirProdutos() { //o EXIBIR PRODUTOS serve para adicionar os produtos á vitrine de forma dinamica
            var produtos = [ //aqui eu to criando um array pros produtos
            {id: 0,
            img: `Produtos/exemplo.jpg`,
            nome: 'produto x',
            descrição: 'bla bla bla e tal',
            quantidade: 0
            },
            {id: 1,
            img: `Produtos/exemplo.jpg`,
            nome: 'produto y',
            descrição: 'bla bla bla e tal',
            quantidade: 0
            },
            {id: 2,
            img: `Produtos/exemplo.jpg`,
            nome: 'produto z',
            descrição: 'bla bla bla e tal',
            quantidade: 0
            },
            {id: 1,
            img: `Produtos/exemplo.jpg`,
            nome: 'produto y',
            descrição: 'bla bla bla e tal',
            quantidade: 0
            },
            {id: 2,
            img: `Produtos/exemplo.jpg`,
            nome: 'produto z',
            descrição: 'bla bla bla e tal',
            quantidade: 0
        }]

            var vitrine = document.getElementById("vitrine")
            //O FOR aqui vai servir pra add os produtos de forma dinamica
            for (let index = 0; index < produtos.length; index++) { //os `` abaixo servem só pra eu conseguir quebrar as linhas dentro do da div sem dar erro
                vitrine.innerHTML += ` 
                <div class= "mostrar" onmouseenter='foca(`+ index +`)'onmouseleave='desfoca(`+ index +`)'>
                <img src="` + produtos[index].img + `" alt="x">
                <h4>`+ produtos[index].nome +`</h4>
                <p>`+ produtos[index].descrição +`</p>
                </div> ` }
            }

//o FOCA e o DESFOCA são relativos aos produtos
function foca(n) { var entra = document.getElementsByClassName("mostrar")
       entra[n].style.background = "#E4C7C9"}
       
function desfoca(n) { var sai = document.getElementsByClassName("mostrar")
        sai[n].style.background = "#202020"}

function Login() {
        let entra = document.getElementById("fazerLogin")
            entra.innerHTML += `
            <p>Login:</p>
            <input type="text" name="email" id="email" placeholder='  E-mail'> <br>
            <input type="text" name="senha" id="senha" placeholder='  Senha'>
            <input type="button" value="Entrar" onclick='animaLogin()'>
            <p id="link"> Caso ainda não tenha cadastro, <input type="button" onclick='cadastro(`+entra.id+`)' value="click aqui!"></p>`
    }

function cadastro(n){
    n.style.display = 'none'
    let cadastro = document.getElementById("fazerCadastro")
    cadastro.innerHTML += `
    <p>Cadastro:</p>
    <input type="text" name="email" id="email" placeholder='  E-mail'> <br>
    <input type="text" name="senha" id="senha" placeholder='  Senha'> <br>
    <input type="text" name="nome" id="nome" placeholder='  Nome Completo'> <br>
    <input type="text" name="cpf" id="cpf" placeholder='  CPF'> <br>
    <input type="text" name="telefone" id="telefone" placeholder='  Telefone'> <br>
    <input type="button" onclick='animaLogin()' value="cadastre-se"> `
    }

function DadosPerfil() {
            let nome = document.getElementById("NomeCompleto")
            let contato = document.getElementById("contato")

    }

function Paragrafo(pele){

    let miniN = document.getElementById("miniNavegador")
    console.log(miniN)
        
    if (!miniN){
        console.log("entrou no if")
        miniNav()
    }
    console.log("chamou")
    let seca = document.getElementById("seca")
    let normal = document.getElementById("normal")
    let oleosa = document.getElementById("oleosa")
    let mista = document.getElementById("mista")
    
    console.log(miniN)
    if (pele == oleosa) {
        seca.style.display = 'none'
        normal.style.display = 'none'
        mista.style.display = 'none'
        oleosa.style.display = 'block'
        

        var paragrafo = document.createElement('p')
        paragrafo.id="paragrafo"
        paragrafo.innerHTML += `Pele Oleosa <br>
         É aquela pele que parece estar sempre no modo brilhante, especialmente na zona T, que consiste na testa, nariz e queixo. Os poros podem ser mais visíveis e às vezes há uma luta constante contra a acne. É importante encontrar os produtos certos para controlar o brilho e manter a pele equilibrada.`
        oleosa.appendChild(paragrafo)
    }
    if (pele == seca) {
        console.log("seca")
        
        oleosa.style.display = 'none'
        normal.style.display = 'none'
        mista.style.display = 'none'
        seca.style.display = 'block'
        
        var paragrafo = document.createElement('p')
        paragrafo.id="paragrafo"
        paragrafo.innerHTML += `Pele Seca <br>
        Esta é a pele que muitas vezes parece estar com sede. Pode parecer áspera ao toque, descamar e sentir-se repuxada. Hidratantes ricos são essenciais para ajudar a suavizar e nutrir essa pele, proporcionando o conforto que ela precisa.`
        seca.appendChild(paragrafo)
    }
    if (pele == normal) {
        oleosa.style.display = 'none'
        seca.style.display = 'none'
        mista.style.display = 'none'
        normal.style.display = 'block'

        var paragrafo = document.createElement('p')
        paragrafo.id="paragrafo"
        paragrafo.innerHTML += `Pele Normal <br>
         A pele normal é aquela que está equilibrada, com produção de óleo e hidratação adequada.Mas mesmo essa pele dos sonhos precisa de cuidados. Embora os poros possam ser menos visíveis e a textura mais suave, é importante manter uma rotina básica de cuidados com a pele para preservar sua saúde e vitalidade ao longo do tempo.`
        normal.appendChild(paragrafo)
    }
    if (pele == mista) {
        oleosa.style.display = 'none'
        seca.style.display = 'none'
        normal.style.display = 'none'
        mista.style.display = 'block'
        
        var paragrafo = document.createElement('p')
        paragrafo.id="paragrafo"
        paragrafo.innerHTML += `Pele Mista <br>
         Imagine uma combinação de diferentes tipos de pele em uma só! Enquanto a zona T pode ser mais oleosa, outras áreas do rosto podem ser mais secas. Encontrar o equilíbrio certo de produtos é fundamental para garantir que todas as áreas recebam a hidratação e os cuidados necessários.`
        mista.appendChild(paragrafo)
    }

            try{
                if (miniN.style == "none"){
                    miniN.style.display = 'block'
            }

            }catch{
                console.log("nav não criado ainda")
            }
    }

function miniNav(){
            let seca = document.getElementById("seca")
            let normal = document.getElementById("normal")
            let oleosa = document.getElementById("oleosa")
            let mista = document.getElementById("mista")

            var mN = document.getElementById("chamaMiniNav")
            var miniNav = document.createElement("p")
            miniNav.id="miniNavegador"
            miniNav.display = 'none'
            miniNav.innerHTML = `
                <div id="miniMista" class="miniPele">
                <input type="button" alt="Pele Mista" onclick="Paragrafo(`+ mista.id +`)">
                </div>
                <div id="miniSeca" class="miniPele">
                    <input type="button" alt="Pele Seca" onclick="Paragrafo(`+ seca.id +`)">
                </div>
                <div id="miniNormal" class="miniPele">
                    <input type="button" alt="Pele Normal" onclick="Paragrafo(`+ normal.id +`)">
                </div>
                <div id="miniOleosa" class="miniPele">
                    <input type="button" alt="Pele Oleosa" onclick="Paragrafo(`+ oleosa.id +`)">`
            
            mN.appendChild(miniNav)
    }

function animaLogin(){
    const rodaVetor = document.getElementById("vetor")
    let vetor = document.getElementById("vetor")
    let form = document.getElementById("fazerLogin")
    let formCadastro = document.getElementById("fazerCadastro")

    
    /** aqui eu to fazendo a rotação da animação*/
    vetor.style.transform = `rotate(90deg)`
    vetor.style.marginTop = `2%`
    vetor.style.marginLeft = `30%`
    vetor.style.width = `30%`
    form.style.display = `none`
    formCadastro.style.display = `none`

        let mostra = document.getElementById("mostraBoasVindas")
        let boasVindas = document.createElement("p")

        boasVindas.id = `boasVindas`
        boasVindas.innerHTML = "Boas Vindas!"
        boasVindas.style.display ="none"
        mostra.appendChild(boasVindas) 
        boasVindas.style.display = "inline"

        setTimeout(completaAnima, 1000)
}

function completaAnima(){
    let vetor = document.getElementById("vetor")
    let mostra = document.getElementById("mostraBoasVindas")

    vetor.style.marginTop = `-25%`
    vetor.style.marginLeft = `-2%`
    vetor.style.width = `100%`
    mostra.style.display = `none`

    setTimeout(Index, 800)
}

function Index(){
    window.location.href = "index.html"
}