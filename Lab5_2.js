const input = document.querySelector('input');
input.addEventListener('keyup', AddList);

var list = document.querySelector('div');

function AddList(e){
    if(e.keyCode === 13){
        e.preventDefault(); 
        var icon = document.createElement('icon');
        icon.className = "fa fa-trash";
        var inp = document.getElementById('text').value;
        var li = document.createElement('div');

        li.appendChild(icon);
        li.appendChild(document.createTextNode(' ' + inp));
        list.appendChild(li);
    
        document.body.appendChild(li).classList.add('checked');
        document.getElementById('text').value='';
    
        icon.addEventListener('click', function() { 
            icon.parentElement.remove();
            list.classList.remove('checked'); 
        });
        
        li.addEventListener('click', function(){
            li.classList.add('writed');
    });
    }
}


