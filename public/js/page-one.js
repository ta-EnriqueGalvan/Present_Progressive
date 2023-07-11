document.querySelector('.hide-page-1').addEventListener('click', function () {
    $(document.querySelector('.content-page-1')).fadeOut();
    //$('.content-page-2').removeClass('hide');
    //$('.content-page-2').addClass('show');
    document.querySelector('body').classList.replace('body-page-one', 'body-page-two');
});
document.querySelector('.hide-page-2').addEventListener('click', function () {
    $(document.querySelector('.content-page-2')).fadeOut();
    //$('.content-page-3').removeClass('hide');
    //$('.content-page-3').addClass('show');
    document.querySelector('body').classList.replace('body-page-two', 'body-page-three');
});