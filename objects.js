var playlist = {
  Blink182: "Age Again"
}

function updatePlaylist(playlist2, artistName, songTitle) {
  return Object.assign(playlist2, {artistName : songTitle})
}

function removeFromPlaylist(playlist2, artistName){
  delete playlist2.artistName
  return playlist2
}
