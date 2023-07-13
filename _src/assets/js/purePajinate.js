/*
 * A pure javascript class for paginating through any number of DOM elements
 * v1.0.2
 *
 * @copyright	Copyright (C) 2011 Simplify Your Web, Inc. All rights reserved.
 * @license	GNU General Public License version 3 or later; see LICENSE.txt
 */
// https://www.cssscript.com/demo/universal-content-pagination/
class purePajinate {
	constructor(options) {
		this.config = {
			containerSelector: '.items',
			itemSelector: '.item',
			navigationSelector: '.page_navigation',
			itemsPerPage: 10,
			pageLinksToDisplay: 10,
			startPage: 0,
			wrapAround: false,
			navLabelFirst: 'First',
			navLabelPrev: 'Prev',
			navLabelNext: 'Next',
			navLabelLast: 'Last',
			navAriaLabelFirst: 'First',
			navAriaLabelPrev: 'Prev',
			navAriaLabelNext: 'Next',
			navAriaLabelLast: 'Last',
			navOrder: ["first", "prev", "num", "next", "last"],
			showFirstLast: false,
			showPrevNext: true,
			hideOnSmall: false,
			defaultClass: '',
			activeClass: "active",
			disabledClass: "disabled",
			onInit: function onInit() { },
			onPageDisplayed: function onPageDisplayed() { }
		};
		if (typeof options !== "undefined") {
			var userSettings = options;
			for (var attrname in userSettings) {
				if (userSettings[attrname] != undefined) {
					this.config[attrname] = userSettings[attrname];
				}
			}
		}
		this.init();
	}
	init() {
		this.config.item_container = document.querySelector(this.config.containerSelector);
		this.config.pagination_containers = document.querySelectorAll(this.config.navigationSelector);
		/* Get all the items that are paginated */
		var items = this.config.item_container.querySelectorAll(this.config.itemSelector);
		if (this.config.hideOnSmall && this.config.itemsPerPage >= items.length) {
			return;
		}
		this.current_page = this.config.startPage;
		for (let i = 0; i < items.length; i++) {
			items[i].style.display = 'none';
			items[i].classList.add('hidden');
		}
		/* Calculate the number of pages needed */
		var number_of_pages = Math.ceil(items.length / this.config.itemsPerPage);
		/* Construct the navigation bar */
		var more = '<li class="ellipse more"><span>...</span></li>';
		var less = '<li class="ellipse less"><span>...</span></li>';
		var first = !this.config.showFirstLast ? '' : '<li class="first_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelFirst + '" onclick="return false;">' + this.config.navLabelFirst + '</a></li>';
		var last = !this.config.showFirstLast ? '' : '<li class="last_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelLast + '" onclick="return false;">' + this.config.navLabelLast + '</a></li>';
		var previous = !this.config.showPrevNext ? '' : '<li class="previous_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelPrev + '" onclick="return false;">' + this.config.navLabelPrev + '</a></li>';
		var next = !this.config.showPrevNext ? '' : '<li class="next_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelNext + '" onclick="return false;">' + this.config.navLabelNext + '</a></li>';
		var navigation_html = '<ul>';
		for (let i = 0; i < this.config.navOrder.length; i++) {
			switch (this.config.navOrder[i]) {
				case "first":
					navigation_html += first;
					break;
				case "last":
					navigation_html += last;
					break;
				case "next":
					navigation_html += next;
					break;
				case "prev":
					navigation_html += previous;
					break;
				case "num":
					if (this.config.showPrevNext) {
						navigation_html += less;
					}
					var current_link = 0;
					while (number_of_pages > current_link) {
						var extra_class = '';
						if (current_link == 0) {
							extra_class = ' first';
						}
						if (current_link == number_of_pages - 1) {
							extra_class = ' last';
						}
						navigation_html += '<li class="page_link' + extra_class + ' ' + this.config.defaultClass + '" longdesc="' + current_link + '"><a href="" aria-label="' + (current_link + 1) + '" onclick="return false;"><span>' + (current_link + 1) + '</span></a></li>';
						current_link++;
					}
					if (this.config.showPrevNext) {
						navigation_html += more;
					}
					break;
			}
		}
		navigation_html += '</ul>';
		/* Iterate through all pagination blocks */
		this.config.pagination_containers.forEach(function (el) {
			el.innerHTML = navigation_html;
			/* Show a subset of page links */
			var page_links = el.querySelectorAll('.page_link');
			for (let i = 0; i < page_links.length; i++) {
				if (i >= this.config.pageLinksToDisplay + this.config.startPage || i < this.config.startPage) {
					page_links[i].style.display = 'none';
				}
			}
			/* Hide the more/less indicators */
			el.querySelectorAll('.ellipse').forEach(function (ellipses) {
				ellipses.style.display = 'none';
			});
			/* Set the active page link styling */
			if (page_links.length > 0) {
            	var first_page = page_links[0];
            	first_page.classList.add('active_page');
            	first_page.classList.add(this.config.activeClass);
            }
			this.total_page_no_links = page_links.length;
			this.config.pageLinksToDisplay = Math.min(this.config.pageLinksToDisplay, this.total_page_no_links);
			const that = this; /* avoids bind(this) in function(e) { }.bind(this) */
			if (this.config.showFirstLast) {
				/* Event handler for 'First' link */
				el.querySelector('.first_link').addEventListener('click', function (e) {
					e.preventDefault();
					that.showFirstPage(el);
				});			
				/* Event handler for 'Last' link */
				el.querySelector('.last_link').addEventListener('click', function (e) {
					e.preventDefault();
					that.showLastPage(el);
				});
			}
			if (this.config.showPrevNext) {
				/* Event handler for 'Prev' link */
				el.querySelector('.previous_link').addEventListener('click', function (e) {
					e.preventDefault();
					that.showPrevPage(el);
				});
				
				el.querySelector('.previous_link').addEventListener('keydown', function (e) {
					if (e.keyCode == 37) {
						this.click();
					}
				});
				
				/* Event handler for 'Next' link */
				el.querySelector('.next_link').addEventListener('click', function (e) {
					e.preventDefault();
					that.showNextPage(el);
				});
				
				el.querySelector('.next_link').addEventListener('keydown', function (e) {
					if (e.keyCode == 39) {
						this.click();
					}
				});
			}
			/* Event handler for each 'Page' link */
			el.querySelectorAll('.page_link').forEach(function (page) {
				page.addEventListener('click', function (e) {
					e.preventDefault();
					that.gotopage(page.getAttribute('longdesc'));
				});
			}, that);
		}, this);
		this.gotopage(parseInt(this.config.startPage));
		/* Set the pagination as ready */
		this.config.item_container.classList.add('loaded');
		/* Call user onInit */
		this.config.onInit.call(this);
	}
	showFirstPage(el) {
		this.movePageNumbersRight(el.querySelector('.first_link'), 0);
		this.gotopage(0);
	}
	showLastPage(el) {
		var lastPage = this.total_page_no_links - 1;
		this.movePageNumbersLeft(el.querySelector('.last_link'), lastPage);
		this.gotopage(lastPage);
	}
	showPrevPage(el) {
		var new_page = parseInt(this.current_page) - 1;
		var before_active = el.querySelector('.previous_link').parentNode.querySelector('.active_page').previousElementSibling;
		if (before_active != null && before_active.classList.contains('page_link')) {
			this.movePageNumbersRight(el.querySelector('.previous_link'), new_page);
			this.gotopage(new_page);
		}
		else if (this.config.wrapAround) {
			this.movePageNumbersLeft(el.querySelector('.previous_link'), this.total_page_no_links - 1);
			this.gotopage(this.total_page_no_links - 1);
		}
	}
	showNextPage(el) {
		var new_page = parseInt(this.current_page) + 1;
		var after_active = el.querySelector('.next_link').parentNode.querySelector('.active_page').nextElementSibling;
		if (after_active != null && after_active.classList.contains('page_link')) {
			this.movePageNumbersLeft(el.querySelector('.next_link'), new_page);
			this.gotopage(new_page);
		}
		else if (this.config.wrapAround) {
			this.movePageNumbersRight(el.querySelector('.next_link'), 0);
			this.gotopage(0);
		}
	}
	gotopage(page_num) {
		page_num = parseInt(page_num, 10);
		var ipp = parseInt(this.config.itemsPerPage);
		/* Find the start of the next slice */
		var start_from = page_num * ipp;
		/* Find the end of the next slice */
		var end_on = start_from + ipp;
		/* Hide the current page */
		var items = this.config.item_container.querySelectorAll(this.config.itemSelector);
		for (let i = 0; i < items.length; i++) {
			if (i >= end_on || i < start_from) {
				items[i].style.display = 'none';
				items[i].classList.remove('visible');
				items[i].classList.add('hidden');
			}
			else {
				items[i].style.display = 'inline-block';
				setTimeout(function () {
					items[i].classList.remove('hidden');
					items[i].classList.add('visible');
				}, 20);
			}
		}
		/* Reassign the active class */
		this.config.pagination_containers.forEach(function (el) {
			var page_links = el.querySelectorAll('.page_link');
			for (let i = 0; i < page_links.length; i++) {
				if (page_links[i].getAttribute('longdesc') == page_num) {
					page_links[i].classList.add('active_page');
					page_links[i].classList.add(this.config.activeClass);
				}
				else {
					page_links[i].classList.remove('active_page');
					page_links[i].classList.remove(this.config.activeClass);
				}
			}
		}, this);
		/* Set the current page */
		this.current_page = page_num;
		/* Hide the more and/or less indicators */
		this.toggleMoreLess();
		/* Add a class to the next or prev links if there are no more pages next or previous to the active page */
		if (!this.config.wrapAround) {
			this.tagNextPrev();
		}
		this.config.onPageDisplayed.call(this, page_num + 1);
	}
	movePageNumbersLeft(e, new_p) {
		var new_page = new_p;
		e.parentNode.querySelectorAll('.page_link').forEach(function (el) {
			if (el.getAttribute('longdesc') == new_page && !el.classList.contains('active_page') && el.style.display == 'none') {
				this.config.pagination_containers.forEach(function (el) {
					var page_links = el.querySelectorAll('.page_link');
					for (let i = 0; i < page_links.length; i++) {
						if (i < new_page + 1 && i >= parseInt(new_page - this.config.pageLinksToDisplay + 1)) {
							page_links[i].style.display = 'inline';
						}
						else {
							page_links[i].style.display = 'none';
						}
					}
				}, this);
			}
		}, this);
	}
	movePageNumbersRight(e, new_p) {
		var new_page = new_p;
		e.parentNode.querySelectorAll('.page_link').forEach(function (el) {
			if (el.getAttribute('longdesc') == new_page && !el.classList.contains('active_page') && el.style.display == 'none') {
				this.config.pagination_containers.forEach(function (el) {
					var page_links = el.querySelectorAll('.page_link');
					for (let i = 0; i < page_links.length; i++) {
						if (i < new_page + parseInt(this.config.pageLinksToDisplay) && i >= new_page) {
							page_links[i].style.display = 'inline';
						}
						else {
							page_links[i].style.display = 'none';
						}
					}
				}, this);
			}
		}, this);
	}
	toggleMoreLess() {
		this.config.pagination_containers.forEach(function (container) {
			var more = container.querySelector('.more');
			if (more != null) {
				more.style.display = 'none';
				if (container.querySelector('.page_link.last') && this.isHidden(container.querySelector('.page_link.last'))) {
					more.style.display = 'inline';
				}
			}
			var less = container.querySelector('.less');
			if (less != null) {
				less.style.display = 'none';
				if (container.querySelector('.page_link.first') && this.isHidden(container.querySelector('.page_link.first'))) {
					less.style.display = 'inline';
				}
			}
		}, this);
	}
	tagNextPrev() {
		this.config.pagination_containers.forEach(function (container) {
			var next = container.querySelector('.next_link');
			var previous = container.querySelector('.previous_link');
			var first = container.querySelector('.first_link');
			var last = container.querySelector('.last_link');
			if (container.querySelector('.page_link.last') && container.querySelector('.page_link.last').classList.contains('active_page')) {
				if (next != null) {
					next.classList.add('no_more');
					next.classList.add(this.config.disabledClass);
				}
				if (last != null) {
					last.classList.add('no_more');
					last.classList.add(this.config.disabledClass);
				}
			}
			else {
				if (next != null) {
					next.classList.remove('no_more');
					next.classList.remove(this.config.disabledClass);
				}
				if (last != null) {
					last.classList.remove('no_more');
					last.classList.remove(this.config.disabledClass);
				}
			}
			if (container.querySelector('.page_link.first') && container.querySelector('.page_link.first').classList.contains('active_page')) {
				if (previous != null) {
					previous.classList.add('no_more');
					previous.classList.add(this.config.disabledClass);
				}
				if (first != null) {
					first.classList.add('no_more');
					first.classList.add(this.config.disabledClass);
				}
			}
			else {
				if (previous != null) {
					previous.classList.remove('no_more');
					previous.classList.remove(this.config.disabledClass);
				}
				if (first != null) {
					first.classList.remove('no_more');
					first.classList.remove(this.config.disabledClass);
				}
			}
		}, this);
	}
	isHidden(el) {
		var style = window.getComputedStyle(el);
		return ((style.display === 'none') || (style.visibility === 'hidden'));
	}
}
