const sentMessage = (restParameters) => {
	chrome.runtime.sendMessage({ type: 'echo-content-message', restParameters });
}

const main = async () => {
	chrome.runtime.onMessage.addListener(function ({ type, ...restParameters }, sender, sendResponse) {
		console.log('[content]', { type, restParameters });

		if (type === 'echo-popup') {
			sentMessage( restParameters );
			sendResponse({ type: 'echo-content-response', restParameters })
		}
	});
};

main();
