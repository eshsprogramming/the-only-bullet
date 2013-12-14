-- Project: ludem-dare-28
-- Description:
--
-- Version: 1.0
-- Managed with http://CoronaProjectManager.com
--
-- Copyright 2013 . All Rights Reserved.
---- cpmgen main.lua


--[[local sprite = require("sprite")

local physics = require("physics")
physics.start()

system.activate("multitouch")]]

local sheetData =
{
	width = 32,
	height = 16,
	numFrames = 12
}

local mySheet = graphics.newImageSheet( "bulletHat.png", sheetData )

local sequenceData = {

  {name = "normalRun",
   start = 1,
   count = 12,
   time = 400,
   loopCount = 0,
   loopDirection = "forward"
   }
}

local animation = display.newSprite(mySheet, sequenceData)
animation.x = display.contentWidth/2
animation.y = display.contentHeight/2

animation:play()

--[[local function myTouchListener( event )
  if event.x > display.contentWidth/2 then
    animation.x = animation.x + 5
  else
    animation.x = animation.x - 5
  end
end--]]

local function myTouchListener( event )
  animation.x = event.x
  animation.y = event.y
end

--animation.x = ..event.x
--animation.y = ...event.y

--local myButton = display.newRect( display.contentWidth/2, 100, 200, 50 )
Runtime:addEventListener( "touch", myTouchListener )


