let score = localStorage.getItem("score");
let click = document.querySelector(".clicky");
let scoreList = document.querySelector(".scoreList");

function view() {
	if (localScore != null) {
		scoreList.innerHTML = JSON.parse(localScore);
	}
}

click.onlick = function () {
	view();
};
