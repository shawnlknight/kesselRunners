Templates = {};

Templates.songs = [
	"<% _.each(obj, function(item, index, list) { %>",
	"<article class=\"setListTemplate\" data-itemId=\"<%= item._id %>\">",
	"<h4\"data-index=\"<%= index %>\"><h4>Artist: </4><%= item.name %></h4>",
	"<h4\"data-index=\"<%= index %>\"><h4>Song: </4><%= item.title %></h4>",
	"<span class=\"glyphicon glyphicon-trash deleteSong\"></span>",
	"</article>",
	"<% }); %>"

].join("\n");

Templates.showChord = [
	"<% _.each(obj, function(item, index, list) { %>",
	"<h3 class=\"thisTitle\"><%= item.title %></h3>",
	"<div class=\"songChords\" data-index=\"<%= index %>\"><%= item.chords %></div>",
	"<% }); %>"

].join("\n");