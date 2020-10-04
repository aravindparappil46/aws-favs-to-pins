
// ------- Main Driver Begins ---------

let pinCount;
let pinDisplayType;

// Get values from local storage
// Default for number of pins = 7
// Default for display type = both label and icon
chrome.storage.sync.get({ "numOfPins": 7, "pinDisplayType": "both" }, function (options) {
    pinCount = options.numOfPins;
    pinDisplayType = options.pinDisplayType;
});

/*
* Check regularly until the required div appears on the page
*/
var checkExist = setInterval(function () {
    if (document.querySelector('div[data-testid="favorites-container"]')) {
        const pins = createPinsFromFavs();
        addPinsToHeader(pins);
        clearInterval(checkExist);
    }
}, 100);
// ------- Main Driver Ends -----------

/*
* Given an array of pins, appends each of them to nav header
*/
function addPinsToHeader(pins) {
    for (pin of pins) {
        const header = document.getElementById('awsc-nav-header').firstChild;
        header.append(pin);
    }
}

/*
* Iterate over favorites list elements
* and create divs for the pins. Each div contains an anchor 
* that navigates to respective AWS service.
* Only adds first 7 fav services as pins
*/
function createPinsFromFavs() {
    const favs = getAllFavs()
    let pins = []

    for (li of favs) {
        const favService = li.firstChild;
        const icon = favService.getElementsByTagName('i')[0]
        const label = favService.getElementsByTagName('span')[0]
    
        let pin = document.createElement("div");
        pin.className = "pin-style"
        
        switch (pinDisplayType) {
            case "onlyLabel" :
                favService.removeChild(icon)
                break;
            case "onlyIcon" :
                favService.removeChild(label)
                break;
        }

        pin.append(favService)

        if (pins.length < pinCount) {
            pins.push(pin)
        } else {
            break;
        }
    };
    return pins;
}

/*
* Clones favorite services from the menu
* Returns an array of li elements
*/
function getAllFavs() {
    const favContainer = document.querySelector('div[data-testid="favorites-container"]').firstChild.cloneNode(true);
    return favContainer.getElementsByTagName('li');
}
