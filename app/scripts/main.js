//working

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
		$(".songForm").on("submit", this.getAjax, this.newSetList);
		// $(".songsItem").on("click", this.append);
		// setListPro.addSong();
		// create playlist event
		// add song to playlist
		// pull up song tabs
		//bring up modal
	},

	// inputSetList: function(data) {
    

      // var newSetList = {
      //   item: $(".playlistsItem").val(),
      // };

      // console.log(newSetList);

  //     $.ajaxSetup({
		// 	beforeSend: function(xhr) {
		// 		//had to do this to remove the Guitarparty-Api-Key otherwise post failed
		// }
		// })

  //    $.ajax({
  //             url:'http://tiy-fee-rest.herokuapp.com/collections/kesselrunners',
  //             type:'POST',
  //             data: 'json.stringify',
  //             dataType: 'json',
  //             error: function(data){
  //               alert('U FAIL');
  //             },
  //             success: function(data) {
  //               alert('YA SUCCESS!');
  //                  }
  //              }); //end ajax

  // },


		getAjax : function(e){
		e.preventDefault();

		$.ajaxSetup({
			beforeSend: function(xhr) {
	        xhr.setRequestHeader('Guitarparty-Api-Key', API_KEY);
		}
		})

		var API_KEY = '8b002700ba331e00ee2408de1d1a3da5c43382d7';

		var html = '';
		var songTitle = $('.songTitleInput').val();
		var artist = $('.artistInput').val();

		var fullURL = "http://api.guitarparty.com/v2/songs/";

		$.ajax({

		url: fullURL,
		type: "GET",
		dataType: "json",
		data: {query: songTitle},
		success: function(data, dataType, jqXHR){
			console.log(data.objects[0].authors[0].name);
				var objects;
			 // html += '<div class="songsItem"><li'+fullURL+'>''</li><li'+songTitle+'>''</li><li'+artist+'>''</li></div>\n';

			 	for(var i=0; i<data.objects.length; i++) {
			 		objects += 
			 	}
			 	setListPro.addToServer(objects);//post 
			$(".songsItem").text(data.objects[0].authors[0].name);
		}
		});

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