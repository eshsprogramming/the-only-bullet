-- Project: ludum-dare-28
-- Description:
--
-- Version: 1.0
-- Managed with http://CoronaProjectManager.com
--
-- Copyright 2013 . All Rights Reserved.
---- cpmgen main.lua


--local sprite = require("sprite")

local physics = require("physics")
physics.start()

--system.activate("multitouch")

--[[local sheetData =
{
	width = 32,
	height = 16,
	numFrames = 1
}

local mySheet = graphics.newImageSheet( "assets/images/bullet.png", sheetData )

local sequenceData = {

  {name = "normalRun",
   start = 1,
   count = 1,
   time = 1250,
   loopCount = 0,
   loopDirection = "forward"
   }
}]]
local floor = display.newImage("assets/images/floortest.png", 150, 250)
physics.addBody(floor, "static", {friction=0.5})

local bulletTarget = {}
for i=1,10 do
	for j=1,10 do
		bulletTarget[i] = display.newImage("assets/images/bullet.png", 20*i+50, 20*j)
		physics.addBody( bulletTarget[i], { density=0.2, friction=0.1, bounce=0.5 } )
		--bulletTarget[i]:applyLinearImpulse(math.random(-i,i),i,bulletTarget[i].x,bulletTarget[i].y)
	end
end

local bullet = display.newImage("assets/images/bullet.png", 150, 50)
physics.addBody(bullet, {density=0.5, friction=0.1, bounce=0.25})
bullet.isBullet = true
math.randomseed(os.time())
bullet:applyLinearImpulse(math.random(-10,10),10,bullet.x,bullet.y)
--animation.x = display.contentWidth/2
--animation.y = display.contentHeight/2

--animation:play()

--[[local function myTouchListener( event )
  if event.x > display.contentWidth/2 then
    animation.x = animation.x + 5
  else
    animation.x = animation.x - 5
  end
end]]

local function myTouchListener( event )
  bullet.x = event.x
  bullet.y = event.y
end

--[[animation.x = ..event.x
animation.y = ...event.y

local myButton = display.newRect( display.contentWidth/2, 100, 200, 50 )]]
Runtime:addEventListener( "touch", myTouchListener )


