const input = document.getElementById('countInput');
const button = document.getElementById('saveButton');
const message = document.getElementById('messageSpan');
const pinDisplayType = document.getElementById('pinDisplayType');

chrome.storage.sync.get(function (options) {
    input.value = options.numOfPins;
    pinDisplayType.value = options.pinDisplayType;
});

button.addEventListener('click', (event) => {
    desiredNumOfPins = input.value;
    desiredDisplayType = pinDisplayType.value;
    
    chrome.storage.sync.set({ "numOfPins": desiredNumOfPins, "pinDisplayType": desiredDisplayType }, function () {
        messageSpan.innerHTML = "Successfully saved your options!";
    });

});