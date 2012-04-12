$ ->
  $('#save-button').click () ->
    input = $('#input-field').get(0).value
    console.log "Hey, you clicked the button! This is what you've got:", input
