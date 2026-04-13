# Illusion-1.0
**Mind Benders — Optical Illusion Website**

This website is a visual playground built entirely with HTML, CSS, and JavaScript that showcases 20 optical illusions and 3D moving effects. Here's what it does and how it all works:

**What it's for**

The site is designed to demonstrate how the human brain processes visual information — and how easily it can be tricked. It's useful for students learning about neuroscience and perception, teachers looking for engaging visual aids, designers studying animation and motion, or anyone who just finds mind-bending visuals fascinating.

**How the illusions work**

Each illusion exploits a different weakness in human perception. The rotating wheels fool your brain into seeing phantom gears that don't exist. The Café Wall makes perfectly parallel lines appear to slope because the offset tiles tug at your sense of alignment. The Scintillating Grid creates dark dots at intersections that vanish the moment you look directly at them — a result of how your retinal cells process contrast at the edges of your vision. The Motion Aftereffect Spiral fatigues the motion-sensitive neurons in your brain so that when you look away, still objects appear to move in the opposite direction.

**How it's built**

Most illusions are pure CSS — conic gradients, keyframe animations, 3D transforms, and `perspective` create the spinning wheels, rotating cube, tunnel, and card flip with zero images. The more complex visuals like the Torus and Mandala are drawn frame-by-frame using the HTML5 Canvas API and JavaScript's `requestAnimationFrame` loop, which redraws the shape dozens of times per second to create smooth 3D motion. The cursor trail uses mouse-event tracking combined with a lerp (linear interpolation) smoothing algorithm to make the glowing dots lag behind naturally.

**Who can use it**

It runs entirely in the browser with no install, no internet connection needed after load, and no frameworks — just open the HTML file and it works on any phone, tablet, or desktop.
