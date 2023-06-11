
let result = [];

/* one fetch and filtering on json data */
const fetchOnceAndFilter = async (value,searchtype) => {

	let hostcontainer = document.querySelector('#host');

	if (hostcontainer) {
		let host = hostcontainer.innerHTML;
		let posts = `${host}/wp-json/wp/v2/custom`;

		if (searchtype === 'manual') {
			posts = `${host}/wp-json/wp/v2/manual`;
		}
		if(!result.posts) {
			let fetched = await fetch(posts);
			let json = await fetched.json();

			result['posts'] = json;
		}

		let returnable_content = result.posts.filter(element => element.title.rendered.toLowerCase().search(value.toLowerCase()) > -1);
		let returnable = '';

		returnable_content.forEach(element => {
			returnable += '<a>' + element.title.rendered + '</a><hr>';
		})

		if (searchtype === 'manual') {
			return accordionElements(returnable_content);
		}
		return groupElementsAsAccordion(returnable_content);

	}
}



const returnGroupedPostType = (elements, headline) => {
	let returnable = '';

	elements.forEach((element, index) => {
		if(index === 0) {
			returnable += '<h3>'+headline+'</h3>';
			returnable += '<a href="'+host+'/handbuch/'+element.slug.rendered+'">' + element.title.rendered + '</a><hr>';
		} else {
			returnable += '<a href="'+host+'/handbuch/'+element.slug.rendered+'">' + element.title.rendered + '</a><hr>';
		}
	});

	return returnable;
}

const returnGroupedPostTypeAcc = (elements, headline, show='') => {

	if (!elements.length) {
		return ''
	}

	let returnable = '\t<h4 class="accordion-header pb-0" id="heading-search'+headline+'">\n' +
		'\t\t\t\t\t\t<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#body-search'+headline+'" aria-expanded="false" aria-controls="flush-collapseOne">\n' +
		'\t\t\t\t\t\t\t'+headline+'\n' +
		'\t\t\t\t\t\t</button>\n' +
		'\t\t\t\t\t</h4>\t<div id="body-search'+headline+'" class="accordion-collapse collapse" aria-labelledby="heading-search'+headline+'" data-bs-parent="#element-search">\n' +
		'\t\t\t\t\t\t<div class="accordion-body">\n' +
		'\t\t\t\t\t\t\t<ul class="manual-links">';

	elements.forEach((element, index) => {

			returnable += '<li><a href="'+host+'/handbuch/'+element.slug.rendered+'">' + element.title.rendered + '</a></li>';

	});

	returnable += '\t</ul>\n' +
		'\t\t\t\t\t\t</div>\n' +
		'\t\t\t\t\t</div>\n';
	return returnable;
}


/*grouping by post type */
const groupElements = (elements) => {

	let pages = [];
	let posts = [];
	let faqs = [];
	let manuals = [];

	let returnable = '';

	elements.forEach(
		element => {

			switch (element.type) {
				case 'faq-element':
					faqs.push(element);
					break;
				case 'page':
					pages.push(element);
					break;
				case 'manual-element':
					manuals.push(element);
					break;
				default:
					posts.push(element);
					break;
			}

		}
	);

	returnable += returnGroupedPostType(faqs, 'FAQ', 'show');
	returnable += returnGroupedPostType(manuals, 'Anleitungen', '');
	returnable += returnGroupedPostType(pages, 'Seiten', '');
	returnable += returnGroupedPostType(posts, 'Blogbeiträge', '');


	return returnable;
}



/*grouping by post type */
const groupElementsAsAccordion = (elements) => {

	let pages = [];
	let posts = [];
	let faqs = [];
	let manuals = [];


	let returnable = '<h3>Suchergebnisse</h3>\n' +
		'\t\t\t<div class="accordion accordion-flush" id="element-search">\n' +
		'\t\t\t\t<div class="accordion-item">';


	elements.forEach(
		element => {

			switch (element.type) {
				case 'faq-element':
					faqs.push(element);
					break;
				case 'page':
					pages.push(element);
					break;
				case 'manual-element':
					manuals.push(element);
					break;
				default:
					posts.push(element);
					break;
			}

		}
	);


	returnable += returnGroupedPostTypeAcc(faqs, 'FAQ', 'show');
	returnable += returnGroupedPostTypeAcc(manuals, 'Anleitungen');
	returnable += returnGroupedPostTypeAcc(pages, 'Seiten');
	returnable += returnGroupedPostTypeAcc(posts, 'Blogbeiträge');




	returnable += '</div>\n' +
		'\t\t\t</div>\n' +
		'\t\t</div>'

	return returnable;
}


const accordionElements = (elements) => {

	let manuals = [];

	let returnable = '<h3>Suchergebnisse</h3>\n' +
		'\t\t\t<div class="accordion accordion-flush" id="element-search">\n' +
		'\t\t\t\t<div class="accordion-item">';
	returnable += '\t<h4 class="accordion-header pb-0" id="heading-search">\n' +
		'\t\t\t\t\t\t<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#body-search" aria-expanded="false" aria-controls="flush-collapseOne">\n' +
		'\t\t\t\t\t\t\tSuchergebnisse\n' +
		'\t\t\t\t\t\t</button>\n' +
		'\t\t\t\t\t</h4>\t<div id="body-search" class="accordion-collapse collapse show" aria-labelledby="heading-search" data-bs-parent="#element-search">\n' +
		'\t\t\t\t\t\t<div class="accordion-body">\n' +
		'\t\t\t\t\t\t\t<ul class="manual-links">';

	elements.forEach(
		element => {
			manuals.push(element);
		}
	);

	manuals.forEach((element, index) => {

			returnable += '<li><a href="'+host+'/handbuch/'+element.slug+'">' + element.title.rendered + '</a></li>';

	});

	returnable += '\t</ul>\n' +
		'\t\t\t\t\t\t</div>\n' +
		'\t\t\t\t\t</div>\n';

	returnable += '</div>\n' +
		'\t\t\t</div>\n' +
		'\t\t</div>'

	return returnable;
}



const handleSpinner = (action) => {
	let spinner = document.querySelector('.icon-container');
	action === 'on' ? spinner.classList.remove('hidden') : spinner.classList.add('hidden')
}

const handleSearchReset = () => {
	let resetbtn = document.querySelector('#search-reset');
	let input = document.querySelector('#filter-input');
	if (input) {
		let searchtype = input.getAttribute('data-search-type');
	}

	let resultcontainer = document.querySelector('#results');

	if (resetbtn) {
	resetbtn.addEventListener('click',e => {
		input.value = '';
		handleSpinner('on');
		resultcontainer.innerHTML = '';
		handleSpinner('off');

	});
	}

}


document.addEventListener('DOMContentLoaded', e =>  {
	handleSearchReset()
	let input = document.querySelector('#filter-input');
	if (input) {
		input.addEventListener('keyup',e => {
			let searchtype = e.target.getAttribute('data-search-type');
			let searchvalue = e.target.value;
			let resultcontainer = document.querySelector('#results');

			let len = searchvalue.length;

			console.log('Laenge', searchvalue.length)


			if(len % 2 === 0 && len >= 2) {
				handleSpinner('on');

				fetchOnceAndFilter(e.target.value,searchtype).then(data => {
					resultcontainer.innerHTML = data;
					resultcontainer.classList.remove('hidden');
					resultcontainer.classList.add('fade-in')
					handleSpinner('off');
					jQuery('#heading-searchFAQ button').trigger('click')
				})
			}
			if(len < 2) {
				resultcontainer.innerHTML = '';
				handleSpinner('off')
			}

		});
	}
})









