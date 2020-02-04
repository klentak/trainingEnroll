var btn_add_training = document.getElementById('btn-add-training');
let list_elem = document.getElementsByClassName('list-elem btn-no-style mt-2');
var cont_add = document.getElementById('cont-add');
var btn_add_exercise = document.getElementById('btn-add-exercise');
var div_exercise = document.getElementById('exercises');
var training_name = document.getElementById('training-name');
var a_edit = document.getElementById('a-edit');
var search_spinner = document.getElementById('search-spinner');

var id;

for(var i = 0; i<list_elem.length; i++) {
    list_elem[i].addEventListener('click', function (e) {
        training_name.innerText = e.target.textContent;
        search_spinner.classList.add('spinner-border');
        btn_add_exercise.classList.add('d-none');
        div_exercise.innerHTML = "";
        id = e.target.dataset.id;
        load_training();
    });
}

btn_add_training.addEventListener('click', function(e){
    cont_add.classList.remove("d-none");
    e.target.classList.add("d-none");
});

function load_training(){
    fetch(window.location.href+"/"+id+"/load")
        .then( function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
        })
}

function exercises(data){
    btn_add_exercise.classList.remove('d-none');
    a_edit.href = window.location.href+'/edit?id='+id;
    search_spinner.classList.remove('spinner-border');
    if(data[0]){

    }else{
        var h4 = document.createElement('h4');
        h4.innerText = "You dont have any exercises, add them bellow.";
        div_exercise.innerHTML = "";
        div_exercise.appendChild(h4);
    }
}