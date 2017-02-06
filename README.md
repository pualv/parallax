# parallax
### Floaty graphics / parallax effect that follows the mouse.
#### Doesn't work on mobile. Not reponsive.

Saw this on a website and thought I'd recreate it as a programming exercise. Not sure anyone else would ever need to use it though.

## How it works
3 images are loaded as background images in CSS. Put your own in at the top of parallax.css in the classes .plane_0 to .plane_2.

Javascript follows the mouse and moves the images. There is a css transition which makes the images 'ease-in' to their final positions so they appear to have inertia and give a 'floating in space' effect.

The vanishing point is set as pivot.x and pivot.y in the script and is automatically set to be the centre of the .container div that wraps the images.

The vanishing point is assumed to be at distance 0 (I've used the variable z to represent this distance. This is not related to the css z-index although both are referring the the Z-plane). It doesn't move. 

The 'front of the screen', where the mouse is, is assumed to be at unit 1000 (set as mainadjacent in the script). There is an imaginary line between the vanishing point and the mouse. The images are 'hung' on this line at different distances, set in planes[]. The higher the number the 'nearer' the image is to the viewer / mouse and the more it moves as the mouse moves. Just change one of planes.z in the data object at the top of the script to see how this works.
