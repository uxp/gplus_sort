
if (document.readyState == "complete") {

	// Iterative Bubble Sort... recursion probably isn't the best for JS
	// Also, Bubble sort is only of the only sorting algorithms I know that isnt recursive.
	function sortStreamArray(data) {
		var N = data.length;
		for (var i = 0; i < N - 1; i++) {
			for (var j = i+1; j < N; j++) {
				if ( data[i] > data[j] ) {
					var q = data[j];
					data[j] = data[i];
					data[i] = q;
				}
			}
		}
		return data;
	}

	// data[i][0] = timestamp
	// data[i][1] = timestamp node
	// data[i][2] = streampost node
	function sortStreamPosts() {
		var streamDiv = document.getElementsByClassName('a-b-f-i-oa');
		if ((streamDiv.length == 1) && (streamDiv[0].children.length > 0)) {
			var data = [];
			for (var i=0; i < streamDiv[0].children.length; i++) {
				data[i] = [];
				data[i][0] = Date.parse(streamDiv[0].children[i].getElementsByClassName('a-Ja-h a-b-h-Jb a-f-i-Ad')[0].title);
				data[i][1] = streamDiv[0].children[i].getElementsByClassName('a-Ja-h a-b-h-Jb a-f-i-Ad')[0];
				data[i][2] = streamDiv[0].children[i];
			}
			// sort stream
			var sortedData = sortStreamArray(data);
			if (sortedData.length != data.length) { console.log("ERROR: data returned malformed from sorting"); console.log(sortedData.length); return false; };
			sortedData.reverse();

			// rebuild stream
			var newStream = document.createElement('div');
			newStream.setAttribute('class', 'a-b-f-i-oa');

			for (var i = 0; i < sortedData.length; i++) {
				newStream.appendChild(sortedData[i][2]);
			}

			// redraw list
			streamDiv[0].parentNode.replaceChild(newStream, streamDiv[0]);
		}
	}
	sortStreamPosts();


}
