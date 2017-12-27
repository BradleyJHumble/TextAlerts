# TextAlerts
An simple rest api that sends texts messages using the twilio api

First download github respository using command below

git clone "https://github.com/BradleyJHumble/TextAlerts.git"

Next you have to download the npm requirements so you do the next command:

npm install

You will need to change some lines to your twilio account information in app.js 

Next to get the server running locally you run:

node app.js

Lastly to test it out you can post to localhost:3000/TextAlerts/(Number you are sending to)/(Your message)/(Any images links)

I suggest using "Advance Rest Client" extension for Chrome for testing purposes, you can download it at the link below:

https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US
