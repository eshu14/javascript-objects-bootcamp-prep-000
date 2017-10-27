var playObj={
  Michael:"Black and white",
  Robbie:"Christmas"
};
var playlist=Object.assign({},playObj);

function updatePlaylist(obj,nam,song){
  return Object.assign({},obj,{nam:song});
}
function removeFromPlaylist(obj, nam){
  delete nam;
  return obj;
}
