$(function() {

	// Get first row and detect latest two columns that are full of data
	var firstRow = $('.js-score-row')[0];
	var firstRowColumns = $(firstRow).find('.js-pfield');
	var columns = [];
	for(var i=0; i<firstRowColumns.length; i++) {
		var column = $(firstRowColumns[i]);
		var columnScore = parseInt(column.data('pscore'));
		if (!isNaN(columnScore)) {
			columns.push(column.data('p'));
		}
	}

	var placementSortFunction = function(a, b) {
		var scoreA = parseInt($(a).data('pscore'));
		var scoreB = parseInt($(b).data('pscore'));
		if (scoreA < scoreB) {
			return 1;
		}
		if (scoreA > scoreB) {
			return -1;
		}
		return 0;
	};

	// Set column fields score placement
	var selectedColumns = columns.slice(Math.max(columns.length - 2, 1));
	for(var k=0; k<selectedColumns.length; k++) {
		var columnElements = $('.js-pfield-' + selectedColumns[k]);
		columnElements.sort(placementSortFunction);
		for(var m=0; m<columnElements.length; m++) {
			$(columnElements[m]).attr('data-placement', m+1);
			$(columnElements[m]).addClass('js-pfield-active');
		};
	}

	// Set row progression
	var rows = $('.js-score-row');
	for(var j=0; j<rows.length; j++) {
		var row = $(rows[j]);
		var rowFields = row.find('.js-pfield-active');
		var val1 = ($(rowFields[0]).data('placement'));
		var val2 = ($(rowFields[1]).data('placement'));

		var progression = val2 - val1;
		row.find('.js-score-progression').html(((progression > 0) ? '+':'') + progression);

		if (progression > 0) {
			row.removeClass('danger');
			row.addClass('success');
		}
		if (progression < 0) {
			row.addClass('danger');
			row.removeClass('success');
		}
		if (progression === 0) {
			row.removeClass('danger');
			row.removeClass('success');
		}
	}
});