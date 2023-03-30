var current = 1;
var playing = 1;
var cc = 0;

$('button').click(function(){
    $('h1').text('Tic Tac Toe');
    $('.grid div').removeClass('orange red')
    $('.grid div').addClass('gray');
    $('.grid div').text('');
    playing = 1;
    current = 1;
    cc = 0;
    console.log(cc);
})

$('.grid div').click(function(){
    if($(this).text()==='' && playing){
        if(current){
            $(this).text('O');
            $(this).removeClass('gray');
            $(this).addClass('orange');
            current = 0;
        }else{
            $(this).text('X');
            $(this).removeClass('gray');
            $(this).addClass('red');
            current = 1;        
        }        
    }

    
    var a = $('#a').text();
    var b = $('#b').text();
    var c = $('#c').text();
    var d = $('#d').text();
    var e = $('#e').text();
    var f = $('#f').text();
    var g = $('#g').text();
    var h = $('#h').text();
    var i = $('#i').text();

    cc += check(a,b,c);
    cc += check(d,e,f);
    cc += check(g,h,i);
    cc += check(a,d,g);
    cc += check(b,e,h);
    cc += check(c,f,i);
    cc += check(a,e,i);
    cc += check(c,e,g);
    console.log(cc);
    if((cc===0) && a!=="" && b!=="" && c!=="" && d!=="" && e!=="" && f!=="" && g!=="" && h!=="" && i!==""){
        $('h1').text('平手');
        }
    })
function check(x,y,z){
    if(x==y && y==z && x!==''){
        $('h1').text(x+'獲勝');
        playing = 0;
        return 1;
    }else{
        return 0;
    }
}









