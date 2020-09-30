const input = document.getElementById('countInput');
const button = document.getElementById('saveButton');
const message = document.getElementById('messageSpan');

chrome.storage.sync.get(function (options) {
    input.value = options.count;
});

button.addEventListener('click', (event) => {
    value = input.value;
    chrome.storage.sync.set({ "count": value }, function () {
        messageSpan.innerHTML = "New value has been saved!";
    })
});
