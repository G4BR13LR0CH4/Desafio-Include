var lista = document.getElementById('config_list')
var corpo = document.getElementById("idBody")
var cont = Number(cont)
var rot = Number(rot)
var list = ['<iframe width="600" height="400" src="https://www.youtube.com/embed/EAjLip9lCoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="600" height="400" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="600" height="400" src="https://www.youtube.com/embed/3jWRrafhO7M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ]
rot = 0
cont = 4

corpo.addEventListener('click', rotate)

function adcVideo() {
    var url = prompt("Descreva aqui a sua url:(cuidado com espaços vazios)")
    var titulo = prompt("Descreva aqui o seu titulo:")

    var aux = confirm(`A url do video é ${url} e o titulo é ${titulo} ` +
            `Tem certeza que deseja adicionar?`)

    if(aux == true && cont < 7) {
        var newdiv = document.createElement('div')
        var newp = document.createElement('p')
        var newimg = document.createElement('img')
        var divbtnadc = document.createElement('div')
        var pk

        divbtnadc.innerText = "watch"
        divbtnadc.className = "btno-2"
        pk = cont-1
        divbtnadc.onclick = function () {
            initVideo(pk)
        };
        newp.innerText = `00${cont} ${titulo}`
        newimg.src = '../static/images/pokebola icon2.png'
                
        newdiv.appendChild(divbtnadc)
        newdiv.appendChild(newimg)
        newdiv.appendChild(newp)
        lista.appendChild(newdiv)
        url = url.replace('watch?v=', 'embed/')
        url = `<iframe width="600" height="400" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        list.push(url)
        cont++
    } else
        alert("Operação cancelada: Essa operação foi cancelada manualmente ou ultrapassou o limite de itens na lista. (limite de 6 itens)")

    alert(url)
}

function atvBtn() {
    var btn = document.getElementById('btnAdc')
    btn.style.backgroundColor = 'orange'
}

function deactBtn() {
    var btn = document.getElementById('btnAdc')
    btn.style.backgroundColor = 'red'
}

function initVideo(pk) {
    var tela = document.getElementById('visor')

    tela.innerHTML = list[pk]
}

function rotate() {
    rot+=30
    var image = document.getElementById('idImg')
    image.style.transform = `rotate(${rot}deg)`
}