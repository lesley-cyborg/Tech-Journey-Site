(function () {
  'use strict';

  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  var emptyState = document.getElementById('empty-state');
  var filterStatus = document.getElementById('filter-status');

  function applyFilter(category) {
    var visibleCount = 0;

    // Update button states
    filterButtons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-filter') === category;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Filter cards
    projectCards.forEach(function (card) {
      var shouldShow = category === 'all' || card.getAttribute('data-category') === category;
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount++;
    });

    // Handle empty state
    emptyState.hidden = visibleCount > 0;
    
    // Announce result count to screen readers
    if (visibleCount === 0) {
      filterStatus.textContent = 'No projects found in this category.';
    } else {
      filterStatus.textContent = 'Showing ' + visibleCount + ' project' + (visibleCount === 1 ? '' : 's') + '.';
    }
  }

  // Attach event listeners
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      applyFilter(button.getAttribute('data-filter'));
    });
  });

  // Initialize
  applyFilter('all');
})();