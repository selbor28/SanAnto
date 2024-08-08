const form = document.getElementById("business_info_form");
const businessCardContainer = document.getElementById("business_card_container");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Gather form data
 
const name = document.getElementById("name").value;
const address = document.getElementById("address").value;
const city = document.getElementById("city").value;
const state = document.getElementById("state").value;
const zip = document.getElementById("zip").value;
const company = document.getElementById("company").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const website = document.getElementById("website").value;
const color = document.getElementById("color").value;

  // **This is a placeholder for future AI integration**
  // Currently, there's no widely available service for this purpose.
  // Consider using a business card design library and populate it with data.

  const businessCardData = {
    company: company,
    name: name,
    address: address,
    city: city,
    state: state,
    zip: zip,
    email: email,
    phone: phone,
    website: website,
    color: color,
  };


 
// You can use a business card design library here and populate it with businessCardData
  // For example (replace with your chosen library):
// const businessCard = new BusinessCardGenerator(businessCardData);
// businessCardContainer.innerHTML = businessCard.generateCard();

  // Placeholder message for now
businessCardContainer.innerHTML = "Your business card is being generated...";
makeBusinessCard( businessCardData );

});
function emptyspace(data ) {
	var bCardWidth = bCard.offsetWidth;
	var bCardHeight = bCard.offsetHeight;
	  var bCompanyWidth = document.getElementById("bCompany").offsetWidth;
        var bCompanyHeight = document.getElementById("bCompany").offsetHeight;
	  var bNameWidth = document.getElementById("bName").offsetWidth;
        var bNameHeight = document.getElementById("bName").offsetHeight;
	  var bPhoneWidth = document.getElementById("bPhone").offsetWidth;
        var bPhoneHeight = document.getElementById("bPhone").offsetHeight;
	  var bAddressWidth = document.getElementById("bAddress").offsetWidth;
        var bAddressHeight = document.getElementById("bAddress").offsetHeight;
	  var bCityWidth = document.getElementById("bCity").offsetWidth;
        var bCityHeight = document.getElementById("bCity").offsetHeight;
	  var bStateWidth = document.getElementById("bState").offsetWidth;
        var bStateHeight = document.getElementById("bState").offsetHeight;
	  var bZipWidth = document.getElementById("bZip").offsetWidth;
        var bZipHeight = document.getElementById("bZip").offsetHeight;
	  var bEmailWidth = document.getElementById("bEmail").offsetWidth;
        var bEmailHeight = document.getElementById("bEmail").offsetHeight;
	  var bCardWidth = document.getElementById("bCard").offsetWidth;
        var bCardHeight = document.getElementById("bCard").offsetHeight;
	  var bWebsiteWidth = document.getElementById("bWebsite").offsetWidth;
        var bWebsiteHeight = document.getElementById("bWebsite").offsetHeight;
	  var emptySpaceWidth = bCardWidth - (bCompanyWidth+bNameWidth+bPhoneWidth+bAddressWidth+bCityWidth+bStateWidth+bZipWidth+bEmailWidth+bWebsiteWidth);
        var emptySpaceHeight = bCardHeight - (bCompanyHeight+bNameHeight+bPhoneHeight+bAddressHeight+bCityHeight+bStateHeight+bZipHeight+bEmailHeight+bWebsiteHeight);
	var emptySpaceDim = [emptySpaceWidth, emptySpaceHeight]

};




function makeBusinessCard( data ) {
// First use JS to recreate the html structure of your design. Create the corresponding nodes of your html with:
// Add your CSS classes:

var bCard = document.createElement("div");
bCard.className = "bCard";
bCard.setAttribute('id','bCardId');
bCard.style.backgroundColor = color.value;
var company = document.createElement("div");
company.className = "bCompany"; 
//name is a reserved word and cannot be used as a variable name, so I changed it to cname
var bname = document.createElement("div");
bname.className = "bName";
console.log(color);
var phone = document.createElement("div");
phone.className = "bPhone";

var address = document.createElement("div");
address.className = "bAddress";

var city = document.createElement("div");
city.className = "bCity";

var state = document.createElement("div");
state.className = "bState";

var zip = document.createElement("div");
zip.className = "bZip";

var website = document.createElement("div");
website.className = "bWebsite";

var email = document.createElement("div");
email.className = "bEmail";


// then put all the elements together in the proper order:

// bCard.appendChild(bCard); Don't need to append bCard to itself
bCard.appendChild(company);
bCard.appendChild(website);
bCard.appendChild(email);
bCard.appendChild(bname);
bCard.appendChild(phone);
bCard.appendChild(address);
bCard.appendChild(city);
bCard.appendChild(state);
bCard.appendChild(zip);
bCardWidth = bCard.offsetWidth;
bCardHeight = bCard.offsetHeight;
//now we can use the data object to put content into the html object.

company.innerHTML = data.company;
email.innerHTML = data.email;
bname.innerHTML = data.name;
phone.innerHTML = data.phone;
address.innerHTML = data.address;
city.innerHTML = data.city;
state.innerHTML = data.state;
zip.innerHTML = data.zip;
website.innerHTML = data.website;
//can you do the rest for the other elements?








 
  // Then add it all to your webpage:
//I mistyped in my email, not addChild, appendChild here
document.body.appendChild( bCard );  
// Finally add the content to the elements using the data object
//first you need to make a data object


//No need for the constructor. We're not dealing with Object-Oriented code in this assignment. It would just be a function that builds the business card html, sets the data from the data object passed in and then adds it to the page.

// function makeBusinessCard( data ) {

//     make the html

//     set the html innerHTML to the data

//     append the html to the document.body

// }
};
