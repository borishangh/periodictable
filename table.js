const el = {
	sblock_elements: [
		1, 3, 4, 11, 12, 19, 20, 37, 38, 55, 56, 87, 88],
	pblock_elements: [
		2, 5, 6, 7, 8, 9, 10,
		13, 14, 15, 16, 17, 18,
		31, 32, 33, 34, 35, 36,
		49, 50, 51, 52, 53, 54,
		81, 82, 83, 84, 85, 86,
		113, 114, 115, 116, 117, 118],
	dblock_elements: [
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
		39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
		72, 73, 74, 75, 76, 77, 78, 79, 80, 104,
		105, 106, 107, 108, 109, 110, 111, 112],
	fblock_elements: [
		57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
		89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
}

const sblock = document.querySelector('.sblock')
const pblock = document.querySelector('.pblock')
const dblock = document.querySelector('.dblock')
const fblock = document.querySelector('.fblock')

document.addEventListener('DOMContentLoaded', () => create_table())

async function create_table() {
	const data = await get_data();

	create_block(data.elements, el.sblock_elements, sblock)
	create_block(data.elements, el.pblock_elements, pblock)
	create_block(data.elements, el.dblock_elements, dblock)
	create_block(data.elements, el.fblock_elements, fblock)

}

function create_block(elements, elementarray, block) {
	for (i in elementarray) {
		let n = elementarray[i];
		create_element(elements[n - 1], block)
	}
}

function create_element(element, parent) {
	let block = document.createElement('div')
	let number = document.createElement('div')
	let symbol = document.createElement('div')

	block.className = `block a${element.number - 1}`
	number.className = 'number'
	symbol.className = 'symbol'

	number.innerHTML = element.number
	symbol.innerHTML = element.symbol

	block.appendChild(number)
	block.appendChild(symbol)

	parent.appendChild(block)

}

