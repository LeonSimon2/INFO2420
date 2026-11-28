		PrintButton1 = new Image
		PrintButton2 = new Image
		logo1 = new Image
		logo2 = new Image
		if (document.images) {
			PrintButton1.src = "images/Print1.png"
			PrintButton2.src = "images/Print2.png"
			logo1.src = "images/BirdLogo.png"
			logo2.src = "images/BirdLogoAlt.png"
		}


		var imgArray = new Array(
			'image1lg.jpg',
			'image2lg.jpg',
			'image3lg.jpg',
			'image4lg.jpg'


		);


		var titleArray = new Array(
			'American Goldfinch',
			'Mountain Bluebird',
			'Hummingbird',
			'Cardinal'

		);

		var imgPath = "images/fullsize/";

		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle = titleArray[imgID];

			textDiv.innerHTML = textTitle;
		}

		function preloadImages() {
			for (var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}

