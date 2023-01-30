//complete

const rotationAmount = 18;
const message = 'AF IS OUT OF WATER';
let ciphertext = '';

for (let i = 0; i < message.length; i++) {

	const charCode = message.charCodeAt(i);

	if (charCode === 32) {
		ciphertext += String.fromCharCode(charCode);
	} else {
		ciphertext += String.fromCharCode(
			((charCode + rotationAmount) <= 90)
				? charCode + rotationAmount
				: (charCode + rotationAmount) % 90 + 64
		);
	}
}

console.log(ciphertext);

//encrypted code: SX AK GML GX OSLWJ

// History of the cipher message:
// 'AF' was the Japanese code-name for the American military base at Midway.  Japan had planned to attack Midway to use it as a base to attack Pearl Harbor.
// The US Navy had already begun to break the Japanese code and sent out a false message stating that Midway was short of water.  Shortly after, the Japanese
// sent out a message stating "AF was short of fresh water" which confirmed the location was Midway.