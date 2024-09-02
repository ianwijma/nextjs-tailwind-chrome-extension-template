const main = async () => {
    chrome.runtime.onMessage.addListener(function({ type, restParameters }) {
        if ( type === 'echo-content-message' ) {
            console.log('[background] message', { type, restParameters });
        }
    });

    chrome.runtime.onConnect.addListener(function(port) {
        if (port.name === "popup") {
            console.log('[background] popup closed')
        }
    });
}

main();