function expand() {
    $(this).next('div').slideToggle();
}

$(document).ready(function () {
    $(document).on('click', 'button', expand);
});