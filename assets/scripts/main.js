// funções que irão ser chamadas ao carregar a página serão colocadas aqui em document.ready
$('document').ready(function () {
    paginaCarregada();
});

//função que chama a tela de carregar por tres segundos
function paginaCarregada() {
    var timer = 5000;
    setTimeout(function () {
        $('.carrega_pagina_rocktrade').css('display', 'none');
    }, timer);
}

//função que faz a animação na hora de clicar nos links e ir nos ativos de compra e venda referente as estratégias
function smoothScroll(target, duration) {

    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition; //- startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run); //vertically scroll
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        t--;
        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
    };

    requestAnimationFrame(animation);
}

// função que rola até a tela atlantico
$('.lkAtlantico').on('click', function () {
    smoothScroll('.atlantico', 2000);
})

// função que rola até a tela principal - home
$('.lkHome').on('click', function () {
    smoothScroll('.principal', 2000);
})

// função que rola até a tela do produto big rocks
$('.lbBigRocks').on('click', function () {
    smoothScroll('.bigrocks', 2000);
})

// função que rola até a tela do produto ibov
$('.lkIbov').on('click', function () {
    smoothScroll('.ibov', 2000);
})

// função que rola até a tela do produto INDI
$('.lkIndi').on('click', function () {
    smoothScroll('.indi', 2000);
})

// função que rola até a tela do produto ROCKET5
$('.lkRocket').on('click', function () {
    smoothScroll('.rocket', 2000);
})

// função que rola até a tela do produto smallrocks
$('.lkSmall').on('click', function () {
    smoothScroll('.smallrocks', 2000);
})

// função que rola até a tela do produto smart dividendos
$('.lkSmart').on('click', function () {
    smoothScroll('.dividendos', 2000);
})

// função que rola até a tela do produto tática do dólar
$('.lkTatica').on('click', function () {
    smoothScroll('.tatica', 2000);
})

// função que rola até a tela do produto the bigrocks for nasdaq
$('.lkNasdaq').on('click', function () {
    smoothScroll('.nasdaq', 2000);
})

// função que abre os novos trades referentes ao produto Atlântico
$('.lkAtlNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".atlantico__conteudo__bottom__novostrades";
    var vClose = ".atlantico__conteudo__bottom__encerrartrades";
    var vAtivo = ".lkAtlNovosTrades";
    var vInativo = ".lkAtlEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// função que abre os novos encerrar referentes ao produto Atlântico
$('.lkAtlEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".atlantico__conteudo__bottom__encerrartrades";
    var vClose = ".atlantico__conteudo__bottom__novostrades";
    var vInativo = ".lkAtlNovosTrades";
    var vAtivo = ".lkAtlEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto bigrocks
$('.lkbigrocksNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".bigrocks__conteudo__bottom__novostrades";
    var vClose = ".bigrocks__conteudo__bottom__encerrartrades";
    var vAtivo = ".lkbigrocksNovosTrades";
    var vInativo = ".lkbigrocksEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto bigrocks
$('.lkbigrocksEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".bigrocks__conteudo__bottom__encerrartrades";
    var vClose = ".bigrocks__conteudo__bottom__novostrades";
    var vAtivo = ".lkbigrocksEncerrarTrades";
    var vInativo = ".lkbigrocksNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto ibov
$('.lkibovNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".ibov__conteudo__bottom__novostrades";
    var vClose = ".ibov__conteudo__bottom__encerrartrades";
    var vAtivo = ".lkibovNovosTrades";
    var vInativo = ".lkibovEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto ibov
$('.lkibovEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".ibov__conteudo__bottom__encerrartrades";
    var vClose = ".ibov__conteudo__bottom__novostrades";
    var vAtivo = ".lkibovEncerrarTrades";
    var vInativo = ".lkibovNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto rocket
$('.lkrocketNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".rocket__conteudo__bottom__novostrades";
    var vClose = ".rocket__conteudo__bottom__encerrartrades";
    var vAtivo = ".lkrocketNovosTrades";
    var vInativo = ".lkrocketEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto rocket
$('.lkrocketEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".rocket__conteudo__bottom__encerrartrades";
    var vClose = ".rocket__conteudo__bottom__novostrades";
    var vAtivo = ".lkrocketEncerrarTrades";
    var vInativo = ".lkrocketNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto smallrocks
$('.lksmallrocksNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".smallrocks__conteudo__bottom__novostrades";
    var vClose = ".smallrocks__conteudo__bottom__encerrartrades";
    var vAtivo = ".lksmallrocksNovosTrades";
    var vInativo = ".lksmallrocksEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto smallrocks
$('.lksmallrocksEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".smallrocks__conteudo__bottom__encerrartrades";
    var vClose = ".smallrocks__conteudo__bottom__novostrades";
    var vAtivo = ".lksmallrocksEncerrarTrades";
    var vInativo = ".lksmallrocksNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto dividendos
$('.lkdividendosNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".dividendos__conteudo__bottom__novostrades";
    var vClose = ".dividendos__conteudo__bottom__encerrartrades";
    var vAtivo = ".lkdividendosNovosTrades";
    var vInativo = ".lkdividendosEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto dividendos
$('.lkdividendosEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".dividendos__conteudo__bottom__encerrartrades";
    var vClose = ".dividendos__conteudo__bottom__novostrades";
    var vAtivo = ".lkdividendosEncerrarTrades";
    var vInativo = ".lkdividendosNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto tática do dólar
$('.lktaticaNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".tatica__conteudo__bottom__novostrades";
    var vClose = ".tatica__conteudo__bottom__encerrartrades";
    var vAtivo = ".lktaticaNovosTrades";
    var vInativo = ".lktaticaEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto tática do dólar
$('.lktaticaEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".tatica__conteudo__bottom__encerrartrades";
    var vClose = ".tatica__conteudo__bottom__novostrades";
    var vAtivo = ".lktaticaEncerrarTrades";
    var vInativo = ".lktaticaNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto the big rocks for nasdaq
$('.lknasdaqNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".nasdaq__conteudo__bottom__novostrades";
    var vClose = ".nasdaq__conteudo__bottom__encerrartrades";
    var vAtivo = ".lknasdaqNovosTrades";
    var vInativo = ".lknasdaqEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto the big rocks for nasdaq
$('.lknasdaqEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".nasdaq__conteudo__bottom__encerrartrades";
    var vClose = ".nasdaq__conteudo__bottom__novostrades";
    var vAtivo = ".lknasdaqEncerrarTrades";
    var vInativo = ".lknasdaqNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre novos trades da tela referente ao produto indi
$('.lkindiNovosTrades').on('click', function () {
    // alert('novos trades');
    var vOpen = ".indi__conteudo__bottom__novostrades";
    var vClose = ".indi__conteudo__bottom__encerrartrades";
    var vAtivo = ".lkindiNovosTrades";
    var vInativo = ".lkindiEncerrarTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// abre encerrar trades da tela referente ao produto indi
$('.lkindiEncerrarTrades').on('click', function () {
    // alert('encerrar trades');
    var vOpen = ".indi__conteudo__bottom__encerrartrades";
    var vClose = ".indi__conteudo__bottom__novostrades";
    var vAtivo = ".lkindiEncerrarTrades";
    var vInativo = ".lkindiNovosTrades";
    openClose(vOpen, vClose, vAtivo, vInativo);
});

// função que abre novos trades e fecha encerrar trades e vice versa
function openClose(vOpen, vClose, vAtivo, vInativo) {
    $(vOpen).removeClass('hidden');
    $(vClose).addClass('hidden');
    $(vAtivo).addClass('ativo');
    $(vInativo).removeClass('ativo');
}