// locationUtils.js

export async function loadLocations(filename = 'locations2.csv') {
    const response = await fetch(filename);
    const text = await response.text();

    const lines = text.trim().split('\n');
    const locations = [];

    for (let i = 2; i < lines.length; i++) { // Skip first 2 lines
        const parts = lines[i].split(',').map(p => p.trim().replace(/^"|"$/g, ''));

        const id = parts[0]; // Column 1
        const rainfall = Math.max(0, parseFloat(parts[5]) * 1000); // Column 6
        const lat = parseFloat(parts[7]); // Column 8
        const lon = parseFloat(parts[9]); // Column 10

        if (!isNaN(lat) && !isNaN(lon)) {
            locations.push({ id, lat, lon, rainfall });
        }

    }

    return locations;
}

// Example transformation function
export function addLatitudeOffset(locations, offset) {
    return locations.map(loc => ({
        ...loc,
        lat: loc.lat + offset
    }));
}