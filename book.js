// Configuations
var RESERVATION_NAME = '陳詮之';
var RESERVATION_EMAIL = 'accu0989@gmail.com';
var RESERVATION_PHONE = '0989561957';
var RESERVATION_PEOPLE = '2';
var RESERVATION_DATE = '2016-07-17';
var RESERVATION_TIME = '19:00';

// Setup environment
function waitUntilNoon() {
    if (Date.now().getHours() >= 11 && Date.now().getSeconds() >= 1) {
        christopherSays('It\'s time!');
        $('#submit-btn').click();
    } else {
        christopherSays('Not yet, current time ' + moment().format('hh:mm:ss'));
        setTimeout(waitUntilNoon, 1000);
    }
}

function christopherSays(message) {
    $('#Christopher').html(message);
    console.log('[Christopher]: ' + message);
}

// Fill in necessary fields
$('#reservation_form').removeClass('inactive');
$('#name').val(RESERVATION_NAME);
$('#email').val(RESERVATION_EMAIL);
$('#phone').val(RESERVATION_PHONE);
$('#readable_date').val(RESERVATION_DATE);
$('#people').val(RESERVATION_PEOPLE);
$('#quota_unavailable_message').hide();
$('#quotas').html(
    $('<li id="datetime">' + RESERVATION_TIME + '</li>')
    .data('time', RESERVATION_TIME)
    .data('prepay_required', false)
    .data('premium', false)
    .data('premium_products', false)
    .data('datetime', RESERVATION_DATE + ' ' + RESERVATION_TIME)
    .data('plan_id', 0)
    .addClass('reservation-btn')
);
$('li#datetime').click();
$('body').append(
    $('<div></div>')
    .css('position', 'fixed')
    .css('left', '10px')
    .css('bottom', '10px')
    .css('z-index', '1000')
    .css('padding', '5px')
    .css('border', '1px solid gray')
    .css('border-radius', '5px')
    .css('background-color', 'white')
    .append($('<span>Christopher : </span>'))
    .append($('<span id="Christopher"></span>').css('color', 'gray'))
);

// Start looper
setTimeout(waitUntilNoon, 1000);