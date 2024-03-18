
let stars_4 = 
	document.getElementsByClassName("star_4");
let output_4 = 
	document.getElementById("output_4");


function grade_4(n) {
	remove_4();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_4";
		else if (n == 2) cls = "two_4";
		else if (n == 3) cls = "three_4";
		else if (n == 4) cls = "four_4";
		else if (n == 5) cls = "five_4";
		stars_4[i].className = "star_4 " + cls;
	}
	output_4.innerText = "Rating is: " + n + "/5";
}

function remove_4() {
	let i = 0;
	while (i < 5) {
		stars_4[i].className = "star_4";
		i++;
	}
}
