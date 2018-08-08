(function ($) {
	$.fn.emailValidator = function () {
		// your code here
		let isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		return isEmail.test(this.val())
	}
})(jQuery)
