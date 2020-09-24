pins = window.localStorage.getItem('pinsCache');

if (pins) {
    addPinsToHeader(pins);
} else {
    createPinsFromFavs();
    addPinsToHeader(pins);
}

/*
* Given an array of pins, appends each of them to nav header
*/
function addPinsToHeader(pins) {
    for (pin of pins) {
        header = document.getElementById('awsc-nav-header').firstChild;
        header.append(pin);
    }
}

/*
* Iterate over favorites container ordered list
* and create divs for the pins, containing the anchor element 
* that navigates to respective AWS service.
* Adds them to localStorage as well.
* Returns an array of such pin divs 
*/
function createPinsFromFavs() {
    favContainer = document.querySelector('div[data-testid="favorites-container"]').firstChild.cloneNode(true);
    favs = favContainer.getElementsByTagName('li');
    pins = []

    for (li of favs) {
        favService = li.firstChild;
        pin = document.createElement("div");
        pin.className = "pin-style"
        pin.append(favService);
        pins.append(pin)
    };
    window.localStorage.setItem('pinsCache', pins)
    return pins;
}