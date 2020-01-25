var inputData = document.querySelector("input[type='text']");
var ulSpisok = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var meBtn = document.getElementById("me");
var lists = document.getElementsByTagName("li");
var text = document.getElementsByTagName("h1")
var pAll = document.getElementsByTagName("p");
var pLists = document.getElementsByClassName("valueLi");
var container = document.getElementById('form-container');
var form = document.getElementById('blok');




function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
};

function performed() {
    for (let pLists of pAll) {
        pLists.addEventListener('click', function() {
          pLists.style.textDecoration = "line-through";
          event.stopPropagation();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('TodoAppLication')){
        ulSpisok.innerHTML = localStorage.getItem('TodoAppLication');
    }
    deleteTodo();
};


inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){   
        if (this.value != ' ') {
    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
    newSpan.innerHTML = 'Удалить';
    var newPdata = document.createElement("h1");
    var newPstyle = document.createElement("p");
    newPstyle.innerHTML = this.value;
    var newSpanTodo  = this.value;
    newPstyle.className = "valueLi";
    var newTodo = this.value;
    this.value = " ";


    var newData = new Date();
    var curr_date = newData.getDate();
    var curr_month = newData.getMonth() + 1;
    var curr_year = newData.getFullYear();

    var newP = curr_date + "-" + curr_month + "-" + curr_year;
    newPdata.innerHTML = newP;

    ulSpisok.appendChild(newLi).append(newSpan) + newLi.append(newPstyle) + newLi.append(newPdata);

    deleteTodo();
    performed();
        
        }
    }
});


saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoAppLication', ulSpisok.innerHTML);
})


clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = " ";
    localStorage.setItem('TodoAppLication', ulSpisok.innerHTML);
});


deleteTodo();

performed();

loadTodo();



function divShadow() {
    var newShadow = document.createElement('div');
    newShadow.id = 'newShadow';
    document.body.style.overfloyY = 'hidden';
    document.body.appendChild(newShadow);
  };
  function clearShadow() {
    document.getElementById('newShadow').remove();
    document.body.style.overfloyY = ' ';
  }
  function showModal() {
    divShadow();
    form.innerHTML = '<p>Юзенков Эльдар Михайлович</p><button id="exitBtn">Закрыть</button>';
    var exitBtn = document.getElementById("exitBtn");
    container.style.display = 'block';
  
    exitBtn.onclick = function() {
      clearShadow();
      container.style.display = 'none';
    };
  };
  meBtn.addEventListener('click', function(){
    showModal();
  });
  
  function flexStyle() {
    var style = document.createElement('style');
    style.innerHTML = `
      #todo_app {
        display: flex;
        flex-direction: column;
      }
      button:hover {
        background-color: green;
        cursor: pointer;
        color: white;
      }
    `;
    document.head.appendChild(style);
  }
  
  flexStyle();
  
