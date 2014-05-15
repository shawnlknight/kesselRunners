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
		$(".songForm").on("submit", this.inputSetList);
		// setListPro.addSong();
		// create playlist event
		// add song to playlist
		// pull up song tabs
		//bring up modal
	},

	inputSetList: function(e) {
    e.preventDefault();

      var newSetList = {
        item: $(".chordsItem").val(),
      };

      console.log(newSetList);

     $.ajax({
              url:'http://tiy-fee-rest.herokuapp.com/collections/kesselrunners',
              type:'POST',
              data: newSetList,
              dataType: 'jsonp',
              error: function(data){
                // alert('U FAIL');
              },
              success: function(data) {
                // alert('YA SUCCESS!');

                    setListPro.getAjax(data);
                    
                   }
               }); //end ajax

  },

	getAjax : function(){
		var API_KEY = '8b002700ba331e00ee2408de1d1a3da5c43382d7';
	

		var songTitle = $('.songTitleInput').val();
		var artist = $('.artistInput').val();

		var fullURL = 'http://api.guitarparty.com/v2/songs/?query='+
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
		datatype: "jsonp",
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