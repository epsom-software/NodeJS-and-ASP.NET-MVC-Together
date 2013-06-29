///<reference path='Definitions\jquery.d.ts'/>
$(document).ready(function () {

    var $selectors = $("input[type=radio], input[type=checkbox]");

    function setupInputs() {
        $selectors.each(function () {

            var $selector = $(this);
            var $label = $("label[for=" + $selector.attr("id") + "]");

            if (this.checked) {
                $label.addClass("on");
            } else {
                $label.removeClass("on");
            }
        });
    }

    $selectors.change(setupInputs);
    setupInputs();
});