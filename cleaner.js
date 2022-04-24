window.onload = function(){
    document.getElementById('CleanHistory').onclick = function(){
        chrome.browsingData.removeHistory(
            {
                "since": 0,
            },
        )
    }

    document.getElementById('CleanDownloads').onclick = function(){
        chrome.browsingData.removeDownloads(
            {
                "since": 0,
            },
        )
    }
}