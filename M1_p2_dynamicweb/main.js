const products = [
    {
      name: 'FAT ALBERT ROTUNDA - LP 180 GR',
      price: 34,
      artist: 'Herbie Hancock',
      description: 'MUSIC ON VINYL EDITION.',
      genre: 'Jazz',
      date: 1969,
      image: 'https://www.jazzymas.com/25276-large_default/hancock-herbie-fat-albert-rotunda-lp-180-gr.jpg'
    },
    {
        name: 'SPECTRUM - LP 180 GR',
        price: 31,
        artist: 'Billy Cobham',
        description: 'ATLANTIC 75TH ANNIVERSARY CLEAR VINYL',
        genre: 'Jazz Fusion',
        date: 1973,
        image: 'https://www.jazzymas.com/24069-large_default/cobha…-180-gr-atlantic-75th-anniversary-clear-vinyl.jpg'
    },
    {
        name: '5 ORIGINAL ALBUMS - 5 CDS BOXED SET',
        price: 20,
        artist: 'Herbie Hancock',
        description: 'BOX-SET 5 CDS NEW',
        genre: 'Jazz',
        date: 1970,
        image: 'https://www.jazzymas.com/23300-large_default/hancock-herbie-5-original-albums-5-cds-boxed-set.jpg'
    },
    {
        name: 'THE INCREDIBLE JAZZ GUITAR OF WES MONTGOMERY - LP 180 GR',
        price: 36,
        artist: 'Wes Montgomery',
        description: 'RIVERSIDE CLEAR VYNIL',
        genre: 'Jazz',
        date: 1960,
        image: 'https://www.jazzymas.com/26470-large_default/montg…ible-jazz-guitar-of-wes-montgomery-lp-180-gr-.jpg'
    },
    {
        name: 'BUMPIN - LP 180 GR (LIMITED EDITION)',
        price: 25.5,
        artist: 'Wes Montgomery',
        description: 'VERVE STEREO LP',
        genre: 'Jazz',
        date: 1965,
        image: 'https://www.jazzymas.com/25950-large_default/montgomery-wes-bumpin-lp-180-gr-edicion-limitada.jpg'
    },
    {
        name: 'BLAKEY, ART & THE JAZZ MESSENGERS - MOANIN - LP 180 GR',
        price: 44,
        artist: 'Art Blakey',
        description: 'BLUE NOTE CLASSIC SERIES',
        genre: 'Jazz',
        date: 1961,
        image: 'https://www.jazzymas.com/23487-large_default/blake…ers-moanin-lp-180-gr-blue-note-classic-series.jpg'
      },
      {
          name: 'CHANGES - LP 180 GR',
          price: 29.5,
          artist: 'Charles Bradley',
          description: 'ATLANTIC 75TH ANNIVERSARY CLEAR VINYL',
          genre: 'Soul',
          date: 2016,
          image: 'https://www.jazzymas.com/24047-large_default/bradley-charles-changes-lp-180-gr.jpg'
      },
      {
          name: 'CIRCLE IN THE ROUND - 2 CDS SET (MOCD)',
          price: 16,
          artist: 'Miles Davis',
          description: 'DOUBLE CD',
          genre: 'Jazz Fusion',
          date: 1979,
          image: 'https://www.jazzymas.com/4027-large_default/davis-miles-circle-in-the-round-2-cds-set-mocd.jpg'
      },
      {
          name: 'TUTU - 2 LPS 180 GR',
          price: 29.5,
          artist: 'Miles Davis',
          description: 'DOUBLE VYNIL - DELUXE EDITION WITH LIVE AT NICE JAZZ FESTIVAL, 1986',
          genre: 'Jazz',
          date: 1986,
          image: 'https://www.jazzymas.com/20828-large_default/davis-miles-tutu-digipak-edition.jpg'
      },
      {
          name: 'LIVE-EVIL - 2 LPS 180 GR',
          price: 26,
          artist: 'Miles Davis',
          description: 'TURQOISE VYNIL EDITION',
          genre: 'Jazz Fusion',
          date: 1971,
          image: 'https://www.jazzymas.com/21882-large_default/davis…live-evil-2-lps-180-gr-vinilos-color-turquesa.jpg'
      },
  ];

// filter section
const filterSectionContainer = document.querySelector('.filters-container');

const filterSection = () => `
<p class="filter-title-section">WHAT ARE YOU LOOKING FOR?</p><br>
<form>
<input id="filter1-input" type="text" placeholder="Artist"><br>
<label for="date-filter" id="filter2-input">Decade: </label>
<select id="date-filter">
    <option class="date-options" value=""></option>
    <option class="date-options" value=1960>1960</option>
    <option class="date-options" value=1970>1970</option>
    <option class="date-options" value=1980>1980</option>
    <option class="date-options" value=1990>1990</option>
    <option class="date-options" value=2000>2000</option>
    <option class="date-options" value=2010>2010</option>
    <option class="date-options" value=2020>2020</option>
</select><br>
<!--
<input type="checkbox" class="filter-check_toggle" id="genre1" name="Jazz" value="Jazz">
<label class="filter3-input" for="genre1"> Jazz</label><br>
<input type="checkbox" class="filter-check_toggle" id="genre2" name="Soul" value="Soul">
<label class="filter3-input" for="genre2"> Soul</label><br>
<input type="checkbox" class="filter-check_toggle" id="genre3" name="Rock" value="Rock">
<label class="filter3-input" for="genre3"> Rock</label>
-->
<div class="filter-buttons-container">
<input id="search-button" type="submit" value="Search">
<input id="reset-button" type="reset" value="Reset">
</div>
</form>
`

const filterSectionSet = () => {
    const filterTemplate = filterSection();
    filterSectionContainer.innerHTML += filterTemplate;
};

filterSectionSet();

// product section
const productSectionContainer = document.querySelector('.products-container');

const productSection = (index,imgUrl,name,artist,date,price) => `
<article class="product-container" id="${index}">
<a rel="noopener" href="#">
<img src="${imgUrl}" alt="${name}" class="product-image" />
</a>
<div class="product-info-container">
<p class="product-name">${name}</p><br>
<p class="product-date">${date}</p><br>
<p class="product-artist">${artist}</p>

</div>
<input id="product-info-button" type="submit" value="${price} €">
</article>
`

// Add products to html funtion
const addProducts = (obj) => {

    //Erase all previous content in product-container
    productSectionContainer.innerHTML = "";

    for (let i = 0; i < obj.length; i++) {
        const productTemplate = productSection(i,obj[i].image,obj[i].name,obj[i].artist,obj[i].date,obj[i].price);
        productSectionContainer.innerHTML += productTemplate;
    };
};

// Add default all product display
addProducts(products);

//State filter variables
let filterArtistField = document.querySelector('#filter1-input').value;
let filterDateField = document.querySelector('#date-filter').value;
//filterGenreField = document.querySelector('#dbtnToClick');
console.log(filterDateField);
console.log(filterArtistField);

//Filter action buttons
filterSubmitField = document.querySelector('#search-button');
filterResetField = document.querySelector('#reset-button');

//Set normalize text function
const normalizeText = text => text.trim().toLowerCase();

//Set date to decade
const decadeDate = date => Math.trunc(date/10)*10;

//Submit filter function
const applyFilters = () => {
    
    filterArtistField = document.querySelector('#filter1-input').value;
    filterDateField = document.querySelector('#date-filter').value;

    if (filterArtistField !== null && filterDateField !== '') {
        productsToShow = products.filter(obj => {
            const normalizedArtist = normalizeText(obj.artist);
            const decadeDateNormalized = decadeDate(obj.date);
            return normalizedArtist.includes(normalizeText(filterArtistField)) && decadeDateNormalized == Number(filterDateField);
        });
    } else if (filterArtistField !== null) {
        productsToShow = products.filter(obj => {
            const normalizedArtist = normalizeText(obj.artist);
            return normalizedArtist.includes(normalizeText(filterArtistField))
        });
    } else if (filterDateField !== '') {
        productsToShow = products.filter(obj => {
            const decadeDateNormalized = decadeDate(obj.date);
            return decadeDateNormalized == Number(filterDateField);
        });
    } else {
        productsToShow = {...products};
    }
    addProducts(productsToShow);
   };

//Reset filters and add initial product display
const resetProducts = () => {
    addProducts(products);
};

//Filter event listener
filterSubmitField.addEventListener('click',applyFilters);
filterResetField.addEventListener('click',resetProducts);