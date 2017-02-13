# Paul the Alien
<a href="http://tom-ogasawara.com/paul">Play the live game here!</a>

Paul the Alien is a basic platformer game made in Javascript. The images are made by Kenney Vleugels and used legally under a CC0 license.  


Paul the Alien is a personal project by Tom Ogasawara.

![demopage][demopage]



## Technology

The bulk of the app is written in Javascript with HTML and a CSS for rendering and styling. The game screen is rendered using Canvas.

```HTML
<canvas id="canvas"
  width="1000"
  height="600"
  style="position: absolute;
    top: 0;
    left: 0;
    background-image: url('./docs/bg.png')">
</canvas>
```

## Gameplay

The game play is simple:
- Press the space bar to jump
- Move left and right with the arrow keys
- Avoid falling off platforms and running into spikes
- Collect as many coins as you can!


## Future direction

Paul the Alian is
- Implement a walk cycle animation using sprite sheets
- Add a menu and clean up game buttons and controls
- Add enemies and more obstacles
- Tighten up the graphics in level three.
- Design additional levels

Platformer graphics (Deluxe) by Kenney Vleugels (www.kenney.nl)
License (CC0) http://creativecommons.org/publicdomain/zero/1.0/

[demopage]: ./docs/demopage.png "Demo Page"
[PaulGame]: tom-ogasawara.com/paul "Live site"
