$(document).ready(function() {

setListPro.init();

});

var setListPro= {
	init: function() {
		this.initStyling();
		this.initEvents();
	},

	initStyling: function() {
	},

	initEvents: function() {
		setListPro.addSong();
		// create playlist event
		// add song to playlist
		// pull up song tabs
		//bring up modal
	},
	genSong : function(){
		var artist=$(".artistInput").val();
		var songTitle=$(".songTitleInput").val();
		var newSong= new Song(artist, songTitle);
		console.log(setlists);
		return newSong;
	},

	addSong : function(){
		$(".songForm").on("submit", function(event){
			event.preventDefault();
			setlists[0].songs.unshift(setListPro.genSong());
			console.log(setlists);//HOW WILL IT KNOW WHICH ARRAY TO PUSH TO?
		});
	},

	
	removeSong: function() {

	},

	showTabs: function() {

	},

	updateSetlist: function() {

	},

}