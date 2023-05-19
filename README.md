# sakura

Copy the sketch.js file and paste into the editor playground at https://editor.p5js.org or open the index.html file for the experience in a web browser.

The p5.js sketch provided creates a dynamic animation of pollen and sakura petals.

A.	It initializes two arrays: pollen and sakura. These arrays will store the pollen particles and sakura petals respectively.

B.	The setup function initializes the canvas to the size of the window, sets the stroke to none, and creates instances of Pollen
and Sakura objects with specific attributes. For example, it generates 500 pollen particles with random positions and
velocities, and 15 sakura petals at predetermined positions across the width of the canvas.

C.	The draw function sets the background color of the canvas to black, moves and displays the pollen particles, and grows and
displays the sakura petals.
	
D.	The Pollen class defines a pollen particle with position and velocity. It has two functions: move and display.
The move function changes the position of the particle based on its velocity and makes it bounce off the canvas boundaries.
The display function draws the particle on the canvas.
	
E.	The Sakura class defines a sakura petal with a base position, length, and angle.
The grow function changes the length and angle over time using a noise function for organic randomness.
The display function draws the petal as a curved shape originating from its base, and rotates it according to its angle.
	
F.	The mousePressed function allows the user to add more sakura petals to the canvas at the mouse's current position every time
the mouse button is pressed.
	
G.	Finally, the windowResized function adjusts the canvas size if the browser window size is changed.

  In summary, this sketch generates an interactive animation of pollen particles moving around randomly and sakura petals growing
 in a more organized manner. The user can add more petals by clicking on the canvas, and the sketch will adjust itself to fit
 the window even if it's resized.
