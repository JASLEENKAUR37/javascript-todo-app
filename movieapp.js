

 var list = document.querySelector('#movie-list ul');

 list.addEventListener('click', function(e){
   if(e.target.className === 'delete'){
  
     var li = e.target.parentElement;     
     
     list.removeChild(li);

   }
 })



var hide=document.getElementById('hide');
hide.addEventListener('click',function(e){
    if(hide.checked == true){
        list.hidden= true;
    }else if(hide.checked == false){
        list.hidden= false;
    }
});



var form = document.forms['add-movie'];
form.addEventListener('submit',function(e){
    
    e.preventDefault();
    
    var vall=form.querySelector('input[type="text"]').value;
    
    var li=document.createElement('li');
    
    var muvi=document.createElement('span');
    
    var del=document.createElement('span');
    
    li.appendChild(muvi);
    li.appendChild(del);
    list.appendChild(li);

    muvi.textContent = vall;
    del.textContent = 'delete';
    
    muvi.classList.add('name');
    del.classList.add('delete');
    

});



var searchMovie = document.querySelector('input[type="text"]');
searchMovie.addEventListener('keyup',function(e){
    var fltr = searchMovie.value.toUpperCase();
    var list= document.querySelector('#movie-list ul');
    var fullli = list.querySelectorAll('li');
    var li = list.querySelectorAll('li .name');
     for(i=0;i<li.length;i++){
        var a=li[i].textContent;
        var txtvalue = a.toUpperCase();
         if(txtvalue.indexOf(fltr) > -1){
            fullli[i].style.display = "";
        }else{
            fullli[i].style.display = "none";
        }
    }
});