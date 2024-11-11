let points = [];
const line = document.getElementById('line');

document.querySelector('a-scene').addEventListener('click', function (event) {
    const intersection = event.detail.intersection;

    if (intersection) {
        const point = intersection.point;
        points.push(point);

        // Draw line between points
        if (points.length === 2) {
            const start = points[0];
            const end = points[1];
            line.setAttribute('line', {
                start: `${start.x} ${start.y} ${start.z}`,
                end: `${end.x} ${end.y} ${end.z}`
            });

            // Calculate and display distance
            const distance = Math.sqrt(
                Math.pow(end.x - start.x, 2) +
                Math.pow(end.y - start.y, 2) +
                Math.pow(end.z - start.z, 2)
            );

            alert(`Distance: ${distance.toFixed(2)} meters`);

            // Reset for next measurement
            points = [];
        }
    }
});