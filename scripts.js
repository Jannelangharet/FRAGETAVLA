document.querySelectorAll('.matrix-cell').forEach(cell => {
  cell.addEventListener('click', function() {
    alert('You clicked: ' + this.textContent);
  });
});
