const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];


const cards = document.querySelectorAll(".card");

for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i]);

    const card = cards[i];
    console.log(cards[i]);

    const img = card.querySelector("img");
    const name = card.querySelector(".card-title");
    const role = card.querySelector(".card-text");
    const email = card.querySelector(".text-info");

    // console.log(name.innerHTML);

    img.src = teamMembers[i].img;
    name.innerHTML = teamMembers[i].name;
    role.innerHTML = teamMembers[i].role;
    email.innerHTML = teamMembers[i].email;

    // console.log(name.innerHTML);
}


const rowContainer = document.querySelector(".row");

function addNewCard(member) {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-md-6", "col-xxl-4");
    card.innerHTML = `
        <div class="card mb-3 bg-black text-white">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${member.img}" class="img-fluid rounded-start">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">${member.role}</p>
                        <p class="card-text"><small class="text-info">${member.email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    `;
    rowContainer.appendChild(card);
}

const addMember = document.getElementById("add-member-form");
addMember.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    // const img = document.getElementById("img").value;

    const newMember = { name, role, email };

    teamMembers.push(newMember);
    addNewCard(newMember);

    addMember.reset();
});