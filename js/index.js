function result(){
    var a=document.getElementById('opt').value;
    switch(a){
        case 'A':var p=Number(document.getElementById('n1').value);
                 var q=Number(document.getElementById('n2').value);
                 document.getElementById('ans').innerHTML=p+q;
                 document.querySelector('img').src="img/2.jpg";
                 break;
        case 'S':var p=Number(document.getElementById('n1').value);
                 var q=Number(document.getElementById('n2').value);
                 document.getElementById('ans').innerHTML=p-q;
                 document.querySelector('img').src="img/3.png";
                 break;
        case 'M':var p=Number(document.getElementById('n1').value);
                 var q=Number(document.getElementById('n2').value);
                 document.getElementById('ans').innerHTML=p*q;
                 document.querySelector('img').src="img/4.jpg";
                 break;
        case 'D':var p=Number(document.getElementById('n1').value);
                 var q=Number(document.getElementById('n2').value);
                 document.getElementById('ans').innerHTML=p/q;
                 document.querySelector('img').src="img/3.png";
                 break;

    }
    alert('are u sure!');
}
