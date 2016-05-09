$(document).ready(function () {
    $('article li').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('checked');
    });
});
