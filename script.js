setInterval(() =>{
    var titles = ['Titouan BUTÔT', 'Discord bots developper', 'Front end developper']
    var title = titles[Math.floor(Math.random() * titles.length)]
    document.title = title
}, 1000)