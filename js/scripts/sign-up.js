var signUpForm = (function ($) {

    var $signup = $('#signup');

    function removeAlert($this){
        if($this.find('.alert').length) {
            $('.alert').remove();
        }
    }

    $(document).on('show.bs.modal', function(){
        removeAlert($signup);
    });

    $('.js-sign-up').on('submit', function(e){
        e.preventDefault();

        var email = $('input[name="email"]').val(),
            name  = $('input[name="name"]').val(),
            dance = $('select[name="dance"]').val(),
            $this = $(this);

        removeAlert($signup);

        $.ajax({
            type: 'POST',
            url: 'emma.php',
            data: {
                'email': email,
                'name': name,
                'dance': dance
            },
            success: function (data) {
                var obj = JSON.parse(data);

                if (obj.status == 'a') {
                    $this.before('<div class="alert success">Success! Thank you!</div>');
                } else {
                    $this.before('<div class="alert error">We are sorry, there was an error with your submission.</div>');
                }
            },
            error: function (xhr) {
                $this.before('<div class="alert error">We are sorry, there was an error.</div>');
            }
        });
    });

}($));
