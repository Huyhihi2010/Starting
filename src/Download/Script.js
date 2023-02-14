import BoxDownload from "./Box.download.js";

const ShotGame = new BoxDownload({ file : "../../File/ShottingGame.rar" , link : "../../File/ShottingGame/index.html" , title : "Spaceship" , img : "../../client/img/download/ShotGame.png" , description : "First my game, click to shot:)" , author : "Dragon_Gold-#1824" , id : "context-download-div" , password : { use : false , Pass : null } })

ShotGame.setup();