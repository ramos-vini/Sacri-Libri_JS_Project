class Livros {
    constructor(nome, autor, modalHTML) {
        this.nome = nome,
            this.autor = autor,
            this.modalHTML = modalHTML
    }

    disponivel = true;

    tornarIndisponivel() {
        this.disponivel = false;
    }

    tornarDisponivel() {
        this.disponivel = true;
    }
}

let livros = [];

let livro1 = new Livros("As Grandes Mentiras sobre a Igreja Católica", "Alexandre e Viviane Varela",
    `<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel2">As Grandes Mentiras sobre a Igreja
            Católica -
            Alexandre e Viviane Varela</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="../assets/img/livro_varela.jpg" alt="Capa do livro As Grandes Mentiras sobre a Igreja Católica">
        <p class="precoModal">Capa comum:<br><b>R$ 36,70</b></p>
        <p>
            "Conheça as respostas para as contestações mais comuns sobre a Igreja Católica.
            Quantas
            vezes já ouvimos que a Igreja agiu de modo terrível na Idade Média, atrapalhou
            enormemente a ciência, matou milhares de inocentes durante a Inquisição e que é
            machista
            ou elitista? Quantas pessoas já questionaram a relevância dos santos, dos rituais e
            das
            relíquias do catolicismo sem saber exatamente o que eles significam ou representam?
            Para
            estes e outros questionamento é que Alexandre Varela, o responsável pelo maior blog
            católico da atualidade, O catequista, escreveu um verdadeiro manual para o católico
            moderno. Divertido e com o característico humor ácido da página, As grandes mentiras
            sobre a igreja católica comprovará que a realidade por trás da Igreja se revela
            completamente diferente das histórias que ouvimos nas escolas e na mídia."
        </p>
        <p><b>Número de páginas:</b> 224 páginas;</p>
        <p><b>Idioma:</b> Português;</p>
        <p><b>Editora:</b> Planeta;</p>
        <p><b>Data da publicação:</b> 24 de Outubro de 2016.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
    </div>
</div>
</div>`);

livros.push(livro1);

let livro2 = new Livros("Santo Tomás de Aquino", "G. K. Chesterton",
    `<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Santo Tomás de Aquino - G. K. Chesterton
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="../assets/img/livro_chesterton.png" alt="Capa do livro Santo Tomás de Aquino">
        <p class="precoModal">Capa comum:<br><b>R$ 39,70</b></p>
        <p>
            "Este livro não tem a pretensão de ser nada além de um esboço popular de um grande
            caráter histórico que deveria ser mais popular.
            Seu objetivo será atingido se estimular aqueles que sequer ouviram falar de Santo
            Tomás
            de Aquino a ler mais sobre ele em melhores livros.<br>Considero que essa biografia é
            uma
            introdução à filosofia e que a filosofia é uma introdução à teologia; e que consigo
            apenas levar o leitor até ao limiar do primeiro estágio da história."
        </p>
        <p><b>Número de páginas:</b> 176 páginas;</p>
        <p><b>Idioma:</b> Português;</p>
        <p><b>Editora:</b> Ecclesiae;</p>
        <p><b>Data da publicação:</b> 01 de Novembro de 2015.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
    </div>
</div>
</div>`);


livros.push(livro2);

let livro3 = new Livros("Tratado da Verdadeira Devoção à Santíssima Virgem", "São Luís Maria Grignion de Montfort",
    `<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tratado da Verdadeira Devoção à
                Santíssima
                Virgem - São Luís Maria Grignion de Montfort</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="../assets/img/livro_montfort.jpg" alt="Capa do livro Tratado da Verdadeira Devocação à Santíssima Virgem">
                <p class="precoModal">Capa comum:<br><b>R$ 22,20</b></p>
                <p>
                    "Uma das obras mais tocantes e inspiradoras que existe agora em versão de bolso.
                    Este
                    pequeno livro é um devocionário mariano. Nele São Luís Maria Grignion de Montfort
                    apresenta seu método de consagração a Jesus Cristo pelas mãos da Virgem Maria. Seu
                    objetivo é anunciar às pessoas, em particular às famílias, e todas as nações que o
                    caminho para encontrar Jesus Cristo passa por depositar a confiança no regaço
                    acolhedor
                    da Virgem Maria. Aqui se encontram pensamentos, orações e meditações sobre Nossa
                    Senhora."
                </p>
                <p><b>Número de páginas:</b> 200 páginas;</p>
                <p><b>Idioma:</b> Português;</p>
                <p><b>Editora:</b> Vozes de Bolso;</p>
                <p><b>Data da publicação:</b> 21 de Março de 2018.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
            <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
        </div>
    </div>
</div>`);

livros.push(livro3);

let livro4 = new Livros("Como a Igreja Católica Construiu a Civilização Ocidental", "Thomas E. Woods Jr.",
    `<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Como a Igreja Católica Construiu a
                Civilização Ocidental - Thomas E. Woods Jr.</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="../assets/img/livro_woods.jpg" alt="Capa do livro Como a Igreja Católica Construiu a Civilização Ocidental">
            <p class="precoModal">Capa comum:<br><b>R$ 56,10</b></p>
            <p>
                "Se perguntarmos a um estudante universitário o que sabe do contributo da Igreja
                Católica para a sociedade, a sua resposta talvez se resuma a uma palavra:
                "opressão",
                por exemplo, ou "obscurantismo". No entanto, essa palavra deveria ser "civilização".

                O autor destas páginas, Thomas Woods, doutorado pela Universidade de Columbia,
                mostra
                como toda a Civilização Ocidental nasceu e se desenvolveu apoiada nos valores e
                ensinamentos da Igreja Católica.

                Em concreto explica, entre muitas outras coisas: por que o milagre da ciência
                moderna e
                de uma filosofia que levou a razão à sua plenitude só puderam nascer sobre o solo da
                mentalidade católica; como a Igreja criou uma instituição que mudou o mundo: a
                Universidade; como ela nos deu uma arquitetura e umas artes plásticas de beleza
                incomparável; como os filósofos escolásticos desenvolveram os conceitos básicos da
                economia moderna, que trouxe para o Ocidente uma riqueza sem precedentes; como o
                nosso
                Direito, garantia da liberdade e da justiça, nasceu em ampla medida do Direito
                canônico;
                como a Igreja criou praticamente todas as instituições de assistência que
                conhecemos,
                dos hospitais à previdência; e como humanizou a vida, ao insistir durante séculos
                nos
                direitos universais do ser humano – tanto dos cristãos como dos pagãos – e na
                sacralidade de cada pessoa.

                Num momento em que se propaga uma imagem da Igreja como inimiga dos progressos da
                ciência e da técnica, e da liberdade do pensamento, este é um livro que desfaz
                preconceitos, corrige clichês e ensina inúmeras verdades teimosamente omitidas no
                ensino
                colegial e universitário."
            </p>
            <p><b>Número de páginas:</b> 288 páginas;</p>
            <p><b>Idioma:</b> Português;</p>
            <p><b>Editora:</b> Quadrante Editora;</p>
            <p><b>Data da publicação:</b> 26 de Junho de 2019.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
            <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
        </div>
    </div>
</div>
</div>`);

livros.push(livro4);

let livro5 = new Livros("A Resposta Católica", "Padre Paulo Ricardo",
    `<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">A Resposta Católica - Padre Paulo Ricardo
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="../assets/img/livro_pauloricardo.jpg" alt="Capa do livro A Resposta Católica">
        <p class="precoModal">Capa comum:<br><b>R$ 35,10</b></p>
        <p>
            "Este livro é um apanhado de vários episódios, o qual objetiva servir ao leitor como
            meio de consulta eficaz e acurado, e que pode ser utilizado nas mais diversas
            situações."
        </p>
        <p><b>Número de páginas:</b> 192 páginas;</p>
        <p><b>Idioma:</b> Português;</p>
        <p><b>Editora:</b> Ecclesiae;</p>
        <p><b>Data da publicação:</b> 01 de Novembro de 2013.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
    </div>
</div>
</div>`);

livros.push(livro5);

let livro6 = new Livros("A Fé Explicada", "Leo J. Trese",
    `<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">A Fé Explicada - Leo J. Trese</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="../assets/img/livro_trese.jpg" alt="Capa do livro A Fé Explicada">
        <p class="precoModal">Capa comum:<br><b>R$ 92,00</b></p>
        <p>
            "Crer com inteligência e pensar e agir à luz das verdades cristãs: estes são os dois
            objetivos deste livro do sacerdote norte-americano Leo Trese, autor de inúmeras
            obras
            sobre a doutrina e a espiritualidade católicas.<br>

            Dividido em três capítulos principais – O Credo, Os Mandamentos, Os Sacramentos e a
            oração –, o livro mostra os pontos essenciais da fé cristã de um modo extremamente
            didático, amável e claro, o que facilita não só a compreensão do leitor mas também o
            trabalho de quem depois precisa transmitir o seu conteúdo aos outros, seja numa aula
            de
            catequese, seja ao conversar com os amigos.<br>

            A exposição das verdades da fé é sempre acompanhada de exemplos e de imagens que as
            ilustram e tornam mais facilmente compreensíveis para o homem comum, que raramente
            tem à
            sua disposição os conhecimentos teológicos especializados que o ajudem a tirar delas
            todo o seu significado.<br>

            Por outro lado, os principais argumentos contrários à fé, tanto recentes como
            históricos, são expostos com serenidade e respondidos com precisão e firmeza, de
            forma a
            resolver as principais dúvidas com que qualquer cristão de nível superior se
            defronta,
            quer em si, quer nos outros.<br>

            O aspecto mais atrativo desta obra são as inúmeras aplicações e conselhos práticos
            que o
            autor sugere, e que são uma ajuda poderosa para viver a fé, para encarná-la nas
            realidades do dia a dia. Esta nova edição foi inteiramente revista e atualizada pelo
            novo Catecismo da Igreja Católica e pelo Código de Direito Canônico vigente.<br>

            Possibilita, assim, uma ampla visão dos últimos aprofundamentos que a inteligência
            cristã tem feito sobre o riquíssimo depósito da fé cristã."
        </p>
        <p><b>Número de páginas:</b> 480 páginas;</p>
        <p><b>Idioma:</b> Português;</p>
        <p><b>Editora:</b> Quadrante Editora;</p>
        <p><b>Data da publicação:</b> 26 de Novembro de 2014.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
    </div>
</div>
</div>`);

livros.push(livro6);

let livro7 = new Livros("As Moradas do Castelo Interior", "Santa Teresa d'Ávila",
    `<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">As Moradas do Castelo Interior - Santa
            Teresa
            d'Ávila</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="../assets/img/livro_davila.jpg" alt="Capa do livro As Moradas do Castelo Interior">
        <p class="precoModal">Capa comum:<br><b>R$ 50,90</b></p>
        <p>
            "Surpreende que um livro escrito há tanto tempo tenha tanto que nos dizer ainda
            hoje. A
            surpresa se desfaz, no entanto, quando nos damos conta de que As Moradas do Castelo
            Interior é um convite à vida interior e à comunhão com Deus, bem como uma longa
            exortação acerca dos percalços encontrados neste caminho. Nesta obra-prima, Santa
            Teresa
            d'Ávila se vale de uma metáfora para organizar seu ensino: nossa alma é um castelo
            onde
            há muitos aposentos, assim como no céu há muitas moradas.<br>
            "Umas no alto, outras embaixo, outras nos lados, e, no centro, no meio de todas
            estas,
            está a principal, que é onde ocorrem as coisas mais secretas entre Deus e a alma." A
            porta de entrada deste castelo é a oração. Este verdadeiro clássico da
            espiritualidade
            cristã e da literatura espanhola vem a público às vésperas das comemorações dos 500
            anos
            do nascimento de Santa Teresa numa edição enriquecida pela apresentação inédita do
            frei
            Patrício Sciadini, o.c.d., pelo retrato de Santa Teresa redigido pelo escritor
            francês
            Ernest Hello e pela tradução do premiado romancista Antonio Fernando Borges."
        </p>
        <p><b>Número de páginas:</b> 256 páginas;</p>
        <p><b>Idioma:</b> Português;</p>
        <p><b>Editora:</b> É Realizações;</p>
        <p><b>Data da publicação:</b> 01 de Outubro de 2014.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
    </div>
</div>
</div>`);

livros.push(livro7);

let livro8 = new Livros("Todos os Caminhos Levam a Roma", "Scott e Kimberly Hahn",
    `<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Todos os Caminhos Levam a Roma - Scott e
            Kimberly Hahn</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="../assets/img/livro_hahn.jpg" alt="Capa do livro Todos os Caminhos Levam a Roma">
        <p class="precoModal">Capa comum:<br><b>R$ 39,90</b></p>
        <p>
            "Este livro traz o emocionante relato do casal Scott e Kimberly Hahn sobre as suas
            trajetórias religiosas. Na busca por um maior conhecimento sobre Jesus Cristo,
            descobrem
            realidades desconcertantes a respeito da Bíblia e da Igreja Católica, o que acabará
            provocando uma reviravolta nas suas vidas. Como diz Scott na introdução, é uma
            história
            de amor com final feliz, mas que ao longo do percurso tem contornos de um romance
            policial, e até mesmo de terror."
        </p>
        <p><b>Número de páginas:</b> 224 páginas;</p>
        <p><b>Idioma:</b> Português;</p>
        <p><b>Editora:</b> Editora Cleófas;</p>
        <p><b>Data da publicação:</b> 01 de Janeiro de 2013.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary btModal">Adicionar ao Carrinho</button>
    </div>
</div>
</div>`);

livros.push(livro8);

document.getElementById("exampleModal").innerHTML = livros[0].modalHTML;

function exibirModalLivros(idx) {
    document.getElementById("exampleModal").innerHTML = livros[parseInt(idx)].modalHTML;
}

let modalLivros = document.getElementsByClassName("modalLivros");

for (let i = 0; i < modalLivros.length; i++) {
    modalLivros[i].addEventListener("click", () => {
        exibirModalLivros(`${i}`);
    })
}

// Slick Slider

$(document).ready(function () {
    $('.carroselResponsivo').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    });
});

// Popover Bootstrap

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// Spinner Bootstrap

function mostrarSpinner() {
    document.getElementById("buscar").style = "display: none";
    document.getElementById("spinner-buscar").style = "display: block";
}
document.getElementById("buscar").addEventListener("click", mostrarSpinner);



