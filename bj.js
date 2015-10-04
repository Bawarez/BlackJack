function newGame()
 {
  $('draw').removeAttribute('disabled');
  $('stop').removeAttribute('disabled');
  $('player').innerHTML='<h2>Ваши карты</h2>';
  $('dealer').innerHTML='<h2>Карты дилера</h2>';
  n=12;
  deck=[[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],['J',4],['Q',4],['K',4],['A',4]];
  dealer=[getCard(dealer)];  
  show('dealer');
  player=[];
  for (var i=1; i<3; ++i)
   {
    player.push(getCard(player));
    show('player');
   }
 }

 
function draw()
 {
  player.push(getCard(player));
  show('player');
 }


function stop()
 {
  while(points(dealer)<17 && points(dealer)<=points(player))
    dealer.push(getCard(dealer));
  show('dealer');
  if (points(dealer)>21 || points(dealer)<points(player))
   alert('Поздравляю! Ты выиграл!');
  else if (points(dealer)==points(player))
   alert('Вах! да тут пуш');
  else 
   alert('Ты продул! Ололо!');
  $('draw').setAttribute('disabled','disabled');
  $('stop').setAttribute('disabled','disabled');
 }
 
 
function getCard(hand)
 {
  var i=Math.round(Math.random()*n);
  --deck[i][1];
  card=deck[i][0];
  if (deck[i][1]==0)
   {  
    deck.splice(i,1);
	--n;
   }
  console.log(card); 
  var mst=['h','d','s','c'];
  mstChk(dealer);
  mstChk(player);
  i=Math.round(Math.random()*(mst.length-1));
  return [card,mst[i]];  
  
  function mstChk(hnd)
   {
     for(i=hnd.length-1; i>=0; --i)
    if (hnd[i][0]==card)
	  switch (hnd[i][1])
	   {
	    case 'h': mst.splice(0,1);
		  break;
		case 'd': mst.splice(1,1);
		  break;
		case 's': mst.splice(2,1);
		  break;
		case 'c': mst.splice(3,1);
		  break;
	   }
   }
 }
 
 
function points(hand)
 {
  var p=0;
  for(var i=0; i<hand.length; ++i)
   {
    if (isNaN(hand[i][0]))
	 {
	  if (hand[i][0]=='A')
	   {
	    if (p<=10) p+=11;
	    else p+=1;
	   }
	  else p+=10;
	 }
	else p+=hand[i][0];
   }
  return p;
 }


 function show(id)
 {
  switch (id)
   {
    case 'player' : 
	  $(id).innerHTML+='<img src=cards/'+player[player.length-1][1]+'/'+player[player.length-1][0]+'.png>';  
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
      break;
    case 'dealer' : 
	  $(id).innerHTML+='<img src=cards/'+dealer[dealer.length-1][1]+'/'+dealer[dealer.length-1][0]+'.png>';
      break;	  
   }
   
 }

 
function $(id)
 {
  return document.getElementById(id);
 }