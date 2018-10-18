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
    const cat3 = new Cat('Mruczek', 'cat3.jpg', 'cude cat');
    const cat4 = new Cat('Murzyn', 'cat4.jpg', 'cude cat');
    const cat5 = new Cat('Franciszek', 'cat5.jpg', 'cude cat');
    const cat6 = new Cat('Kleopatra', 'cat6.jpg', 'cude cat');
//MODEL end

//larry
    // var current_cat = cat1;
    var cats = [cat1, cat2, cat3, cat4, cat5, cat6];
    function setCurrentCat(cat) {
        currentCat = cat;
    };


    render_cats();




//larry end
//
//view
    function render_cats() {
        var elem, image;

        for (var i = 0; i < cats.length; i++) {

     var table = document.getElementById('table');
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
     console.log(cat);
     //do not work show render current cat immidiately
 //     newCell1.addEventListener('click', (function(cat) {
 //     setCurrentCat(cat);
 //     render_current_cat();
 //     console.log(cat);
 // })(cat));
 //mistery of this app :-) do not understand hoe that work!!!
     newCell1.addEventListener('click', (function(catCopy) {
         return function() {
             setCurrentCat(catCopy);
             render_current_cat();
             console.log(newCell1);
             console.log(catCopy);
         };
     })(cat));
        }//for
    }//render_cats

    function render_current_cat() {
    var bestCat = document.getElementById('bestCat');
    bestCat.innerHTML = "";
    var cat_name =  document.createElement('h2');
    cat_name.textContent = currentCat.name;
    image = document.createElement('img');
    image.setAttribute("src", "foto/"+currentCat.url);
    bestCat.appendChild(cat_name);
    bestCat.appendChild(image);
    }
//VIEW end







// var larry = {
//     cats: [cat1, cat2, cat3, cat4, cat5, cat6],
//     //show view_cats
//     render_cats: function(cat){
//         var tekst = '';
//         var countTR = 1;//viarable for <tr> only
//
//         //wprowadza znacznik <tr>
//             countTR+=1;
//             if (countTR%2!==0) {
//                 tekst+=`<tr>`
//             }//if
//
// // cats = larry.create_cats();
//
//             tekst += `
//             <td id="`+cat.url.substr(0,4)+`"><h5>`+cat.name+`</h5><img src = "`+cat.url+`"
//                  alt = "`+cat.alt+`"
//                  height="120px"
//                  </td>
//             `;//var tekst
//         //wprowadza znacznik <tr>
//             if (countTR%2===0) {
//                 tekst+=`</tr>`
//             }//if
//             return tekst;
//
// },//render cats
//     init_cats: function(){
//         this.cats.forEach(this.render_cats);
//     }//init cats
// };//larry
//
// var view_cats = {
//
// }//view_cats
//
// var view_OneCat = {
//
// };//view OneCat
//
// larry.init_cats();
