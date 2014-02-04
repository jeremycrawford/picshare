$('h1').hover(function() {
  $(this).toggleClass('fontchange');
});

$('.picshare-sub-logo').hover(
	function() {
    $(this).stop().fadeTo('slow', 0.2);
	},
	function() {
    $(this).stop().fadeTo('slow', 1);
});

// $('.picshare-main-logo').hover(function() {
//   $(this).toggleClass('fast');
// });

$('.picshare-main-logo').hover(
	function() {
  	$(this).stop().fadeTo('slow', 1);
    },
    function() {
  	$(this).stop().fadeTo('slow', 0.5);
});


// $('#show').hover(
//   function () {
//     $(this).fadeOut("slow");
//   }, 
//   function () {
//     $(this).fadeIn("slow");
//   }
// );




// $('h1').mouseout(function() {
//   $(this).show('fontchange');
// });





// $('.avatar').mouseover(function() {
//   $(this).children('.caption').show()
// });

// $('.avatar').mouseout(function() {
//   $(this).children('.caption').hide()
// });







// <div class="button thirteen">
//    <div class="white-box-two"></div>
// </div>


// .white-box-two {
//         position: relative;
//         display: inline-block;
//         margin: -4px auto;
//         height: 20px;
//         width: 20px;
//         background: rgb(223, 107, 99);
//         -webkit-transition: all 2s ease;

//         &.spin {
//             margin: 4px auto;
//             position: relative;
//             display: inline-block;
//             background: white;
//             width: 10px;
//             height: 10px;
//             -webkit-transition: all 2s ease;
//             -webkit-transform: rotate(180deg);
//         }

// $('.thirteen').hover(function(){
// 	console.log('box spins when hovered');

// 	$('.white-box-two').toggleClass('spin');
// });






// $('img').hover(function(){
//     $(this).attr('src','images/Market.png');
// },function(){
//      $(this).attr('src','images/tile_4.jpg'); 
// });





// $('.logo').mouseout(function() {
//   $(this)('.picshare-main-logo-black').fadeOut()
// });


// $('.thirteen').hover(function(){
// 	console.log('box spins when hovered');

// 	$('.white-box-two').toggleClass('spin');
// });


// $( "a" ).click(function() {
//   $( "div" ).fadeIn( 3000, function() {
//     $( "span" ).fadeIn( 100 );
//   });
//   return false;
// });

