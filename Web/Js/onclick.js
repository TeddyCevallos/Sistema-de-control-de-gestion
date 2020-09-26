'use strict'

window.addEventListener('load', function() {

    var back = document.querySelector('#back');
    var submenu = document.querySelector('#submenu');
    var btn_menu = document.querySelector('#icono');

    submenu.style.display = 'none';
    back.style.display = 'none';

    btn_menu.addEventListener('click', function() {
        back.style.display = 'block';
        submenu.style.display = 'block';

    });
});
window.addEventListener('load', function() {

    var noticia = document.querySelector('#noticia');
    var solicitud = document.querySelector('#solicitud');
    var back = document.querySelector('#back');
    var submenu = document.querySelector('#submenu');
    var menu = document.querySelector('#icono');

    submenu.style.display = 'none';
    back.style.display = 'none';
    noticia.style.display = 'none';

    solicitud.addEventListener('click', function() {
        noticia.style.display = 'block';
        back.style.display = 'block';
        submenu.style.display = 'none';
    });

    menu.addEventListener('click', function() {
        noticia.style.display = 'none';
    });
});
window.addEventListener('load', function() {

    var noticia = document.querySelector('#noticia');
    var back = document.querySelector('#back');
    var submenu = document.querySelector('#submenu');
    var menu = document.querySelector('#icono');
    var añadir = document.querySelector('#añadir');
    var opt_agregar = document.querySelector('#agregar');
    var consulta = document.querySelector('#consulta');
    var opt_consultar = document.querySelector('#consultar');
    var editar = document.querySelector('#editar');
    var opt_edit = document.querySelector('#edit');
    var ver_editar = document.querySelector('#ver_editar');
    var edit_file = document.querySelector('#edit_file');


    submenu.style.display = 'none';
    back.style.display = 'none';
    noticia.style.display = 'none';
    añadir.style.display = 'none';
    consulta.style.display = 'none';
    editar.style.display = 'none';
    ver_editar.style.display = 'none';


    menu.addEventListener('click', function() {
        noticia.style.display = 'none';
        añadir.style.display = 'none';
        consulta.style.display = 'none';
        editar.style.display = 'none';

    });
    opt_agregar.addEventListener('click', function(){
        submenu.style.display = 'none';
        añadir.style.display = 'block';

    });
    opt_consultar.addEventListener('click', function(){

        submenu.style.display = 'none';
        consulta.style.display = 'block';
    });
    opt_edit.addEventListener('click', function(){
        editar.style.display = 'block';
        submenu.style.display = 'none';

    });
});
