function checkInput() {
    $('input').focusout(function() {
        if ($(this).is(":invalid")) {
            if ($(this).siblings("label.bottom").hasClass('show')) {
                return;
            }
            $(this).siblings("label.bottom").toggleClass('show');
        } else {
            if ($(this).siblings(".bottom").hasClass('show')) {
                console.log('tidak ada');
                $(this).siblings(".bottom").toggleClass('show');
            }
        }
    });
}

$(document).ready(function() {
    checkInput();

    $("form").submit(function(e) {
        e.preventDefault();
        $('body').css("background-color", $('body').css('background-color'));
        $('body').css("animation-name", 'none');
        $('input[type="submit"]').attr('disabled', true);

        if ((!$('input[type="text"]').val == '') && (!$('input[type="password"]').val == '')) {
            $('label.bottom').removeClass('show');
        }
        if ($("input[type='text']").val() == 'ip22' && $("input[type='password']").val() == 'awokowa') {
            var awokwoa = setInterval(function() {
                var awokwoa1 = setInterval(function() {
                    var awokowa2 = setInterval(function() {
                        $('body').css("animation-name", 'latarBelakang');
                        $('input[type="submit"]').attr('disabled', false);
                        clearInterval(awokowa2);
                    }, 500);

                    $('body').css("background-color", $('body').css('background-color'));
                    clearInterval(awokwoa1);
                }, 3000);
                $('body').css('background-color', 'rgba(53, 53, 240, 0.897)');
                $('.heading p').removeClass('checking');
                $('.heading p').html('Login Berhasil');
                $('.heading p').addClass('success');
                clearInterval(awokwoa);
            }, 2000);
            if ($('.heading p').hasClass('failed')) {
                $('.heading p').removeClass('failed');
            }

        } else if (!$("input[type='text']").val() == '' || $("input[type='password']").val() == '') {
            var awokwoa = setInterval(function() {
                var awokwoa1 = setInterval(function() {
                    var awokowa2 = setInterval(function() {
                        $('body').css("animation-name", 'latarBelakang');
                        $('input[type="submit"]').attr('disabled', false);
                        clearInterval(awokowa2);
                    }, 500);
                    $('body').css("background-color", $('body').css('background-color'));

                    clearInterval(awokwoa1);
                }, 3000);
                $('body').css('background-color', 'rgba(247, 35, 35, 0.719)');

                $('.heading p').removeClass('checking');
                $('.heading p').html('Login Gagal');

                $('.heading p').addClass('failed');
                clearInterval(awokwoa);

            }, 2000);
            if ($('.heading p').hasClass('success')) {
                $('.heading p').removeClass('success');
            }
        }
        $('.heading p').html('checking');
        $('.heading p').addClass('checking');
    });


});