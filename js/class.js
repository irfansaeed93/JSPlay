/**
 * Creating classes
 * 
 * Class declaration: class Name {}
 * Class expression: const Name = class{}
 * 
 */




class SmartPhone {
    constructor(
        // Define Parameters:
        camera,
        battery,
        display,
        model,
        makeYear,
        ram,
        rom,
        androidVersion,
        onOffState
    ) {
        // Define Properties:
        this.camera = camera;
        this.battery = battery;
        this.display = display;
        this.model = model;
        this.makeYear = makeYear;
        this.memory = {
            ram: ram,
            rom: rom,
        };
        this.androidVersion = androidVersion;
        this.onOffState = onOffState;
    }
    //Add function like normal functions:
    toggleState(status) {
        this.onOffState = status;
    }

}


export default SmartPhone;
