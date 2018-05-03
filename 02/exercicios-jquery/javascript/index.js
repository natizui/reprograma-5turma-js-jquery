$(document).ready(function() {

    $('.botao').attr('style', 'background-color: green');
    // $('div').addClass('teste');
    
    $('.div-a').removeClass('teste');
    $('.div-a').addClass('link');

    $('p').click(function(){
        alert("conseguiu? :)")});

    var i = 0;
    $('.div-a').mouseenter(function() {
        $( "p:first", this ).text( "mouse enter" );
        $( "p:last", this ).text( ++i );
    })
    .mouseleave(function() {
        $( "p:first", this ).text( "mouse leave" );
        $('.zerar').text("clique para zerar");
    });

    $('.zerar').click(function () {
        $('.mouse').text("passe o mouse");
        $('.contador').text("0");
        i = 0;
        return i;
      })

    $('input').focus(function () {
        $(this).css('border-color', 'red');
      });
            
});