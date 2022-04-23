function OnFilterClick(caller) {
  var selectedCards = document.querySelectorAll('.card');

  selectedCards.forEach(function (card) {
    card.classList.remove('hidden');
  });
  if (caller.id != 'all-filter-button') {
    selectedCards = document.querySelectorAll(
      '.card:not(.' + caller.id.replace('-filter-button', '-card') + ')'
    );
    selectedCards.forEach(function (card) {
      card.classList.add('hidden');
    });
  }
}
