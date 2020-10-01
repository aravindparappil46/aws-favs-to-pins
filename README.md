# aws-favs-to-pins
Chrome extension to convert favorites in AWS console to pins on the navigation header (as it was before the UI update).

Find it [here](https://chrome.google.com/webstore/detail/aws-favorites-to-pins/ncldghmgebieadpbefcmhicjepidmnhc/related) on the Chrome Web Store!

# How does it work?
- All favorites in AWS Console are within a div that has a property called `data-testid="favorites-container"`
- Fetches first 7 of these favorites, clones them into new divs and adds on to the nav header element

# Contributors
Huge thanks to Felix Breidenstein (@fleaz) for fixing the bug where pins were not showing up occasionally and for including more URL paths to be matched!

# Limitations
- Favorites menu is alphabetically ordered and only the top 7 of them are picked to be pins. Can't pick and choose to our liking
- Service name label and icon are both shown always. Not configurable to show just the icon/label
