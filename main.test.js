/**
 * @jest-environment jsdom
 */


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

describe('Temperature buttons', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <button id="increase"></button>
    <button id="reduce"></button>
    <span id="temp"></span>
    `;
  });

  test('increase button triggers temperature increase', () =>{
    const increaseBtn = document.getElementById('increase');
    const tempDisplay = document.getElementById('temp');

    let room = {currTemp: 22, increaseTemp() { this.currTemp++}};
    increaseBtn.addEventListener('click', () => {
      room.increaseTemp();
      tempDisplay.textContent = `${room.currTemp}°`
    });

    increaseBtn.click();
    expect(room.currTemp).toBe(23);
    expect(tempDisplay.textContent).toBe('23°');
  });


  test('reduce button triggers temperature decrease', () => {
    const increaseBtn = document.getElementById('reduce');
    const tempDisplay = document.getElementById('temp');

    let room = {currTemp: 22, decreaseTemp() { this.currTemp--}};
    increaseBtn.addEventListener('click', () => {
      room.decreaseTemp();
      tempDisplay.textContent = `${room.currTemp}°`
    });

    increaseBtn.click();
    expect(room.currTemp).toBe(21);
    expect(tempDisplay.textContent).toBe('21°');
  });
});