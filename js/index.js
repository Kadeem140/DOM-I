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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav6 = siteContent["nav-item-6"];


let navigation = document.querySelector('nav');
const newNav1 = document.createElement('a')
const newNav2 = document.createElement('a')

navigation.append(newNav1);
navigation.prepend(newNav2);




let navBar = document.querySelectorAll('a');
navBar[0].textContent = "Help";
navBar[1].textContent = siteContent.nav["nav-item-1"];
navBar[2].textContent = siteContent.nav["nav-item-2"]
navBar[3].textContent = siteContent.nav["nav-item-3"]
navBar[4].textContent = siteContent.nav["nav-item-4"]
navBar[5].textContent = siteContent.nav["nav-item-5"]
navBar[6].textContent = siteContent.nav["nav-item-6"]
navBar[7].textContent = "Assist";

navBar.forEach( (element) => {
    element.style.color = 'blue';
});



let logo2 = document.querySelector('#cta-img');
logo2.setAttribute("src", siteContent.cta["img-src"]);

let logo4 = document.querySelector('#middle-img');
logo4.src = siteContent["main-content"]["middle-img-src"];



let ctaParent = document.querySelector('section');
const ctaChild = document.querySelector('h1');
const ctaArray = siteContent.cta.h1.split(' ')
const br1 = document.createElement("br");
const br2 = document.createElement('br');
ctaChild.append(br1); //Puts break point in first to let it know we have a child.
ctaChild.prepend(ctaArray[0]);//puts text before break;
ctaChild.append(ctaArray[1]);
ctaChild.append(br2);
ctaChild.append(ctaArray[2]);

console.log(ctaArray);

 

let tcParent = document.querySelector('top-content');
const tCont = document.querySelectorAll('.text-content h4');
var tCPara = document.querySelectorAll('.text-content p');

tCont[0].textContent = siteContent["main-content"]["features-h4"];
tCont[1].textContent = siteContent["main-content"]["about-h4"]
tCont[2].textContent = siteContent["main-content"]["services-h4"]
tCont[3].textContent = siteContent["main-content"]["product-h4"]
tCont[4].textContent = siteContent["main-content"]["vision-h4"]


tCPara[0].textContent = siteContent["main-content"]["features-content"]
tCPara[1].textContent = siteContent["main-content"]["about-content"]
tCPara[2].textContent = siteContent["main-content"]["services-content"]
tCPara[3].textContent = siteContent["main-content"]["product-content"]
tCPara[4].textContent = siteContent["main-content"]["vision-content"]

const newBtn = document.querySelector("button");
newBtn.textContent = siteContent.cta.button;

const contactHead = document.querySelector('.contact h4');
const contactPara = document.querySelectorAll('.contact p');

contactHead.textContent = siteContent.contact["contact-h4"];
contactHead.style.fontWeight = 'bolder'

contactPara[0].textContent = siteContent.contact.address;

contactPara[1].textContent = siteContent.contact.phone;

contactPara[2].textContent = siteContent.contact.email;

const lilFoot = document.querySelector('footer p');
lilFoot.textContent = siteContent.footer.copyright;