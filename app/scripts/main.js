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
		$(".songForm").on("submit", this.getAjax);
		// setListPro.addSong();
		// create playlist event
		// add song to playlist
		// pull up song tabs
		//bring up modal
	},

	inputSetList: function(e) {
    e.preventDefault();

      var newSetList = {
        item: $(".playlistsItem").val(),
      };

      console.log(newSetList);

     $.ajax({
              url:'http://tiy-fee-rest.herokuapp.com/collections/kesselrunners',
              type:'POST',
              data: newSetList,
              dataType: 'jsonp',
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
		data: {query: songTitle},
		success: function(data, dataType, jqXHR){
			console.log(data);

			$(".chordsItem").html(html);
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