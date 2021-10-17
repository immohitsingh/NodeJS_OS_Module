const OS = require('OS');
try {

    console.log("OS CPU architecture: " + OS.architecture());
    console.log("Free memory of the system: " + OS.freememory());
    console.log("Total memory of the system: " + OS.totmemory());
    console.log("OS Platform: " + OS.type());
    console.log("Information about the current user: " + OS.userInfo());
} catch (err) {
    console.log(": Error occurred " + err);
}