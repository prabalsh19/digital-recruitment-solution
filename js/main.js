const data = [
  {
    name: "John Smith",
    details:
      "Experienced software engineer with 8 years of industry experience, proficient in multiple programming languages and frameworks. Strong problem-solving and teamwork skills.",
    role: "Senior Software Engineer",
    location: "San Francisco, CA",
  },
  {
    name: "Emily Johnson",
    details:
      "Recent graduate with a degree in marketing and a passion for digital marketing strategies. Proficient in SEO, social media marketing, and content creation.",
    role: "Digital Marketing Specialist",
    location: "New York, NY",
  },
  {
    name: "Michael Davis",
    details:
      "Seasoned project manager with a proven track record of successfully delivering complex projects within tight deadlines. Strong leadership and communication skills.",
    role: "Project Manager",
    location: "Chicago, IL",
  },
  {
    name: "Sarah Thompson",
    details:
      "Creative graphic designer with 5 years of experience in designing compelling visuals for both digital and print media. Proficient in Adobe Creative Suite.",
    role: "Graphic Designer",
    location: "Los Angeles, CA",
  },
  {
    name: "Robert Lee",
    details:
      "Certified public accountant with extensive knowledge of financial reporting and analysis. Experienced in auditing and ensuring compliance with regulatory standards.",
    role: "Senior Accountant",
    location: "Houston, TX",
  },
];
let resultDataa = data;
const candidateResult = document.getElementById("search-results");
const locationInput = document.getElementById("location");
const roleInput = document.getElementById("role");
const searchBtn = document.getElementById("search-btn");
let locationValue = "";
let roleValue = "";
locationInput.addEventListener("input", (e) => {
  locationValue = e.target.value;
});
roleInput.addEventListener("input", (e) => {
  roleValue = e.target.value;
});

const locationFilter = (data) =>
  data.filter((candidate) =>
    candidate.location.toLowerCase().includes(locationValue.toLowerCase())
  );

const roleFilter = (data) =>
  data.filter((candidate) =>
    candidate.role.toLowerCase().includes(roleValue.toLowerCase())
  );

const filters = [locationFilter, roleFilter];
const filterFunction = () => {
  resultData = filters.reduce((acc, cur) => cur(acc), data);
  render(resultData);
};
searchBtn.addEventListener("click", filterFunction);
function render(resultData = resultDataa) {
  console.log(resultData);
  console.log(candidateResult);
  candidateResult.innerHTML = "";
  for (let keys in resultData) {
    const candidate = document.createElement("div");
    candidate.innerHTML = ` <div class="candidate">
  <img
  src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg"
  alt=""
  />
  <div>
    <h4>${resultData[keys].name}</h4>
    <span>Location: ${resultData[keys].location}</span>
    <p>Role: ${resultData[keys].role}</p>

    <p>
      ${resultData[keys].details}
    </p>
  </div><div class="actions">
  <button>Details</button>
  <button>Message</button>
</div></div>`;
    candidateResult.appendChild(candidate);
  }
}
render();
