
let stars_3 = 
	document.getElementsByClassName("star_3");
let output_3 = 
	document.getElementById("output_3");


function grade_3(n) {
	remove_3();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_3";
		else if (n == 2) cls = "two_3";
		else if (n == 3) cls = "three_3";
		else if (n == 4) cls = "four_3";
		else if (n == 5) cls = "five_3";
		stars_3[i].className = "star_3 " + cls;
	}
	output_3.innerText = "Rating is: " + n + "/5";
}

function remove_3() {
	let i = 0;
	while (i < 5) {
		stars_3[i].className = "star_3";
		i++;
	}
}
