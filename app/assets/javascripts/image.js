$(document).on('ready',function(){
	$('#upload').on('click',function(){
		$("input[id='image_image']").click();
	});
	$('#edit').on('click',function(){
		launchEditor('preview');
	});
	var featherEditor = new Aviary.Feather({
		apiKey: 'your-client-id-here',
		theme: 'dark', // Check out our new 'light' and 'dark' themes!
		tools: 'all',
		appendTo: '',
		onSave: function(imageID, newURL) {
			var img = document.getElementById(imageID);
			img.src = newURL;
		},
		onError: function(errorObj) {
			alert(errorObj.message);
		}
	});
	function launchEditor(id) {
		src = $("#"+id).attr('src');
		featherEditor.launch({
			image: id,
			url: src
		});
		return false;
	}
});