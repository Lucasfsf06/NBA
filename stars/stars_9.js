
let stars_9 = 
	document.getElementsByClassName("star_9");
let output_9 = 
	document.getElementById("output_9");


function grade_9(n) {
	remove_9();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_9";
		else if (n == 2) cls = "two_9";
		else if (n == 3) cls = "three_9";
		else if (n == 4) cls = "four_9";
		else if (n == 5) cls = "five_9";
		stars_9[i].className = "star_9 " + cls;
	}
	output_9.innerText = "Rating is: " + n + "/5";
}

function remove_9() {
	let i = 0;
	while (i < 5) {
		stars_9[i].className = "star_9";
		i++;
	}
}
