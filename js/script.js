$("#myInput").on("keyup",function(e){
    if(e.keyCode == 13 && $("#myInput").val() != ""){
        let html = "";
        html += "<tr><td><input type='checkbox' class='abcd'>" + $("#myInput").val() + "<span class='close' style='float: right;padding: 0px 5px'>x</span></td></tr>";
        $("#elementList").append(html);
        $("#myInput").val("");
        widthProgress();    
    }
});
$(document).on("click",".abcd", widthProgress); 
$(document).on("click",".close", function(){
    $(this).parents('tr').remove();
    widthProgress();
});
function widthProgress(){
    let listChecked = $('#taskTable input:checked').length;
    let listTrB1 = $('#taskTable input').length;
    let progressB1 = listChecked/listTrB1*100;
    $("#percent").css("width", progressB1 + "%");
    $("#comp").text(Math.floor(progressB1) + "% complete");
    if(listTrB1 === 0){
        $("#percent").css("width", 0 + "%");
        $("#comp").text(0 + "% complete");
    };
};
let width = 0;
let load = setInterval(loading, 500);
function loading() {
    width += 1;
    $("#percent2").css("width", width + "%");
    $("#comp2").text(width + "% complete");
    if (width == 100) {
        clearInterval(load);
    }
}
$("#check-all-left, #check-all-right").on("click", function(){
    $(this).parents().eq(3).find('input').prop('checked', this.checked);
});
$("#go-to-right, #go-to-left").click(function(){
    let listMove =  $(this).parent().parent().find('.itemcheck:checked').parent().parent();
    let idMove = $(this).data('moveto');
    let locationMove = $("#" + idMove).parent().parent().find("tbody");
    listMove.remove().appendTo(locationMove);
    locationMove.find("input").prop("checked", false);
});
$("input[name='search-left'], input[name='search-right']").on("keyup", function(){
    let value = $(this).val().toLowerCase();
    let listName = $(this).parent().next().children('tbody').find('tr');
    listName.filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});