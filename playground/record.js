let records = require("./requirement.json");

const HG24 = "HG24";

console.log(records);
console.log("-----------all wires------------");

let wires = records.filter((element) => {
  if (element["wire_type"] === HG24) {
    // all HG24 wires
    return element;
    // return { ...element, wire_length: 0.0 };
  }
});

console.log("wires --> ", wires);
// console.log(records);

// !get all the elements who has unique wire_number
let uniqueWireNumber = {};

wires.forEach((wire) => {
  if (
    uniqueWireNumber.hasOwnProperty(wire["wire_number"]) ||
    wire['wire_color'] !== ""
  ) {
    uniqueWireNumber[wire["wire_number"]] = null;
  } else {
    // shielding wire and unique wire_number
    uniqueWireNumber[wire["wire_number"]] = wire;
  }
});

/* let wireNumberRetain = {};

for (const key in uniqueWireNumber) {
  if (uniqueWireNumber.hasOwnProperty(key) && uniqueWireNumber[key]) {
    wireNumberRetain[key] = uniqueWireNumber[key];
  }
}*/
console.log("----");
console.log(uniqueWireNumber);

/* let resultWires = wires.map((wire) => {
  if (wireNumberRetain[wire.wire_number]) {
    return wire;
  } else {
    return { ...wire, wire_length: "0.0" };
  }
}); */

let resultWires = records.map((wire) => {
  if (
    wire['wire_type'] === HG24 &&
    uniqueWireNumber.hasOwnProperty(wire["wire_number"])
  ) {
    if (uniqueWireNumber[wire["wire_number"]]) {
      return wire;
    } else {
      return { ...wire, 'wire_length': "-.-" };
    }
  } else {
    return wire;
  }
});

records = resultWires;
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

console.log(records);

// console.log(records);
