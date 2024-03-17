


function showTooltip(text) {
  const stateInfo = document.getElementById('state-info');
    stateInfo.textContent = text;
  stateInfo.style.display = 'block';
} 
function hideTooltip() {
  const stateInfo = document.getElementById('state-info');
  stateInfo.style.display = 'none';
}