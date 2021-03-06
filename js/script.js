const filters = document.querySelectorAll('.filters-list .button');
var selectedCards = document.querySelectorAll('.card');

filters.forEach(f => f.addEventListener('click', onFiltersClick));

function onFiltersClick() {
  // unhide previously hidden cards
  selectedCards.forEach(card => card.classList.remove('hidden'));
  if (this.id != 'all-filter-button') {
    //select cards by type given by clicked filter
    selectedCards = document.querySelectorAll(
      '.card:not(.' + this.id.replace('-filter-button', '-card') + ')'
    );
    //hide selected cards
    selectedCards.forEach(card => card.classList.add('hidden'));
  }
  //set proper style to active filter button
  document.querySelector('.active-filter').classList.remove('active-filter');
  this.classList.add('active-filter');
}
