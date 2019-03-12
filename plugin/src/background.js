chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ active: false });
});

chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.storage.sync.get('active', function(data) {
		var newStatus = !data.active,
			icon = newStatus ? 'active_icon' : 'icon';

		chrome.browserAction.setIcon({ 
			path: 'resources/' + icon + '.png' 
		});

		chrome.storage.sync.set({ active : newStatus});
		
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.executeScript(tab.id, {code: 'window.location.reload();'});
		});
    });
});