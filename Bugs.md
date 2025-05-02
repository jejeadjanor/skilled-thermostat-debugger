## Smart Thermostat - Debugging
### Bug 1 - Dropdown room value assignment
- **File** : main.js
- **Line** : Original file Line 206
- **Type** : Logical
- **Description** : Assigned full room object to `<option>` value, causing selection mismatch.
- **Fix** : Changed `option.value = room.name`.

### Bug 2 - Temperature update methods not invoked
- **File** : main.js
- **Line** : Original file line 246,267
- **Type** : Logical
- **Description** : `increaseTemp` and `decreaseTemp` methods were referenced but not invoked.
- **Fix** : Called `room.increaseTemp()` instead of assigning and invoking later.

### Bug 3 - Preset validation still allows update
- **File** : main.js
- **Line** : Original fline line ~306-316
- **Type** : Logical
- **Description** : Invalid input still updated presets
- **Fix** : Add early `return` on error and use the correct coolInput and warmInput range and display the correct error message.

### Bug 4 - Wrong max and min attribute value set  
- **File** : index.html
- **Line** : Original file line ~104 and ~110
- **Type** : html attribute value
- **Description** : Invalid coolInput max value and warmInput min value
- **Fix** : Add correct coolInput max value of 24 and warmInput min value of 25.

### Bug 5 -   Wrong display of aircon message when button is toggled                               
- **File** : main.js
- **Line** : Line 406 `${room.currTemp > 25 ? "Cooling room to: " : "Warming room to: "}${room.currTemp}°`
- **Type** : Logical
- **Description** : Wrong display of aircon message when button is toggled `${room.currTemp > 25 ? "Cooling room to: " : "Warming room to: "}${room.currTemp}°`
- **Fix** : Display correct message per room temperature `${room.currTemp > 25 ? "Warming room to: " : "Cooling room to: "}${room.currTemp}°`

### Bug 6 -   cool and warmOverlay colors interchanged 
- **File** : main.js
- **Line** : Line 145-151 
- **Type** : Logical
- **Description** : cool and warmOverlay color wrongly assigned const warmOverlay= `linear-gradient(
    to bottom,
     rgba(141, 158, 247, 0.2),
     rgba(194, 197, 215, 0.1)
)`
const coolOverlay = `linear-gradient(to bottom, rgba(236, 96, 98, 0.2), rgba(248, 210, 211, 0.13))`
- **Fix** : Correct overlay color assignment


