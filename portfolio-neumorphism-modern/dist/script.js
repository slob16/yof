let index = 0;
let myButton = $("#my-btn");
let clientName = $("#client-name");
let clientWork = $("#client-work");
let clientQuote = $("#client-quote");
let clientImage = $("#client-image");

let clients = [
    {
        name: "Johny",
        work: "Streamer (YouTube/Trovo)",
        image: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
        text: "In promotion and of advertising testimonial show consiss of a person's written orsoken statement extollig the virtue"
    },
    {
        name: "Marc",
        work: "Developer",
        image: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
        text: "Phasellus accumsan scelerisque dolor, quis mattis justo  varius. Vestibulum ante ipsum primis in faucibus orsoken statement"
    }
];

let me = {
    name: "Maxi Mustermann",
    label: "logo",
    image: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    location: {
        state: "Germany",
        city: "Dortmund"
    },
    email: "maximustermann@muster.de",
    social: {
        instagram: {
            name: "maxi_mustermann",
            url: ""
        },
        linkedin: {
            name: "LinkedIn",
            url: ""
        },
        github: {
            name: "GitHub",
            url: ""
        },
        xing: {
            name: "Xing",
            url: ""
        }
    },
    skill: {
        java: {
            name: "Java",
            value: 70
        },
        js: {
            name: "JavaScript",
            value: 80
        },
        ts: {
            name: "TypeScript",
            value: 80
        },
        html: {
            name: "HTML",
            value: 90
        },
        css: {
            name: "CSS",
            value: 90
        }
    }
}

$(".mobile-button").click(
    function() {
        $('.container').toggleClass("active");
    }
);

$("#my-image").css("background", `url(" ${me.image}") no-repeat 100%/cover`);
$(".my-name").html(me.name);
$(".my-email").html(me.email);
$(".my-insta").html(me.social.instagram.name);
$(".my-location").html(me.location.city + ', ' + me.location.state);

clientName.html(clients[index].name);
clientWork.html(clients[index].work);
clientQuote.html(`"${clients[index].text}"`);
clientImage.css("background", `url(" ${clients[index].image} ") no-repeat 100%/cover`);

let changeClient = (value) => {
    if(value === '+') {
        if(index+1 > clients.length-1) {
            index = 0;
        } else {
            index++;
        }
    } else if(value === '-') {
        if(index-1 < 0) {
            index = clients.length-1;
        } else {
            index--;
        }
    }
    clientName.html(clients[index].name);
    clientWork.html(clients[index].work);
    clientQuote.html('"' + clients[index].text + '."');
    clientImage.css("background", `url(" ${clients[index].image} ") no-repeat 100%/cover`);
}

let topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let scrollFunction = () => {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? myButton.css("display", "block") : myButton.css("display", "none");
}

let setSkill = function (id, skillValue) {
    let skill =  document.getElementById(id + '-value');
    skill.innerHTML = skillValue + '%';
    skill.style.left = (skillValue-5) + '%';

    document.getElementById(id + '-btn').style.left = (skillValue-2) + '%';
    document.getElementById(id + '-progress').style.width = skillValue + '%';
}

setSkill("css", me.skill.ts.value);
setSkill("js", me.skill.js.value);
setSkill("ts", me.skill.ts.value);
setSkill("html", me.skill.html.value);
setSkill("java", me.skill.java.value);