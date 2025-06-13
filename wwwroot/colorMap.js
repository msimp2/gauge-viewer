// colorMap.js

// lOWER INCLUSIVE. In other words, if the gauge = 6, it would be pink, not hot pink
export const thresholds = [0.001, 0.01, 0.05, 0.10, 0.15, 0.20, 0.40, 0.60, 0.80, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 8];
export const colors = [
    'rgb(255,255,255)',  // a value of zero = white
    'rgb(0, 240, 240)',  // 0.01 - 0.05, very very light blue
    'rgb(0, 200, 200)',  // 0.05 - 0.10  very light blue
    'rgb(0, 160, 255)',  // 0.10 - 0.15  light blue
    'rgb(0, 120, 255)',  // 0.15 - 0.2   almost reg blue
    'rgb(0, 60, 255)',   // 0.20 - 0.4(dark) blue
    'rgb(0, 255, 0)',    // 0.40 - 0.6   green
    'rgb(0, 220, 0)',    // 0.60 - 0.8   somewhat darker green
    'rgb(0, 190, 0)',    // 0.80 - 1     darker green
    'rgb(0, 160, 0)',    // 1 - 1.25  darker green
    'rgb(0, 140, 0)',    // 1.25 - 1.5   darker green
    'rgb(255, 255, 0)',  // 1.5 - 1.75  yellow
    'rgb(240, 210, 0)',  // 1.75 - 2     darker yellow
    'rgb(230, 180, 0)',  // 2 - 2.5   yellow - orange
    'rgb(230, 120, 0)',  // 2.5 - 3     orange
    'rgb(255, 140, 140)',// 3 - 3.5   salmon / pink
    'rgb(255, 70, 70)',  // 3.5 - 4     darker salmon / red
    'rgb(255, 20, 20)',  // 4 - 4.5   almost red
    'rgb(220, 0, 0)',    // 4.5 - 5     about red
    'rgb(180, 0, 0)',    // 5 - 5.5   darker red
    'rgb(255, 0, 255)',  // 5.5 - 6     hot pink
    'rgb(220, 0, 220)',  // 6 - 6.5   pink - purple
    'rgb(200, 0, 200)',  // 6.5 - 7     purple
    'rgb(120, 0, 120)'   // 7 - 8     dark purple
];

export function getColorForRainfall(rainfall) {
    for (let i = thresholds.length - 1; i >= 0; i--) {
        if (rainfall >= thresholds[i]) {
            return colors[i + 1];
        }
    }
    // If rainfall < smallest threshold
    return colors[0];
}