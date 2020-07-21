$("#myInput").on("keyup",function(e){
    if(e.keyCode == 13 && $("#myInput").val() != ""){
        let tr = $("<tr></tr>");
        let td = $("<td></td>").toggleClass("col-md-12");
        let label = $("<label></label>");
        let value = ($("#myInput").val());
        let checkbox = $("<input/>").toggleClass("abcd").attr("type", "checkbox");
        let close = $("<span>x</span>").toggleClass("close").attr("style", "padding: 0px 5px;");
        tr.append(td.append(label.append(checkbox, value),close));
        $("#elementList").append(tr);  
        $("#myInput").val("");
        widthProgress();    
    }  
});
$(document).on("click",".abcd", widthProgress); 
$(document).on("click",".close", function(){
    $(this).parents('tr').fadeOut().remove();
    widthProgress();
});
function widthProgress(){
    let listChecked = $('#taskTable input:checked').length;
    let listTrB1 = $('#taskTable tbody tr').length;
    let progressB1 = listChecked/listTrB1*100;
    $("#percent").css("width", progressB1 + "%");
    $("#comp").text(Math.floor(progressB1) + "% complete");
    if(listTrB1 === 0){
        $("#percent").css("width", 0 + "%");
        $("#comp").text(Math.floor(0) + "% complete");
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
function checkAll(){
    let listCheckbox = $(this).parents('table').children('tbody').find("*").not("tr, td");
    listCheckbox.prop('checked', this.checked);
}
$("#check-all-left, #check-all-right").on("click", checkAll);
$("#go-to-right, #go-to-left").click(move);
function move(){
    let listMove =  $(this).parents('.col-md-6').children('.col-md-10').find('tbody input:checked');
    let not = $(this).parents('.col-md-6').find('.col-md-10 table');
    let locationMove = $(this).parents('.panel-body').find('.col-md-6 .col-md-10 table').not(not);
    listMove.prop("checked", false).parents('tr').remove().appendTo(locationMove);
}
function search(){
    let value = $(this).val().toLowerCase();
    let listName = $(this).parent().next().children('tbody').find('tr');
    listName.filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
}
$("[name='search-left'], [name='search-right']").on("keyup", search);