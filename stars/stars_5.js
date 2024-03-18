
let stars_5 = 
	document.getElementsByClassName("star_5");
let output_5 = 
	document.getElementById("output_5");


function grade_5(n) {
	remove_5();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_5";
		else if (n == 2) cls = "two_5";
		else if (n == 3) cls = "three_5";
		else if (n == 4) cls = "four_5";
		else if (n == 5) cls = "five_5";
		stars_5[i].className = "star_5 " + cls;
	}
	output_5.innerText = "Rating is: " + n + "/5";
}

function remove_5() {
	let i = 0;
	while (i < 5) {
		stars_5[i].className = "star_5";
		i++;
	}
}
