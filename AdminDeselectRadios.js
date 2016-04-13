$(document).ready(function () {

    var $radioButtons = $("input:radio");

    $radioButtons.filter(":checked").data("chk", true);

    $radioButtons.click(function () {
        if ($(this).parents('.InputfieldStateRequired').length) {
            return true;
        }
        $("input[name='" + $(this).attr("name") + "']:radio").not(this).removeData("chk");
        $(this).data("chk", !$(this).data("chk"));
        $(this).prop("checked", $(this).data("chk"));
    });
});
