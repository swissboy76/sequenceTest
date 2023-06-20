window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		cookie: {
			domain: '.exeter.ac.uk'
			},
	  palette: {
		popup: {
		  background: "#000"
		},
		button: {
		  background: "#cccccc"
		}
	  },
	  content: { 
		link: 'privacy policy',
		href: "http://www.exeter.ac.uk/privacy/",
		message: 'Our site uses cookies to help give you a better experience. By continuing to use it you consent to the use of cookies as set out in our',
 		dismiss: 'Close',
	  }
	})

});
