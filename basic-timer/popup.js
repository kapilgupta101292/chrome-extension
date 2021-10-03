const timeELement = document.getElementById('time');
const nameElement = document.getElementById('name');
const currentTime = new Date().toLocaleDateString();
timeELement.textContent = `The time is ${currentTime}`;
nameInput.textContent = chrome.action.setBadgeText(
	{
		text: 'TIME',
	},
	() => {
		console.log('Finished setting the badge text.');
	}
);

chrome.storage.sync.get(['name'], (res) => {
	const name = res.name ?? '???';
	nameElement.textContent = `Your name is : ${name}`;
});

console.log(this);
