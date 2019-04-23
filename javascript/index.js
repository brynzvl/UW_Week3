//Setting Up Some JSON Data

const people = [
{
  "name": "Steve Smith",
  "jobTitle": "Project Manager",
  "Company": "Front End Dev Co",
  "Experience": "3 years",
  "School": "UW",
  "Major": "Marketing",
  "Email": "steve@fedc.com",
  "LinkedInUrl": "steve.linkedinprofile.com"
}, {
  "name": "Aaron Katz",
  "jobTitle": "Full Stack Developer",
  "Company": "Web Sites and More",
  "Experience": "5 years",
  "School": "SU",
  "Major": "Computer Science",
  "Email": "aaronNotMyEmail@uw.com",
  "LinkedInUrl": "aaron.linkedinprofile.com"
}, {
  "name": "Kyle Hendricks",
  "jobTitle": "Starting Pitcher",
  "Company": "Chicago Cubs",
  "Experience": "12 years",
  "School": "USC",
  "Major": "Pitching",
  "Email": "kyleH@cubs.com",
  "LinkedInUrl": "kyle.linkedinprofile.com"
},
{
  "name": "Michael Jordan",
  "jobTitle": "Point Guard",
  "Company": "Chicago Buls",
  "Experience": "20 years",
  "School": "UNC",
  "Major": "Trash Talking",
  "Email": "mJordan@bulls.com",
  "LinkedInUrl": "mJordan.linkedinprofile.com"
}
]


//Injecting Code into Div in HTMl
document.getElementById("template-hook").innerHTML =

//Using Literals and .map to create all of the objects in the "people" data set
`${people.map(function(person){
    return `
    <main class="main">
    <article class="profile-card">

    <div class="wrapper">

    <section class="profile">
        <img class="profile-img" src="./img/unsplash-headshot.jpg" alt="A headshot image of Steven Smith.">
        <div class="profile-info">
            <h1 class="name">${person.name}</h1>
            <p class="jobTitle">${person.jobTitle}</p>
        </div>
    </section>

    <section class="profile-details">
          <div>
              <div class="Company"><b>Company:</b> ${person.Company}</div>
              <div class="Experience"><b>Experience:</b> ${person.Experience}</div>
              <div class="School"><b>School:</b> ${person.School}</div>
              <div class="Major"><b>Major:</b> ${person.Major}</div>
              <div class="Email"><b>Email:</b> ${person.Email}</div>
              <div class="LinkedInUrl"><img src="./img/linkedin.svg" alt=""> ${person.LinkedInUrl}</li>
              </div>  
        </div>
    </section>
  </div>
  </article>
  </main>`

//
})};
`
