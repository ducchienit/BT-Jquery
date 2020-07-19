$("#myInput").on("keyup",function(e){

    if(e.keyCode == 13 && $("#myInput").val() != ""){
    var tr = $("<tr></tr>");
    var td = $("<td></td>").toggleClass("col-md-12");
    var label = $("<label></label>");
    var value = ($("#myInput").val());
    var checkbox = $("<input/>").toggleClass("abcd").attr("type", "checkbox").on("click", function(event){
        var listElement = $("#taskTable tbody tr td").length;
        event.target.classList.toggle('checked');
        var checkList = $(".checked").length;
        var percent = checkList/listElement*100;
        $("#percent").css("width", percent + "%");
        $("#comp").text(Math.floor(percent) + "%" + " " + "complete");
    });
    var close = $("<span>x</span>").toggleClass("close").attr("style", "padding: 0px 5px;").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
        p.remove();
        var listElement = $("#taskTable tbody tr td").length;
        var checkList = $(".checked").length;
        var percent = checkList/listElement*100;
        $("#percent").css("width", percent + "%");
        $("#comp").text(Math.floor(percent) + "%" + " " + "complete");
        if(listElement === 0){
            $("#percent").css("width", 0 + "%");
            $("#comp").text(Math.floor(0) + "%" + " " + "complete");
        }
        });
    });
    
    tr.append(td.append(label.append(checkbox, value),close));
    $("#elementList").append(tr);  
    $("#myInput").val("");
    }
    var listElement = $("#taskTable tbody tr td").length;
    var checkList = $(".checked").length;
    var percent = checkList/listElement*100;
    $("#percent").css("width", percent + "%");
    $("#comp").text(Math.floor(percent) + "%" + " " + "complete");
        
});
var width = 0;
var percent = 0;
var load = setInterval(loading, 500);
function loading() {
    width += 1;
    percent += 1;
    $("#percent2").css("width", width + "%");
    $("#comp2").text(percent + "%" + " " + "complete");
    if (width == 100 && percent == 100) {
        clearInterval(load);
    }
}
$("#check-all-left").on("click", function(){
    $('#tableleft input').prop('checked', this.checked); 
})
$("#check-all-right").on("click", function(){
    $('#tableright input').prop('checked', this.checked);
})
$("#go-to-right").click(function(){
    $("#tableleft input:checked").not("#check-all-left").each(function(){
        $(this).prop('checked', false).parents("TR").remove().appendTo("#tableright");
    })
})
$("#go-to-left").click(function(){
    $("#tableright input:checked").not("#check-all-right").each(function(){
        $(this).prop('checked', false).parents("TR").remove().appendTo("#tableleft");
    })
})
$("[name='search-left']").on("keyup", function(){
    var search = $(this).val().toLowerCase();
    $('#tableleft tbody tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1);
    })
})
$("[name='search-right']").on("keyup", function(){
    var search = $(this).val().toLowerCase();
    $('#tableright tbody tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1);
    })
})
$("[name='bai1']").next().hide();
$("[name='bai2']").next().hide();
$("[name='bai3']").next().hide();
$("[name='bai1']").click(function(){
    $(this).toggleClass('bai1');
    if($("[name='bai1']").hasClass("bai1")){
        $("[name='bai1']").next().show();
    } else{
        $("[name='bai1']").next().hide();
    }
})
$("[name='bai2']").click(function(){
    $(this).toggleClass('bai2');
    if($("[name='bai2']").hasClass("bai2")){
        $("[name='bai2']").next().show();
    } else{
        $("[name='bai2']").next().hide();
    }
})
$("[name='bai3']").click(function(){
    $(this).toggleClass('bai3');
    if($("[name='bai3']").hasClass("bai3")){
        $("[name='bai3']").next().show();
    } else{
        $("[name='bai3']").next().hide();
    }
})