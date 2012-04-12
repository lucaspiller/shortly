$ ->
  $('#save-button').click () ->
    input = $('#input-field').get(0).value
    deflated = RawDeflate.deflate input
    base64 = Base64.toBase64 deflated
    window.location.hash = base64

  if window.location.hash
    base64 = window.location.hash.replace /^#/, ''
    deflated = Base64.fromBase64 base64
    input = RawDeflate.inflate deflated
    $('#input-field').get(0).value = input
