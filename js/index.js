    // Update the launch date to March 1, 2024
    var launchDate = new Date('March 1, 2024 00:00:00').getTime();

    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = launchDate - now;

        if (distance > 0) {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = 'Countdown to Launch: ' +
                days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
        } else {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'EXPIRED';
        }
    }, 1000);

    function callUs() {
        window.location.href = 'tel:+2348164551548';
    }

    function emailUs() {
        window.location.href = 'mailto:nucsinfos@gmail.com';
    }