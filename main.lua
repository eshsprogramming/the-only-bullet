local physics = require("physics")
physics.start()

local floor = display.newImage("assets/images/floortest.png", 150, 250)
physics.addBody(floor, "static", {friction=0.5})

local bulletTarget = {}
for i=1,10 do
	for j=1,10 do
		bulletTarget[i] = display.newImage("assets/images/bullet.png",
      20*i+50, 20*j)
		physics.addBody(
      bulletTarget[i],
      {
        density=0.2,
        friction=0.1,
        bounce=0.5
      }
    )
	end
end

local bullet = display.newImage("assets/images/bullet.png", 150, 50)
physics.addBody(bullet, {density=0.5, friction=0.1, bounce=0.25})
bullet.isBullet = true
math.randomseed(os.time())
bullet:applyLinearImpulse(math.random(-10,10),10,bullet.x,bullet.y)

local function myTouchListener( event )
  bullet.x = event.x
  bullet.y = event.y
end

Runtime:addEventListener( "touch", myTouchListener )
