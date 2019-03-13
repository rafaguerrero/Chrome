/* eslint-disable */

window.onload = function() {
	chrome.storage.sync.get(['name1', 'name2', 'name3'], function(data) {
		const functionalities = document.querySelectorAll('#rgc-functionalities input');

		for(var i = 0; i < functionalities.length; i++) {
			const func = functionalities[i];

			!!data[func.name] && func.setAttribute('checked', 'true');
			
			func.addEventListener('click', (event) => {
				const message = {};
				message[event.target.name] = event.target.checked;
				chrome.runtime.sendMessage(message);
			});
		}
	});
}