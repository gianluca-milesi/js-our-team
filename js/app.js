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