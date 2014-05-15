$(document).ready(function() {

setListPro.init();

});

var setListPro= {
	init: function() {
		setListPro.initEvents();
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

	getAjax : function(){
		var API_KEY = '8b002700ba331e00ee2408de1d1a3da5c43382d7';
		var songTitle=setlist1.title
		var artist
		var fullURL = 'http://api.guitarparty.com/v2/songs/?'+
		'/'+
		songTitle+
		'/'+
		artist

		$.ajax({
	    beforeSend: function(xhr) {
	        xhr.setRequestHeader('Guitarparty-Api-Key', API_KEY);
		}, 
		url: fullURL,
		type: "GET",
		datatype: "json",
		success: function(data, dataType, jqXHR){
			console.log(data);
		}
		});

	},

	rendertmpl : function(){
		
	},

	appendTab : function(){
		//getAjax
		//rendertmpl....html
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