module.exports = function toReadable(number) {

	let str = number.toString().split("");
	let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



	let result = "";
	if (number < 20) {
		result = a[number];
	}
	if (number >= 20 && number < 100) {
		result = (str[1] == 0) ? b[number / 10] : `${b[Math.floor(number / 10)]} ${a[number % 10]}`;
	}

	if (str.length === 3) {
		if (str[1] == 0 && str[2] == 0) {
			result = `${a[Math.floor(number / 100)]} hundred`;
		}
		else if (str[1] == 0 && str[2] != 0) {
			result = `${a[Math.floor(number / 100)]} hundred ${a[number % 100]}`;
		} else if
			(str[1] == 1) { result = `${a[Math.floor(number / 100)]} hundred ${a[number % 100]}`; }
		else if (str[1] != 0 && str[2] == 0) {
			result = `${a[Math.floor(number / 100)]} hundred ${b[(number % 100) / 10]}`;
		}
		else {
			result = `${a[Math.floor(number / 100)]} hundred ${b[Math.floor((number % 100) / 10)]} ${a[number % 10]}`;
		}
	}
	return result;

};

