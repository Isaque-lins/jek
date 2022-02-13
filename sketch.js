var jek, jekimage
var rua, ruaimage
var blockD,blockE
function preload(){

ruaimage = loadImage("path.png")
jekimage = loadAnimation("Runner-1.png", "Runner-2.png")


  //imagens pré-carregadas
}

function setup(){
  createCanvas(300,800);

  rua = createSprite(150, 400);
  rua.addImage(ruaimage)

jek = createSprite(150,760)
jek.addAnimation("corredor", jekimage)
jek.scale = 0.1

blockD = createSprite(290, 400, 10, 800)
blockE = createSprite(10, 400, 10, 800)
blockD.visible = false
blockE.visible = false
  //crie sprite aqui
}

function draw() {
drawSprites()
rua.velocityY = 10
if (rua.y > 800){
  rua.y = height/2
}

jek.x = World.mouseX

jek.collide (blockD)

jek.collide (blockE)




}
