function myButtonFunction() {
    var text = document.getElementById('input').value;
    var ul = document.getElementById('output');
    var li = document.createElement('li');


    if (text.length > 0 && text !== " ") {
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);

    }
    document.getElementById('input').value = "";
}

function filter() {
    var select = document.getElementById('select').value;
    var all = 'all';
    var cape = 'cape town';
    var paarl = 'paarl';
    var bellville = 'bellville';
    var createdLi = document.getElementsByTagName('li');

    for (var i = 0; i < createdLi.length; i++) {
        var playList = createdLi[i];
        var x = createdLi[i].textContent.toUpperCase();
        if (select === cape && x.startsWith('CA')) {
            playList.style.display = 'block';
        } else if (select === paarl && x.startsWith('CL')) {
            playList.style.display = 'block';
        } else if (select === bellville && x.startsWith('CY')) {
            playList.style.display = 'block';
        } else if (select === all) {
            playList.style.display = 'block';
         }
        else {
            playList.style.display = 'none';
        }
    }
}
