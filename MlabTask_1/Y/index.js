$("input[name=theme]").change(function(){
    if (this.checked) {
        $('html').attr("data-theme","light");
    }
    else {
        $('html').attr("data-theme","dark");
    }
});