(function()	{
	$(function() {
		var editor = ace.edit('input-field');
		editor.setTheme('ace/theme/chrome');
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
			input = editor.getValue();
			deflated = RawDeflate.deflate(input);
			base64 = Base64.toBase64(deflated);
			check = checksum(base64);
			encoded = base64 + check;
			window.location = 'index.html?d=' + encoded + '&l=' + $('#language').val() + '&t=' + $('#theme').val();
			document.getElementById('view').style.display = 'block';
			$('#input-url').get(0).value = window.location;
		});
		$('#theme').change(function() {
			editor.setTheme('ace/theme/' + $('#theme').val());
		});
		$('#language').change(function() {
			editor.getSession().setMode('ace/mode/' + $('#language').val());
		});
		if (getUrlVars()['d']) {
			document.getElementById('view').style.display = 'block';
			encoded = getUrlVars()['d'];
			base64 = encoded.slice(0, (encoded.length - 2) + 1 || 9e9);
			check = parseInt(encoded.slice(encoded.length - 1, encoded.length + 1 || 9e9));
			if (check !== checksum(base64)) {
				$('#input-url').get(0).value = 'Something got corrupted :(';
				editor.setValue('Something got corrupted :(');
			} else {
				deflated = Base64.fromBase64(base64);
				input = RawDeflate.inflate(deflated);
				$('#input-url').get(0).value = window.location;
				editor.setValue(input);
				editor.clearSelection();
			}
		}
		if (getUrlVars()['t']) {
			editor.setTheme('ace/theme/' + getUrlVars()['t']);
			document.getElementById('theme').selectedIndex = 0;
			document.getElementById('theme').value = getUrlVars()['t'];
		}
		if (getUrlVars()['l']) {
			editor.getSession().setMode('ace/mode/' + getUrlVars()['l']);
			document.getElementById('language').selectedIndex = 0;
			document.getElementById('language').value = getUrlVars()['l'];
		}
	});
}).call(this);
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}