//working

$(document).ready(function() {

setListPro.init();

});

var setListPro= {

	init: function() {
		this.initStyling();
		this.initEvents();
	},

	initStyling: function() {
		this.renderSong();
		this.renderChords();
	},

	initEvents: function() {
		$(".songForm").on("submit", this.getAjax);

		// Delete song
		$(".playlistsItem").on("click", ".deleteSong", this.removeSong);

		$('.expand').on('click', function() {
		    $('.songs').toggle();
		    $('.chords').toggleClass('centerChords');
		  }
		);

	},

	inputSetList: function(data) {
    
      	$.ajaxSetup({
			beforeSend: function(xhr) {
				//had to do this to remove the Guitarparty-Api-Key otherwise post failed
		}
	})

     	$.ajax({
	        url:'http://tiy-fee-rest.herokuapp.com/collections/kesselrunners',
	        type:'POST',
	        data: data,
	        dataType: 'json',
	        error: function(data){
	          alert('U FAIL');
	        },
	        success: function(data) {
	          console.log('YA SUCCESS!');

	             }
	        }); //end ajax
  },

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
				console.log(data);

				if (data.objects.length === 1){
				
				var name = data.objects[0].authors[0].name;
				var title = data.objects[0].title;
				var chords = data.objects[0].body_chords_html;
				var someObj = {
						name: name,
						title: title,
						chords: chords
				};

			setListPro.inputSetList(someObj);
			setListPro.renderSong();
			setListPro.renderChords();


				$(".authorName").html(data.objects[0].authors[0].name);
				$(".titleName").html(data.objects[0].title);
				$(".chordsItem").html(data.objects[0].body_chords_html);

			} else 				
				alert("We don't have that ish yo, stop asking!");		 			
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

	renderChords : function(){
		$.ajax({
			url: 'http://tiy-fee-rest.herokuapp.com/collections/kesselrunners',
			type: "GET",
			data: "json",
			error: function(jqXHR, status, error) {
				console.log("render song failed");
			},
			success: function(data, dataType, jqXHR) {

				var obj = window.obj = data;
				setListPro.render($(".chordsItem"), Templates.showChord, obj);

			}
		});
	},
	
	removeSong: function() {
		var $thisSong = $(this).closest("article");
	    var itemId = $thisSong.data("itemid");

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/kesselrunners/" + itemId,
			type: "DELETE",
			error: function(jqXHR, status, error) {
				console.log("remove song failed");
			},
			success: function(data) {
				console.log("song removed");
				setListPro.renderSong();
				setListPro.renderChords();
			}
		});
	},

	updateSetlist: function() {

	},

}