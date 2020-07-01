/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

// orbitalPeriod = 2π √(a^3/GM) where a is the semi-major axis (radius of planet + alt)
function calculateOrbitalPeriod (avgAlt){
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    return 2 * Math.PI * (Math.sqrt(Math.pow(avgAlt + earthRadius, 3)/GM));
}
function orbitalPeriod(arr) {
    return arr.map(x => ({
        name: x["name"],
        orbitalPeriod: Math.round(calculateOrbitalPeriod(x["avgAlt"]))
    }));
}

let eg1 = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(eg1);