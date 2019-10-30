let pieces = document.querySelectorAll("#field > span");
var i;

for (i in pieces) {

pieces[i].addEventListener("click", function(e) {
	let pawn = e.target.parentNode;
	let grid_area = prompt("Enter a grid area: ");
	pawn.style.gridArea = grid_area;
});
}