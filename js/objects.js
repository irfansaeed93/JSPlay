const cabinet = {
    firstRow: 't-shirt',
    secondRow: 'jeans',
    thirdRow: 'shoes',
    draws: {
        rightDraw: 'under garments',
        leftDraw: 'socks',
    },
    doorOpen: false,
    toggleDoor: function (doorStatus) {
        this.doorOpen = doorStatus;
        console.log('Door status changed');
    }

};


const smartPhone = {
    camera: '48mp',
    battery: '5000mAh',
    display: '6 inch',
    processor: 'snapdragon 8000',
    model: 'moto z4',
    makeYear: 2019,
    memory: {
        ram: '4gb',
        rom: '128gb',
    },
    androidVersion: 10,
    onOffState: true,
    toggleState: function (status) {
        this.onOffState = status;
        console.log('mobile onn/off status is now changed');
    }
};



const laptop = {
    brand: 'HP',
    processor: 'AMD Ryzan',
    GPU: '8gb',
    Ram: '64gb',
    SSD: '5tb',
    display: '14inch amoled',
    brightnessLevel: '2400 nits',
    battery: '20,000 mAh',
    makeYear: 2020
};



/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    newVolume: function (volUpdate) {
        this.volume = volUpdate;
    },
    color: "grey",
    newColor: function (colorUpdate) {
        this.color = colorUpdate;
    },
    pocketNum: 15,
    togglePocketNum: function (updateNum) {
        this.pocketNum = updateNum;
    },

    strapLength: {
        left: 26,
        right: 26,
    },
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};
