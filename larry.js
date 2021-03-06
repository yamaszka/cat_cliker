//MODEL
    createCat: function Cat(name, url, alt) {
        this.name = name;
        this.url = url;
        this.alt = alt;
        this.click = 0;
    };

    //create cats objects
    const cat1 = new Cat('Fredzio', 'cat1.jpg', 'beautiful cat');
    const cat2 = new Cat('Bąbel', 'cat2.jpg', 'cude cat');
    const cat3 = new Cat('Mruczek', 'cat7.jpg', 'cude cat');
    const cat4 = new Cat('Murzyn', 'cat4.jpg', 'cude cat');
    const cat5 = new Cat('Franciszek', 'cat5.jpg', 'cude cat');
    const cat6 = new Cat('Kleopatra', 'cat6.jpg', 'cude cat');

    var cats = [cat1, cat2, cat3, cat4, cat5, cat6];
    var files = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg', 'cat6.jpg', 'cat7.jpg', 'cat8.jpg', 'cat9.jpg', 'cat10.jpg', 'cat11.jpg', 'cat12.jpg']
//MODEL end

//larry

    function setCurrentCat(cat) {
        currentCat = cat;
    };

    function count_click(cat){
        cat.click++;
    };
//admin panel clicking save button
    function data(){
        var name = document.getElementById("name").value;
        var url = document.getElementById("url").value;
        var des = document.getElementById("des").value;
            if ((name=="")||(url=="")||(des=="")){
                var message = "<span style='color: red;'>wypełnij wszystkie pola</span>";
                document.getElementById("message").innerHTML = message;
                return;
            }//if
            //remove red message
        document.getElementById("message").innerHTML = '';
        const new_cat = new Cat(name, url, des);
        cats.push(new_cat);
        setCurrentCat(new_cat);
        render_current_cat();
        render_cats();
    }
//can not be in render_current_cat happen too many times, huge problem with counting
    var bestCat = document.getElementById('bestCat');
    bestCat.addEventListener('click', function(){
        count_click(currentCat);
        render_click(currentCat);
        });

    render_cats();
    init();

//larry end
//
//view
    //render cats
    function render_cats() {
        var elem, image;
        var table = document.getElementById('table');
//cleaning for update after admin save
         table.innerHTML = "";
        for (var i = 0; i < cats.length; i++) {
         if (i%2===0) {
         var newRow = table.insertRow(0);
            }
     var newCell1 = newRow.insertCell(0);
     var cat_name =  document.createElement('h5');
     cat_name.textContent = cats[i].name;
     newCell1.appendChild(cat_name);
     image = document.createElement('img');
     image.setAttribute("src", "foto/"+cats[i].url);
     image.setAttribute("height", "120px");
     newCell1.appendChild(image);
     var cat=cats[i];
//this let sent variable to evet listener??
     newCell1.addEventListener('click', (function(catCopy) {
         return function() {
             setCurrentCat(catCopy);
             render_current_cat();
         };
     })(cat));
        }//for
        console.log('render_cats');
    }//render_cats

    function render_current_cat() {
    var bestCat = document.getElementById('bestCat');
    bestCat.innerHTML = "";
    var cat_name =  document.createElement('h2');
    cat_name.textContent = currentCat.name;
    image = document.createElement('img');
    image.setAttribute("src", "foto/"+currentCat.url);
    image.setAttribute("max-height", "300px");
    bestCat.appendChild(cat_name);
    bestCat.appendChild(image);
    render_click(currentCat);

    //HERE IT SHOUD NOT BE ADD THE COUNTING IS WORK TO MUCH
    // bestCat.addEventListener('click', function(){
    //     count_click(currentCat);
    //     render_click(currentCat);
    //     console.log(currentCat);
    //     console.log('basia');
    //});
}//render_current_cat

//render click amount
    function render_click(cat){
        var number = document.getElementById('number');
        number.innerHTML = cat.click;
    }

//init admin part
    function init(){
        var form = document.getElementById('invisible');
        form.style.display="none";
        var fotos = document.getElementById('files');
        fotos.style.display="none";
//adding choosing foto panel
        for (var i = 0; i < files.length; i++) {
        image = document.createElement('img');
        image.setAttribute("src", "foto/"+files[i]);
        image.setAttribute("height", "120px");
        fotos.appendChild(image);
        var file = files[i];
//clik na foto, set value in input file, sending value to event listener
        image.addEventListener('click', function(e) {
            return function() {
                document.body.style.backgroundColor = "rgba(0,0,0,0)";
                fotos.style.display="none";
                var url = document.getElementById("url");
                url.value = e;
               };
           }(file));//addevent
       }//for
       //display foto panel when focus the urlinput
        var focus = document.getElementById("url");
        focus.addEventListener('focus', function(){
            document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
            fotos.style.display="block";
        });//eventListener
//eventlisteners for admin buttons
        var admin = document.getElementById('admin');
        var save = document.getElementById('save');
        admin.addEventListener('click', function(){
            form.style.display="block";
            add_cancel_listener()
        });//eventListener
        save.addEventListener('click', function(){
            data();
            form.style.display="none";
        });//eventListener
    }//init

    //add event listener for cancel
    function add_cancel_listener(){
        var cancel = document.getElementById('cancel');
        var form = document.getElementById('invisible');
        cancel.addEventListener('click', function(){
            document.getElementById("message").innerHTML = "";
            form.style.display="none";
        });//eventListener
    }
