var mmenu = document.querySelector('.menu-row')
var display = 0;
function menu_button(){
    if(display== 1){
        mmenu.style.display = 'block';
    display = 0;
    }
    else{
        mmenu.style.display = 'none';
        display = 1;
    }
}
var searchbar = document.querySelector('#src_contant')
function searchbtn(){
    if(display== 1){
        searchbar.style.display = 'block';
    display = 0;
    }
    else{
        searchbar.style.display = 'none';
        display = 1;
    }
}

