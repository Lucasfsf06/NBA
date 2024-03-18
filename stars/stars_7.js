
let stars_7 = 
	document.getElementsByClassName("star_7");
let output_7 = 
	document.getElementById("output_7");


function grade_7(n) {
	remove_7();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_7";
		else if (n == 2) cls = "two_7";
		else if (n == 3) cls = "three_&";
		else if (n == 4) cls = "four_7";
		else if (n == 5) cls = "five_7";
		stars_7[i].className = "star_7 " + cls;
	}
	output_7.innerText = "Rating is: " + n + "/5";
}

function remove_7() {
	let i = 0;
	while (i < 5) {
		stars_7[i].className = "star_7";
		i++;
	}
}
