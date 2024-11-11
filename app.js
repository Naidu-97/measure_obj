let points = [];
const line = document.getElementById('line'); // Ensure this element exists in your A-Frame scene.

document.querySelector('a-scene').addEventListener('click', function (event) {
    const intersection = event.detail.intersection;

    if (intersection) {
        const point = intersection.point;
        points.push(point);

        // Draw line between points when 2 points are selected
        if (points.length === 2) {
            const start = points[0];
            const end = points[1];
            
            // Update line's start and end positions
            line.setAttribute('line', {
                start: `${start.x} ${start.y} ${start.z}`,
                end: `${end.x} ${end.y} ${end.z}`
            });

            // Calculate distance between the two points
            const distance = Math.sqrt(
                Math.pow(end.x - start.x, 2) +
                Math.pow(end.y - start.y, 2) +
                Math.pow(end.z - start.z, 2)
            );

            // Display distance with alert
            alert(`Distance: ${distance.toFixed(2)} meters`);

            // Reset points array after displaying the distance
            points = [];
        }
    }
});
