$ ->
  $('#save-button').click () ->
    input = $('#input-field').get(0).value
    deflated = RawDeflate.deflate input
    base64 = Base64.toBase64 deflated

    console.log input.length, base64.length
