const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// nav section

// nav links

const links = document.querySelectorAll('header nav a');
const logo = document.getElementById("logo-img");

links.forEach(x => x.style.color = "green")

// Prepend link
const prependLink = document.createElement("A");
prependLink.href = '#';
const textpreLink = document.createTextNode('Home');
prependLink.appendChild(textpreLink);
prependLink.style.color = "green";
document.querySelector('nav').prepend(prependLink);

// Append link
const appendLink = document.createElement("A");
appendLink.href = '#';
const textAppLink = document.createTextNode('Careers');
appendLink.appendChild(textAppLink);
appendLink.style.color = "green";
document.querySelector('nav').appendChild(appendLink);

links[0].textContent = siteContent.nav["nav-item-1"]
links[1].textContent = siteContent.nav["nav-item-2"]
links[2].textContent = siteContent.nav["nav-item-3"]
links[3].textContent = siteContent.nav["nav-item-4"]
links[4].textContent = siteContent.nav["nav-item-5"]
links[5].textContent = siteContent.nav["nav-item-6"]

logo.setAttribute('src', siteContent["nav"]["img-src"])

// cta section
const h1 = document.querySelector('.cta-text h1');
const button = document.querySelector('.cta-text button');
const codeSnip = document.getElementById("cta-img");

h1.textContent = siteContent['cta']['h1']
button.textContent = siteContent['cta']['button']
codeSnip.src = siteContent['cta']['img-src'];

// main-content section
// top-content section
const topH4 = document.querySelectorAll('.top-content h4');
const topP = document.querySelectorAll('.top-content p');

topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];
topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];

// middle banner section
const midBanner = document.getElementById('middle-img');
midBanner.src = siteContent['main-content']['middle-img-src'];

// bottom-content section
const bottomH4 = document.querySelectorAll('.bottom-content h4');
const bottomP = document.querySelectorAll('.bottom-content p');

bottomH4[0].textContent = siteContent['main-content']['services-h4'];
bottomH4[1].textContent = siteContent['main-content']['product-h4'];
bottomH4[2].textContent = siteContent['main-content']['vision-h4'];
bottomP[0].textContent = siteContent['main-content']['services-content'];
bottomP[1].textContent = siteContent['main-content']['product-content'];
bottomP[2].textContent = siteContent['main-content']['vision-content'];

// contact section
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent['contact']['contact-h4'];
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// footer section
const footerP = document.querySelector('footer p');

footerP.textContent = siteContent['footer']['copyright'];