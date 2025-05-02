//mock the main.js functions

describe("Smart Thermostat App", () =>{
    let testRoom;
    //Setup a fresh test room before each test
    beforeEach(() =>{
        testRoom = {
            name: "Living Room Test",
            currTemp: 22,
            coldPreset: 18,
            warmPreset: 28,
            image: "./assets/living-room.jpg",
            airConditionerOn: false,
            startTime: '16:30',
            endTime: '20:00',
        
            setCurrTemp(temp) {
              this.currTemp = temp;
            },
        
            setColdPreset(newCold) {
              this.coldPreset = newCold;
            },
        
            setWarmPreset(newWarm) {
              this.warmPreset = newWarm;
            },
        
            decreaseTemp() {
              this.currTemp--;
            },
        
            increaseTemp() {
              this.currTemp++;
            },
            toggleAircon() {
              this.airConditionerOn
                ? (this.airConditionerOn = false)
                : (this.airConditionerOn = true);
            },
        };
    });

    test('increaseTemp increases temperature by 1', ()=>{
        testRoom.increaseTemp();
        expect(testRoom.currTemp).toBe(23);
    });

    test('decreaseTemp decreases temperature by 1', ()=>{
        testRoom.decreaseTemp();
        expect(testRoom.currTemp).toBe(21);
    });

    test('setCurrTemp sets the correct temperature', ()=>{
        testRoom.setCurrTemp(25)
        expect(testRoom.currTemp).toBe(25);
    });

    test('setColdPreset updates cold preset', ()=>{
        testRoom.setColdPreset(16);
        expect(testRoom.coldPreset).toBe(16);
    });

    test('setWarmPreset updates warm preset', ()=>{
        testRoom.setWarmPreset(30);
        expect(testRoom.warmPreset).toBe(30);
    });

    test('toggleAircon switches airConditionerOn state', ()=>{
        testRoom.toggleAircon()
        expect(testRoom.airConditionerOn).toBe(true);
        testRoom.toggleAircon()
        expect(testRoom.airConditionerOn).toBe(false);
    });
})