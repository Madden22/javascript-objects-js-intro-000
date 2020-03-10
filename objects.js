var playlist = {
  Blink182: "Age Again"
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, {artistName : songTitle})
}