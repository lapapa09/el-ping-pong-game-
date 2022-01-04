var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4dbbc31d-f5a4-4615-a044-3654fd1079da","3790eb89-418c-4a9b-b84a-c57335620f6e","ac77b056-d8b9-4241-8a62-afb9d00800ea"],"propsByKey":{"4dbbc31d-f5a4-4615-a044-3654fd1079da":{"name":"playerballanimation","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":false,"frameDelay":12,"version":"J_VO0ar35j8DHkdTzDVA5G_hpb9Uf5Kb","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/4dbbc31d-f5a4-4615-a044-3654fd1079da.png"},"3790eb89-418c-4a9b-b84a-c57335620f6e":{"name":"raqueta1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"t0QC67lsi1.6aA8BR0FO9JrI0v_yokKQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3790eb89-418c-4a9b-b84a-c57335620f6e.png"},"ac77b056-d8b9-4241-8a62-afb9d00800ea":{"name":"raqueta2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"K70DPesRWJMBNSMy5MlamAXWV3Iq2HhS","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ac77b056-d8b9-4241-8a62-afb9d00800ea.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerpaddle=createSprite(390,200,10,70);
playerpaddle.shapeColor= "blue" 
var computerpaddle=createSprite(10,199,10,70);
computerpaddle.setAnimation("raqueta1");
computerpaddle.scale=2.1
playerpaddle.setAnimation("raqueta2")
playerpaddle.scale=2
var playerball = createSprite(200,200,10,10);
playerball.setAnimation("playerballanimation");
playerball.scale= 0.1
createEdgeSprites();

var score= 0;

function draw() {
background("lightblue");

textSize(20)
   fill("red");
   strokeWeight(3);
   stroke("blue");
 text("playerpoints:" + score ,257, 20);
 
 textSize(20)
   fill("red");
   strokeWeight(3);
   stroke("blue");
 text("computerpoints:" + score ,33, 20);


playerball.bounceOff(topEdge);
playerball.bounceOff(bottomEdge)
playerball.bounceOff(computerpaddle)
playerball.bounceOff(playerpaddle)
 
//playerball.collide(playerpaddle);
playerball.collide(playerpaddle);

if (keyDown("space")) {
   playerball.velocityX= 3
   playerball.velocityY= 4 
   playSound("Original-Tetris-theme-(Tetris-Soundtrack).mp3", false);
   
}

if (keyDown("up")) {
playerpaddle.y=playerpaddle.y- 5
}
if (keyDown("down")) {
playerpaddle.y=playerpaddle.y +  5
 
}
 


computerpaddle.y=playerball.y
 

line(200, 0, 200, 10);
line(200,20,200,30)



 for (var i = 0;  i<400; i+=20) {
 line(200,i,200,i+10)
  
}
drawSprites();




if (playerball.isTouching(leftEdge)) {
  score= +1;
  playerball=+1
  
}


playerpaddle.collide(bottomEdge);
computerpaddle.collide(bottomEdge);


if (playerball.isTouching(rightEdge)) {
  score=+1;
}







}
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
