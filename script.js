document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState = document.getElementById('empty-state');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Update visual active state
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      let visibleCount = 0;

      // Filter cards based on data-category attribute
      projectCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.hidden = false;
          visibleCount++;
        } else {
          card.hidden = true;
        }
      });

      // Show empty state message only if no cards match the filter
      emptyState.hidden = visibleCount > 0;
    });
  });
});