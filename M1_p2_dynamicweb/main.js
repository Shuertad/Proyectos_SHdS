const products = [
    {
      name: 'HANCOCK, HERBIE - FAT ALBERT ROTUNDA - LP 180 GR',
      price: 34,
      artist: 'Herbie Hancock',
      description: 'MUSIC ON VINYL EDITION.',
      image: 'https://www.jazzymas.com/25276-large_default/hancock-herbie-fat-albert-rotunda-lp-180-gr.jpg'
    },
    {
        name: 'COBHAM, BILLY - SPECTRUM - LP 180 GR',
        price: 31,
        artist: 'Billy Cobham',
        description: 'ATLANTIC 75TH ANNIVERSARY CLEAR VINYL',
        image: 'https://www.jazzymas.com/24069-large_default/cobha…-180-gr-atlantic-75th-anniversary-clear-vinyl.jpg'
    },
    {
        name: 'HANCOCK, HERBIE - 5 ORIGINAL ALBUMS - 5 CDS BOXED SET',
        price: 20,
        artist: 'Herbie Hancock',
        description: 'BOX-SET 5 CDS NEW',
        image: 'https://www.jazzymas.com/23300-large_default/hancock-herbie-5-original-albums-5-cds-boxed-set.jpg'
    },
    {
        name: 'MONTGOMERY, WES - THE INCREDIBLE JAZZ GUITAR OF WES MONTGOMERY - LP 180 GR',
        price: 36,
        artist: 'Wes Montgomery',
        description: 'RIVERSIDE CLEAR VYNIL',
        image: 'https://www.jazzymas.com/26470-large_default/montg…ible-jazz-guitar-of-wes-montgomery-lp-180-gr-.jpg'
    },
    {
        name: 'MONTGOMERY, WES - BUMPIN - LP 180 GR (LIMITED EDITION)',
        price: 25.5,
        artist: 'Wes Montgomery',
        description: 'VERVE STEREO LP',
        image: 'https://www.jazzymas.com/25950-large_default/montgomery-wes-bumpin-lp-180-gr-edicion-limitada.jpg'
    },
    {
        name: 'BLAKEY, ART & THE JAZZ MESSENGERS - MOANIN - LP 180 GR',
        price: 44,
        artist: 'Art Blakey',
        description: 'BLUE NOTE CLASSIC SERIES',
        image: 'https://www.jazzymas.com/23487-large_default/blake…ers-moanin-lp-180-gr-blue-note-classic-series.jpg'
      },
      {
          name: 'BRADLEY, CHARLES - CHANGES - LP 180 GR',
          price: 29.5,
          artist: 'Charles Bradley',
          description: 'ATLANTIC 75TH ANNIVERSARY CLEAR VINYL',
          image: 'https://www.jazzymas.com/24047-large_default/bradley-charles-changes-lp-180-gr.jpg'
      },
      {
          name: 'DAVIS, MILES - CIRCLE IN THE ROUND - 2 CDS SET (MOCD)',
          price: 16,
          artist: 'Miles Davis',
          description: 'DOUBLE CD',
          image: 'https://www.jazzymas.com/4027-large_default/davis-miles-circle-in-the-round-2-cds-set-mocd.jpg'
      },
      {
          name: 'DAVIS, MILES - TUTU - 2 LPS 180 GR. (DELUXE EDITION WITH LIVE AT NICE JAZZ FESTIVAL, 1986)',
          price: 29.5,
          artist: 'Miles Davis',
          description: 'DOUBLE VYNIL',
          image: 'https://www.jazzymas.com/20828-large_default/davis-miles-tutu-digipak-edition.jpg'
      },
      {
          name: 'DAVIS, MILES - LIVE-EVIL - 2 LPS 180 GR',
          price: 26,
          artist: 'Miles Davis',
          description: 'TURQOISE VYNIL EDITION',
          image: 'https://www.jazzymas.com/21882-large_default/davis…live-evil-2-lps-180-gr-vinilos-color-turquesa.jpg'
      },
    // Añade aquí al menos 9 productos más para tener un total de 10 productos
    // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  ];

// filter section
const filterSectionContainer = document.querySelector('.filters-container');

const filterSection = () => `
<p class="filter-title-section">WHAT ARE YOU LOOKING FOR?</p><br>
<input id="filter1-input" type="text" placeholder="Artist"><br>
<input id="filter2-input" type="number" placeholder="Price"><br>
<div class="filter-buttons-container">
<input id="search-button" type="submit" value="Search">
<input id="reset-button" type="reset" value="Reset">
</div>
`

const filterSectionSet = () => {
    const filterTemplate = filterSection();
    filterSectionContainer.innerHTML += filterTemplate;
};

filterSectionSet();

// product section
const productSectionContainer = document.querySelector('.products-container');

const productSection = (index,imgUrl,name,artist,price) => `
<article class="product-container" id="${index}">
<img src="${imgUrl}" alt="${name}" class="product-image" />
<div class="product-info-container">
<p class="product-name">${name}</p><br>
<p class="product-artist">${artist}</p><br>
<p class="product-price">${price}</p>
</div>
<input id="buy-button" type="submit" value="Buy">
</article>
`

for (let i = 0; i < products.length; i++) {
    const productTemplate = productSection(i,products[i].image,products[i].name,products[i].artist,products[i].price);
    productSectionContainer.innerHTML += productTemplate;
}
/*
const productSectionSet = (product,index) => {
    const productTemplate = productSection(index,product.image,product.name,product.artist,product.price);
    productSectionContainer.innerHTML += productTemplate;
};

products.forEach(productSectionSet(product,index));
*/