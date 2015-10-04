function newGame()
 {
  $('draw').removeAttribute('disabled');
  $('stop').removeAttribute('disabled');
  n=12;
  deck=[[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],['J',4],['Q',4],['K',4],['A',4]];
  dealer=[getCard()];
  player=[getCard(),getCard()];
  show();
 }

 
function draw()
 {
  player.push(getCard());
  show();
 }


function stop()
 {
  while(points(dealer)<17 && points(dealer)<=points(player))
    dealer.push(getCard());
  show();
  if (points(dealer)>21 || points(dealer)<points(player))
   alert('Поздравляю! Ты выиграл!');
  else if (points(dealer)==points(player))
   alert('Вах! да тут пуш');
  else 
   alert('Ты продул! Ололо!');
  $('draw').setAttribute('disabled','disabled');
  $('stop').setAttribute('disabled','disabled');
 }
 
 
function getCard()
 {
  var i=Math.round(Math.random()*n);
  --deck[i][1];
  card=deck[i][0];
  if (deck[i,1]==0)
   {  
    deck.splice(i,1);
	--n;
   }
  return card;
 }
 
 
function points(hand)
 {
  var p=0;
  for(var i=0; i<hand.length; ++i)
   {
    if (isNaN(hand[i]))
	 {
	  if (hand[i]=='A')
	   {
	    if (p<=10) p+=11;
	    else p+=1;
	   }
	  else p+=10;
	 }
	else p+=hand[i];
   }
  return p;
 }


 function show()
 {
  $('board').innerHTML='Ваши карты: '+player.join(', ')+'.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Карты дилера: '+dealer.join(', ');
  if (points(player)==21)
   { 
    alert('Блэкджек! Ух-ху-ху!');
	$('draw').setAttribute('disabled','disabled');
	$('stop').setAttribute('disabled','disabled');
   }
  if (points(player)>21)
   {
    alert('Ты продул! Ололо!');
	$('draw').setAttribute('disabled','disabled');
	$('stop').setAttribute('disabled','disabled');
   }
 }

 
function $(id)
 {
  return document.getElementById(id);
 }