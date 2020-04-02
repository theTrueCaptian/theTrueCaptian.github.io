/**
 * Created by mh4047 on 4/28/15.
 */

 /*var currentPage = $("nav")[0];*/

function loadPage(link){
}

function setPage(link, index){
    $(".nav .button").removeClass("clicked");
    $(".nav .button:eq(" + index+ ")").addClass("clicked");
    $("#dynamic-content" ).load( link );
}



$(document).ready(function(){
    setPage("partial/projects.html",0);
});
