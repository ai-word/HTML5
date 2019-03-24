var convertImgToBase64 = function (image, callback, outputFormat) {
	var canvas = document.createElement('CANVAS'),
		ctx = canvas.getContext('2d'),
		img = image instanceof HTMLImageElement ? image : new Image;
	img.removeAttribute('width');
	img.removeAttribute('height');
	if (typeof image === 'string') {
		var url = image;
		img.crossOrigin = 'Anonymous';
		img.onload = getDataURL;
		img.src = url;
	} else {
		return getDataURL();
	}
	function getDataURL() {
		canvas.height = img.height;
		canvas.width = img.width;
		ctx.drawImage(img, 0, 0);
		var dataURL = canvas.toDataURL(outputFormat || 'image/png');
		callback && callback(dataURL);
		canvas = null;
		return dataURL;
	}
}
var dataimage = convertImgToBase64(document.getElementsByTagName('img')[0]);
console.log(dataimage);
convertImgToBase64('http://www.oschina.net/build/oschina/components/imgs/oschina.svg',function(data){
	console.log(data);
});
