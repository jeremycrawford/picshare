
var userProfiles = [];

// Submit button
// This is the section that I'm learning.

console.log($('.avatar-template').text());
var profileTemplate = _.template($('.avatar-template').text());		// This calls to the script inside the index.


$('.submit').click(function() {
	// console.log($('.in-username').val());
	var profile = {};
		profile.name = $('.in-username').val()
		profile.profilepic = $('.in-profilepic').val()
		userProfiles.push(profile);
		console.log(userProfiles.length);


	$('.centeravatarcontainer').append(
		profileTemplate(
		profile
		));														// This already has what it needs.
});












// $('.avatar').mouseover(function() {
//   $(this).children('.caption').show()
// });

// $('.avatar').mouseout(function() {
//   $(this).children('.caption').hide()
// });

// $('img').hover(function(){
//     $(this).attr('src','images/Market.png');
// },function(){
//      $(this).attr('src','images/tile_4.jpg'); 
// });

$('h1').hover(function() {
  $(this).toggleClass('fontchange');
});

$('.picshare-sub-logo').hover(
	function() {
    $(this).stop().fadeTo('slow', 0.9);
	},
	function() {
    $(this).stop().fadeTo('slow', 0.7);
});

$('.picshare-main-logo').hover(
	function() {
  	$(this).stop().fadeTo('slow', 1);
    },
    function() {
  	$(this).stop().fadeTo('slow', 0.7);
});

$('.inputfield').hover(
	function() {
	$(this).toggleClass('inputfieldchange');
});
