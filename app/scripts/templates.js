Templates = {};

Templates.songs = [
	"<% _.each(obj, function(obj, index, list) { %>",

	"<article data-objId=\"<%= obj._id %>\">",
	"<h4 class=\"data-index=\"<%= index %>\"><%= obj.name %></h4>",
	"<h4 class=\"data-index=\"<%= index %>\"><%= obj.title %></h4>",
	"<button class=\"btn btn-default chords\">Show Chords</button>",
	"<span class=\"glyphicon glyphicon-trash deleteSong\"></span>",
	"</article>",
	"<% }); %>"


].join("\n");