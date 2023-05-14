window.onload = function () {
	document.getElementById("ClearHistory").onclick = function () {
		chrome.browsingData.removeHistory({
			since: 0,
		});
	};

	document.getElementById("ClearDownloads").onclick = function () {
		chrome.browsingData.removeDownloads({
			since: 0,
		});
	};
};
