var form_search = document.getElementById('form-search');
var input_search = document.getElementById('input-search');
var div_results = document.getElementById('results');
var search_spinner = document.getElementById('search-spinner');

form_search.addEventListener('submit', function(e){
    div_results.innerHTML = "";
    search_spinner.classList.add('spinner-border');
    var search_value = input_search.value;
    if(search_value){
        fetch('/trainings/search/'+search_value)
            .then(function(res){
                res.json().then(function(data){
                    display_exercise(data);
                })
            })
    }
});
function display_exercise(data){
    search_spinner.classList.remove('spinner-border');
    if (data[0]) {
        for (var i = 0; i < data.length; i++) {
            var label = document.createElement('label');
            var row = document.createElement('div');
            var btn_add = document.createElement('button');
            label.innerText = data[i].title;
            btn_add.innerText = "add";

            btn_add.classList.add('btn-no-style');
            row.classList.add('row');
            btn_add.classList.add('ml-2');
            label.classList.add('col-lg-12');
            label.classList.add('text-center');
            btn_add.classList.add('col-lg-12');

            btn_add.id = "btn_add_"+i;
            label.htmlFor = "btn_add_"+i;

            row.dataset.exercise_id = data[i].id;
            btn_add.dataset.exercise_id = data[i].id;
            label.dataset.exercise_id = data[i].id;

            row.appendChild(label);
            row.appendChild(btn_add);
            div_results.appendChild(row);

            btn_add.addEventListener('click', function(e){
                add_exercise(e);
            });

        }
    }
}

function add_exercise(e) {
    id_exercise = e.target.dataset.exercise_id;
    let params = new URLSearchParams(location.search);
    id_training = params.get('id');
    fetch('/trainings/add_exercise?id_exercise='+id_exercise+'&id_training='+id_training)
        .then(function(res){
            res.json.then(function (data) {
                console.log(data);
            })
        })
}