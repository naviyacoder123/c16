var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

  var Sofia =createSprite(13,13,18,18);
  Sofia.shapeColor ="red";
  
  var cardboard1 =createSprite(0,35,120,15);
  cardboard1.shapeColor ="black";
  
  var cardboard2 =createSprite(100,0,15,140);
  cardboard2.shapeColor ="black";
  
  var cardboard3 =createSprite(100,70,120,15);
  cardboard3.shapeColor ="black";
  
  var cardboard4 =createSprite(7,120,15,120);
  cardboard4.shapeColor ="black";
  
  var cardboard5 =createSprite(118,110,152,15);
  cardboard5.shapeColor ="black";
  
  var cardboard6 =createSprite(197,70,15,95);
  cardboard6.shapeColor ="black";
  
  var cardboard7 =createSprite(160,30,60,15);
  cardboard7.shapeColor ="black";
  
  var cardboard8 =createSprite(240,70,15,95);
  cardboard8.shapeColor ="black";
  
  var cardboard9 =createSprite(300,30,110,15);
  cardboard9.shapeColor ="black";
  
  var cardboard10 =createSprite(390,30,15,160);
  cardboard10.shapeColor ="black";
  
  var cardboard11 =createSprite(332,65,105,15);
  cardboard11.shapeColor ="black";
  
  var cardboard12 =createSprite(110,150,190,15);
  cardboard12.shapeColor ="black";
  
  var cardboard13 =createSprite(129,129,15,26);
  cardboard13.shapeColor ="black";
  
  var cardboard14 =createSprite(330,125,15,65);
  cardboard14.shapeColor ="black";
  
  var cardboard15 =createSprite(285,110,76,15);
  cardboard15.shapeColor ="black";
  
  var cardboard16 =createSprite(240,180,15,75);
  cardboard16.shapeColor ="black";
  
  var cardboard17 =createSprite(280,180,15,75);
  cardboard17.shapeColor ="black";
  
  var cardboard18 =createSprite(260,150,27,15);
  cardboard18.shapeColor ="black";
  
  var cardboard19 =createSprite(180,185,105,15);
  cardboard19.shapeColor ="black";
  
  var cardboard20 =createSprite(380,140,40,15);
  cardboard20.shapeColor ="black";
  
  var cardboard21 =createSprite(330,190,95,15);
  cardboard21.shapeColor ="black";
  
  var cardboard22 =createSprite(330,170,15,27);
  cardboard22.shapeColor ="black";
  
  var cardboard23 =createSprite(385,205,15,75);
  cardboard23.shapeColor ="black";
  
  var cardboard24 =createSprite(121,205,15,55);
  cardboard24.shapeColor ="black";
  
  var cardboard25 =createSprite(85,225,15,90);
  cardboard25.shapeColor ="black";
  
  var cardboard26 =createSprite(25,190,55,15);
  cardboard26.shapeColor ="black";
  
  var cardboard27 =createSprite(187,225,121,15);
  cardboard27.shapeColor ="black";
  
  var cardboard28 =createSprite(170,262,156,15);
  cardboard28.shapeColor ="black";
  
  var cardboard29 =createSprite(205,243,15,23);
  cardboard29.shapeColor ="black";
  
  var cardboard30 =createSprite(53,225,50,15);
  cardboard30.shapeColor ="black";
  
  var cardboard31 =createSprite(45,300,15,90);
  cardboard31.shapeColor ='black';
  
  var cardboard32 =createSprite(31,300,15,15);
  cardboard32.shapeColor ="black";
  
  var cardboard33 =createSprite(280,240,15,60);
  cardboard33.shapeColor ="black";
  
  var cardboard34 =createSprite(195,300,285,15);
  cardboard34.shapeColor ="black";
  
  var cardboard35 =createSprite(330,260,15,70);
  cardboard35.shapeColor ="black";
  
  var cardboard36 =createSprite(357,270,40,15);
  cardboard36.shapeColor ="black";
  
  var cup =createSprite(390,360,15,80);
  cup.shapeColor ="yellow";
  
  var cardboard38 =createSprite(380,310,35,15);
  cardboard38.shapeColor ="black";
  
  var cardboard39 =createSprite(370,330,15,30);
  cardboard39.shapeColor ="black";
  
  var cardboard40 =createSprite(83,337,62,15);
  cardboard40.shapeColor ="black";
  
  var cardboard41 =createSprite(106,360,15,40);
  cardboard41.shapeColor ="black";
  
  var cardboard42 =createSprite(50,372,100,15);
  cardboard42.shapeColor ="black";
  
  var cardboard43 =createSprite(262,337,201,15);
  cardboard43.shapeColor ="black";
  
  var cardboard44 =createSprite(248,371,270,15);
  cardboard44.shapeColor ="black";
  
  function draw(){
    background("cyan");
    
  if(keyDown("UP_ARROW")){
    Sofia.velocityX =0;
    Sofia.velocityY =-2;
  }
  if (keyDown("DOWN_ARROW")){
    Sofia.velocityX =0;
    Sofia.velocityY =2;
  }
  if (keyDown("RIGHT_ARROW")){
    Sofia.velocityX =0;
    Sofia.velocityX =2;
  }
  if (keyDown("LEFT_ARROW")){
    Sofia.velocityX =-2;
    Sofia.velocityY =0;
  }
  
  createEdgeSprites();
  Sofia.bounceOff(edges);
  drawSprites();
  
  createEdgeSprites();
  Sofia.bounceOff(cardboard1);
  Sofia.bounceOff(cardboard2);
  Sofia.bounceOff(cardboard3);
  Sofia.bounceOff(cardboard4);
  Sofia.bounceOff(cardboard5);
  Sofia.bounceOff(cardboard6);
  Sofia.bounceOff(cardboard7);
  Sofia.bounceOff(cardboard8);
  Sofia.bounceOff(cardboard9);
  Sofia.bounceOff(cardboard10);
  Sofia.bounceOff(cardboard11);
  Sofia.bounceOff(cardboard12);
  Sofia.bounceOff(cardboard13);
  Sofia.bounceOff(cardboard14);
  Sofia.bounceOff(cardboard15);
  Sofia.bounceOff(cardboard16);
  Sofia.bounceOff(cardboard17);
  Sofia.bounceOff(cardboard18);
  Sofia.bounceOff(cardboard19);
  Sofia.bounceOff(cardboard20);
  Sofia.bounceOff(cardboard21);
  Sofia.bounceOff(cardboard22);
  Sofia.bounceOff(cardboard23);
  Sofia.bounceOff(cardboard24);
  Sofia.bounceOff(cardboard25);
  Sofia.bounceOff(cardboard26);
  Sofia.bounceOff(cardboard27);
  Sofia.bounceOff(cardboard28);
  Sofia.bounceOff(cardboard29);
  Sofia.bounceOff(cardboard30);
  Sofia.bounceOff(cardboard31);
  Sofia.bounceOff(cardboard32);
  Sofia.bounceOff(cardboard33);
  Sofia.bounceOff(cardboard34);
  Sofia.bounceOff(cardboard35);
  Sofia.bounceOff(cardboard36);
  Sofia.bounceOff(cardboard38);
  Sofia.bounceOff(cardboard39);
  Sofia.bounceOff(cardboard40);
  Sofia.bounceOff(cardboard41);
  Sofia.bounceOff(cardboard42);
  Sofia.bounceOff(cardboard43);
  Sofia.bounceOff(cardboard44);
  
 if(Sofia.isTouching(cup)){
 
 textSize(50);
 text("YOU WON",75, 200);}
 
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
