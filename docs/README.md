## Original Side Scroller

### Background

This original game is a basic side scrolling obstacle game, with a constantly accelerating scroll speed. As the game progresses, the speed will increase, as will the difficulty of dodging obstacles and enemies.

### Functionality & MVP  

With this game, users will be able to:

- [ ] Start, pause, and reset the game
- [ ] Jump to avoid obstacles
- [ ] View current score

In addition, this project will include:

- [ ] A production Readme

### Wireframes

This app will consist of a game screen, game controls, nav links to the github and my linkedin, and the about modal. The game screen will be a left-scrolling flat landscape with various obstacles on it. The user will control a character that is laterally constrained on the screen, but can jump over objects. A rolling score and a clock will be displayed at the top of the screen.


### Architecture and Technologies


This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `gameName.js` with a `canvas` element for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`screen.js`: this script will handle the logic for creating and updating the necessary `gameName.js` elements and rendering them to the DOM.

`player.js`: this script will handle the logic for controlling the user's character.

`obstacle.js`: this script will handle the logic for generating the scrolling landscape and populating it with obstacles.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above. Goals for the day:

- Get a green bundle with `webpack`
- Learn enough to render an object to the screen

**Day 2**: First, build out the `player` object to connect to the `Screen` object and `Obstacle` object. Then, use `screen.js` to create and render at the terrain.  Add the player to the screen.  Goals for the day:

- Complete the `player.js` module (constructor, action functions)
- Render a square screen and a landscape
- Get the landscape to scroll
- Render the player to the screen

**Day 3**: Add obstacles and functions to handle collisions.  Goals for the day:

- Export an `obstacle` object with correct type and handling logic
- Have a working collision system in place

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for , stop, start, reset, and jump
- Have a styled screen, nice looking controls and title
- If time: include buttons on the side to toggle game options


### Bonus features

There are many directions this game could eventually go.  Some anticipated updates are:

- [ ] Implement double jumping
- [ ] Add multiple obstacles and enemies
- [ ] Fire weapons to destroy enemies
- [ ] Add ducking
- [ ] Add lives
