// script.js

// Function for creating dynamic elements
function createDynamicElement(tag, properties) {
    const element = document.createElement(tag);
    for (const key in properties) {
        element[key] = properties[key];
    }
    document.body.appendChild(element);
    return element;
}

// Function for cursor trails
let cursorTrail = [];
document.addEventListener('mousemove', (event) => {
    // Create a new trail element
    const trailElement = createDynamicElement('div', {
        className: 'cursor-trail',
        style: `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px;`
    });
    cursorTrail.push(trailElement);

    // Remove the trail after a short time
    setTimeout(() => {
        document.body.removeChild(trailElement);
        cursorTrail.shift();
    }, 300);
});

// Performance optimization: Throttle the mousemove event
let lastExecution = 0;
const throttleMouseMove = (event) => {
    const now = Date.now();
    if (now - lastExecution >= 50) { // Execute every 50ms
        lastExecution = now;
        // Handle the cursor trail logic
        document.dispatchEvent(new Event('mousemove-throttled', { bubbles: true }));
    }
};
document.addEventListener('mousemove', throttleMouseMove);

// CSS for cursor trails
const style = document.createElement('style');
style.innerHTML = `.cursor-trail { width: 10px; height: 10px; background: rgba(0, 255, 0, 0.5); border-radius: 50%; position: absolute; pointer-events: none; transition: transform 0.1s ease; }`;
document.head.appendChild(style);