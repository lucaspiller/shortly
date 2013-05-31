(function()	{
	$(function() {
		var editor = ace.edit("input-field");
		editor.setTheme("ace/theme/chrome");
		editor.getSession().setMode('ace/mode/text');
		var base64, check, checksum, deflated, encoded, input;
		checksum = function(string) {
			var chk, chr, i;
			chk = 0;
			for (i in string) {
				chr = string[i];
				chk += chr.charCodeAt(0) * (i + 1);
			}
			return chk % 10;
		};
		$('#save-button').click(function() {
			var base64, check, deflated, encoded, input;
			input = editor.getValue();
			deflated = RawDeflate.deflate(input);
			base64 = Base64.toBase64(deflated);
			check = checksum(base64);
			encoded = base64 + check;
			window.location = 'index.html#' + encoded;
			document.getElementById("view").style.display = "block";
			return $('#input-url').get(0).value = window.location;
		});
		if (window.location.hash) {
			document.getElementById("view").style.display = "block";
			encoded = window.location.hash.replace(/^#/, '');
			base64 = encoded.slice(0, (encoded.length - 2) + 1 || 9e9);
			check = parseInt(encoded.slice(encoded.length - 1, encoded.length + 1 || 9e9));
			if (check !== checksum(base64)) {
				$('#input-url').get(0).value = 'Something got corrupted :(';
				return editor.setValue('Something got corrupted :(');
			} else {
				deflated = Base64.fromBase64(base64);
				input = RawDeflate.inflate(deflated);
				$('#input-url').get(0).value = window.location;
				editor.setValue(input);
				return editor.clearSelection();
			}
		}
	});
}).call(this);