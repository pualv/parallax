# parallax
### Floaty graphics / parallax effect that follows the mouse.
#### Doesn't work on mobile. Not reponsive.

Saw this on a website and thought I'd recreate it as a programming exercise. Not sure anyone else would ever need to use it though.

## How it works
3 images are loaded as background images in CSS. Put your own in at the top of parallax.css in the classes .plane_0 to .plane_1

Javascript follows the mouse and moves the images. There is a css transition which makes the images 'ease-in' to their final positions so they appear to have inertia and give a 'floating in space' effect.

The vanishing point is called set as pivot.x and pivot.y in the script and is automatically set to be the centre of the .container div that wraps the images.

The vanishing point is assumed to be at unit 0. The front of the screen, where the mouse is, is assumed to be at unit 1000 (set as mainadjacent in the script). There is an imaginary line between the vanishing point and the mouse. The images are  'hung' on this line at distances set in planes[] in the script. The higher the number the 'nearer' the image is to the viewer and the more it moves as the mouse moves. 
