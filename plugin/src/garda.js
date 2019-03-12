const ENV = 'b.marfeel.com';

chrome.storage.sync.get('active', function(data) {
    if(data.active) {
        var script = document.createElement('script');
        script.dataset.cfasync = 'false';
        script.dataset.mrfScript = 'garda';
        script.dataset.mrfDt = '1';
        script.dataset.mrfHost = ENV;
        script.src = 'https://bc.marfeelcache.com/statics/marfeel/gardac-sync.js';

        document.write(script.outerHTML);
    }
});