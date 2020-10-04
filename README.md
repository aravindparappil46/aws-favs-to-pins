# aws-favs-to-pins
Chrome extension to convert favorites in AWS console to pins on the navigation header (as it was before the UI update).

Find it [here](https://chrome.google.com/webstore/detail/aws-favorites-to-pins/ncldghmgebieadpbefcmhicjepidmnhc/) on the Chrome Web Store!

# Configuration Options
You can choose how many pins you want to display & also how you want them to show up on the navigation header
- Only Label: Shows only the name of the AWS service
- Only Icon: Shows only the logo of the AWS service
- Both: Shows both icon and label

These options can be configured by clicking on the extension icon on the browser and going to `Options`
By default, the number of pins is 7 & both icon and label are shown for the pins.

# How does it work?
- All favorites in AWS Console are within a div that has a property called `data-testid="favorites-container"`
- Fetches these favorites, clones them into new divs and adds on to the nav header

# Contributors
Huge thanks to [Felix Breidenstein](https://github.com/fleaz) for fixing the bug where pins were not showing up occasionally, for including more URL paths to be matched and for kickstarting the effort to make this extension configurable!

# Limitations
- Favorites menu is alphabetically ordered and only the top 7 of them are picked to be pins. Can't pick and choose to our liking