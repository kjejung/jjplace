$(document).ready(function () {
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#sidebar, #toggleSidebarButton').length) {
            $('#sidebar').css('right', '-200px');
            $('.hd-btn-box').removeClass('clicked');
        }
    });

    $('.hd-btn-box').click(function () {
        $(this).toggleClass('clicked');
    });

    $('#toggleSidebarButton').click(function () {
        $('#sidebar').css('right', function (index, value) {
            return value === '-200px' ? '0' : '-200px';
        });
    });

    $('#btnChngStyleSheet1').click(function () {
        $('#styleSheet').attr('href', 'style2.css');
    });

    $('#btnChngStyleSheet2').click(function () {
        $('#styleSheet').attr('href', 'style1.css');
    });
});
