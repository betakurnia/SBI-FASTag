$(document).ready(function () {
    $("#existingCust").hide();
    $("#newCust").hide();
    $("#existingAcHolder").click(function () {
        var newCustActive = $(".tab-pane.active");
        $("#newCust").hide();
        $("#existingCust").show("slow");
        $("#newCust").hide("slow");
    });
    $("#newCustomer").click(function () {
        $("#existingCust").hide();
        $("#newCust").show("slow");
        $("#existingCust").hide();
    });
    $('.btn-group-example button').on('click', function(){
        $(this).addClass('active');
        $('.btn-group-example button').not(this).removeClass('active');
    });
});