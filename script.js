const input = document.querySelector("#fruit");
const suggestions = document.querySelector("#suggestions ul");

const fruit = [
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
];

function search(str) {
	return fruit.filter((fruit) => fruit.toLowerCase().includes(str.toLowerCase()));
}

function searchHandler(evt) {
	clearSearchList();

	if (input.value) {
		const filteredFruit = search(evt.target.value);

		filteredFruit.forEach((val) => {
			suggestions.append(createSuggestion(val));
		});
	}

	function createSuggestion(fruit) {
		const fruitListItem = document.createElement("li");
		fruitListItem.innerText = fruit;
		return fruitListItem;
	}
}

function clearSearchList() {
	while (suggestions.firstChild && suggestions.firstChild !== null) {
		suggestions.removeChild(suggestions.firstChild);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	clearSearchList();
}

function clearSearchList() {
	while (suggestions.firstChild && suggestions.firstChild !== null) {
		suggestions.removeChild(suggestions.firstChild);
	}
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
