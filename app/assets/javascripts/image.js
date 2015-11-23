$(document).on('ready',function(){
	$('#upload').on('click',function(){
		$("input[id='image_image']").click();
	});
	$('#edit').on('click',function(){
		launchEditor('preview');
	});
	$("input[id='image_image").on('change',function(e){
		for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

      var file = e.originalEvent.srcElement.files[i];

      var img = $('#preview');
      var reader = new FileReader();
      reader.onloadend = function() {
           img.attr('src',reader.result);
      }
      reader.readAsDataURL(file);
    }
     $("input[id='image_mode']").val("offline");
	});

	$("input[id='image_temp']").on('change',function(e){
     var img = $('#preview');
     var val = $("input[id='image_temp']").val();
     img.attr('src',val);
     $("input[id='image_remote_image_url']").val(val);
     $("input[id='image_mode']").val("online");
	});
	var featherEditor = new Aviary.Feather({
		apiKey: 'b2da2d33ca1f4e9e8a1d825932760d12',
		theme: 'dark', // Check out our new 'light' and 'dark' themes!
		tools: 'all',
		appendTo: '',
		onSave: function(imageID, newURL) {
			var img = document.getElementById(imageID);
			img.src = newURL;
      $("input[id='image_remote_image_url']").val(newURL);
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