$ ->

  checksum = (string) ->
    chk = 0
    for i, chr of string
      chk += chr.charCodeAt(0) * (i + 1)
    chk % 10

  mobileCallBack = (encoded) ->
    newURL = window.location.protocol + "//" + document.domain + window.location.pathname + "#" + encoded;
    window.prompt("Your URL has been generated:", newURL);

  isMobile =
    Android: ->
      (if navigator.userAgent.match(/Android/i) then true else false)

    BlackBerry: ->
      (if navigator.userAgent.match(/BlackBerry/i) then true else false)

    iOS: ->
      (if navigator.userAgent.match(/iPhone|iPad|iPod/i) then true else false)

    Windows: ->
      (if navigator.userAgent.match(/IEMobile/i) then true else false)

    any: ->
      isMobile.Android() or isMobile.BlackBerry() or isMobile.iOS() or isMobile.Windows()

  # Sets Textarea height for Mobile Devices
  $("textarea").css({"height":"200px"}) if isMobile.any()

  $('#save-button').click () ->
    input = $('#input-field').get(0).value
    deflated = RawDeflate.deflate input
    base64 = Base64.toBase64 deflated
    check = checksum base64
    encoded = base64 + check
    mobileCallBack encoded  if isMobile.any()
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

