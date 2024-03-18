
let stars_6 = 
	document.getElementsByClassName("star_6");
let output_6 = 
	document.getElementById("output_6");


function grade_6(n) {
	remove_6();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_6";
		else if (n == 2) cls = "two_6";
		else if (n == 3) cls = "three_6";
		else if (n == 4) cls = "four_6";
		else if (n == 5) cls = "five_6";
		stars_6[i].className = "star_6 " + cls;
	}
	output_6.innerText = "Rating is: " + n + "/5";
}

function remove_6() {
	let i = 0;
	while (i < 5) {
		stars_6[i].className = "star_6";
		i++;
	}
}
