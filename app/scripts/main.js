$(document).ready(function() {

setListPro.init();

});

var setListPro= {

	init: function() {
		this.initEvents();
	},

	initStyling: function() {
	},

	initEvents: function() {
		$(".songForm").on("submit", this.getAjax, this.inputSetList);
		// setListPro.addSong();
		// create playlist event
		// add song to playlist
		// pull up song tabs
		//bring up modal
	},

	inputSetList: function(e) {
    e.preventDefault();

     $.ajax({
              url:'http://tiy-fee-rest.herokuapp.com/collections/kesselrunners',
              type:'POST',
              data: 'data',
              dataType: 'json',
              error: function(data){
                alert('U FAIL');
              },
              success: function(data) {
                alert('YA SUCCESS!');

                    setListPro.getAjax(data);
                    
                   }
               }); //end ajax

	},

	getAjax : function(e){
		e.preventDefault();
		var API_KEY = '8b002700ba331e00ee2408de1d1a3da5c43382d7';
	
		var html ='';
		var songTitle = $('.songTitleInput').val();
		var artist = $('.artistInput').val();

		var fullURL = "http://api.guitarparty.com/v2/songs/?query="+
		songTitle+
		artist

		$.ajaxSetup({
			beforeSend: function(xhr) {
	        xhr.setRequestHeader('Guitarparty-Api-Key', API_KEY);
		}
		})

		$.ajax({

		url: fullURL,
		type: "GET",
		dataType: "json",
		data: "data",
		success: function(data, dataType, jqXHR){
			console.log(data);

			setListPro.getAjax();

			
		}
		}); //end ajax

	},

	render: function($el, template, data) {
	var tmpl = _.template(template, data);

	$el.html(tmpl);
	},

	renderSong : function(){
		$.ajax({
			url: 'http://tiy-fee-rest.herokuapp.com/collections/kesselrunners',
			type: "GET",
			data: "json",
			error: function(jqXHR, status, error) {
				console.log("render song failed");
			},
			success: function(data, dataType, jqXHR) {

				var obj = window.obj = data;
				setListPro.render($(".playlistsItem"), Templates.songs, obj);

			}
		});
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