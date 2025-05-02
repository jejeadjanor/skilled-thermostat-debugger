### Smart Thermostat Debugger
## Bug 1 - Dropdown room value assignment
- **File** : main.js
- **Line** : Original file Line 206
- **Type** : Logical
- **Description** : Assigned full room object to `<option>` value, causing selection mismatch.
- **Fix** : Changed `option.value = room.name`.

## Bug 2 - Temperature update methods not invoked
- **File** : main.js
- **Line** : Original file line 246,267
- **Type** : Logical
- **Description** : `increaseTemp` and `decreaseTemp` methods were referenced but not invoked.
- **Fix** : Called `room.increaseTemp()` instead of assigning and invoking later.

## Bug 3 - Preset validation still allows update
- **File** : main.js
- **Line** : 
- **Type** : Logical
- **Description** : Invalid input still updated presets
- **Fix** : Add early `return` on error and used the correct coolInput and warmInput range


