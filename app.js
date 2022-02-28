
const playDisplay = document.querySelector('.play-container')
const keyBoard = document.querySelector('.key-container')
// const messageDisplay = document.querySelector('.message-container')

	console.log(playDisplay)


const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

const playRows= [
			['','','','',''],
			['','','','',''],
			['','','','',''],
			['','','','',''],
			['','','','',''],
			['','','','','']];


playRows.forEach((playRow, playRowIndex) =>{
	const rowElement = document.createElement('div')
	rowElement.setAttribute('id', 'playRow-'+playRowIndex)
	playRow.forEach((guess, guessIndex)=>{
		const tileElement = document.createElement('div')
		tileElement.setAttribute('id', 'playRow-' + playRowIndex + 'tile ' + guessIndex)
		rowElement.append(tileElement)
	})
	// playDisplay.append(rowElement)
});

keys.forEach(key => {
	const keyButton= document.createElement('button')
	keyButton.innerHTML = key
	keyButton.setAttribute('id', key)
	keyButton.addEventListener('click', ()=>  keyClick(key))
	// keyBoard.append(keyButton)
})

