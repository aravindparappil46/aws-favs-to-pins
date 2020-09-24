
// ------- Main Driver Begins ---------

const pins = createPinsFromFavs();
addPinsToHeader(pins);

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

        let pin = document.createElement("div");
        pin.className = "pin-style"
        pin.append(favService);

        if (pins.length < 7) {
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