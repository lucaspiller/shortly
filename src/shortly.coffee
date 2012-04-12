$ ->
  checksum = (string) ->
    chk = 0
    for i, chr of string
      chk += chr.charCodeAt(0) * (i + 1)
    chk % 10

  $('#save-button').click () ->
    input = $('#input-field').get(0).value
    deflated = RawDeflate.deflate input
    base64 = Base64.toBase64 deflated
    check = checksum base64
    encoded = base64 + check
    window.location.hash = encoded

  if window.location.hash
    encoded = window.location.hash.replace /^#/, ''
    base64 = encoded[0..encoded.length - 2]
    check = parseInt(encoded[encoded.length - 1..encoded.length])
    unless check == checksum(base64)
      alert 'Something got corrupted :('
    else
      deflated = Base64.fromBase64 base64
      input = RawDeflate.inflate deflated
      $('#input-field').get(0).value = input
