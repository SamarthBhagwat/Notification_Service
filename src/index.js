const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');
const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');

const app = express();

// Configure middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Listen on port 
app.listen(PORT, () =>{
    console.log(`Server started running on port ${PORT}`);

    // sendBasicEmail(
    //     'support@admin.com',
    //     'samarthsa24@gmail.com',
    //     'Project update - Samarth',
    //     'Hey, This is a testing mail from the notification service of Samarth\'s project, the email notification has been setup successfully. More update will be shared in tonight\'s call with Samarth'
    // );

    // Schedule a job every 10 seconds
    cron.schedule("*/10 * * * * *", function() {
        console. log("running a task every 10 second"); 
    });


});



/**
 * HOW CRON WORKS BTS?
 *  - THere is a cron tab file 
 *  - 
 */