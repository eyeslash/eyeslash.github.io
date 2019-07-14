$('#countdown').countdown('2019/12/31', function(event) {
  $(this).html(
    event.strftime(
      '<div class= "days" > \
            <div class="c-number">' +
        '%D' +
        '</div>days</div > \
            <div class="hours"> \
          <div class="c-number">' +
        '%H' +
        '</div>hours</div> \
            <div class="minutes"> \
          <div class="c-number">' +
        '%M' +
        '</div>minutes</div> \
            <div class="seconds"> \
          <div class="c-number">' +
        '%S' +
        '</div>seconds</div> \
            <div class="left">LEFT</div>\
        </div >'
    )
  );
});
