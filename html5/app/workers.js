var countNum = 0;

self.onmessage = function(e){
    console.log("workers.js e: ", e)
    if(e){
        countNum = e.data;
    }

    function count() {
        postMessage(countNum);
        countNum++;

        if(countNum < 100){
            setTimeout(count, 1000);
        };

    };

    count();
}
