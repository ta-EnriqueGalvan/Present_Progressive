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
document.querySelector('.hide-page-3').addEventListener('click', function () {
    $(document.querySelector('.content-page-3')).fadeOut();
    //$('.content-page-3').removeClass('hide');
    //$('.content-page-3').addClass('show');
    document.querySelector('body').classList.replace('body-page-three', 'body-page-four');
});
response = '<span class="text-muted">That is right!</span><br><br><button type="button" class="btn btn-info text-light hide-page-4">Ending <i class="bi bi-arrow-right"></i></button>';
document.querySelector('.answer').addEventListener('click', function () {
  document.querySelector('.response').innerHTML = response;
    document.querySelector('.hide-page-4').addEventListener('click', function () {
        $(document.querySelector('.content-page-4')).fadeOut();
        //$('.content-page-3').removeClass('hide');
        //$('.content-page-3').addClass('show');
        document.querySelector('body').classList.replace('body-page-four', 'body-page-five');
    });
})
