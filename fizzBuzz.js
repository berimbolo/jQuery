function fizzBuzz(x) {
    var str = '';
    if (x % 3 === 0) {
        str += 'Fizz';
    }
    if (x % 5 === 0) {
        str += 'Buzz';
    }
    if (str.length < 1) {
        str = x;
    }
    return (str);
}

function appendFizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        var out = fizzBuzz(i);
        $('p').append(out + '<br>');
    }
}

function clearNum(){
    $('p').empty();
}

function enterNum() {
    var num = $('#data').val();
    if (num === "") {
        alert('You did not enter a item');
    } else if (isNaN(num)) {
        alert('You did not enter a number');
    } else {
        clearNum();
        appendFizzBuzz(num);
        $('#data').val('');
    }
}

$(document).ready(function () {
    $(document).on('click', '#add', enterNum);
    $(document).on('click', '#clear', clearNum);
});