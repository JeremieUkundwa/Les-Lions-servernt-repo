const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.langWrap .lg');
const titleEl = document.querySelector('.bannerTitle');
const descr1ConteEl = document.querySelector('.discritptionContentP1');
const descr2ConteEl = document.querySelector('.discritptionContentP2');
const descr3ConteEl = document.querySelector('.discritptionContentP3');
const gridMisionTitle = document.querySelector('.gridTitleMission1');
const gridVisionTitle = document.querySelector('.gridTitleVision1');
const gridDiscr1 = document.querySelector('.gridMissionDescr1');
const gridDiscr2 = document.querySelector('.gridMissionDescr2');
const navLink1 = document.querySelector('.navLinkAccueil');
const navLink2 = document.querySelector('.navLinkMotGoverneur');
const navLink3 = document.querySelector('.navLinkNosZone');
// const navLink4 = document.querySelector('.navLinkDecouv');
const navLink5 = document.querySelector('.navLinkContact');
const navLink6 = document.querySelector('.navLinkDistrict');

link.forEach(el => {
    el.addEventListener('click', () => {

        const attr = el.getAttribute('language');
        // translating header nav
        navLink1.textContent = data[attr].navLinkAccueil;
        navLink2.textContent = data[attr].navLinkMotGoverneur;
        navLink3.textContent = data[attr].navLinkNosZone;
        // navLink4.textContent = data[attr].navLinkDecouv;
        navLink5.textContent = data[attr].navLinkContact;
        navLink6.textContent = data[attr].navLinkDistrict;
        // translating Notre-history-page
        titleEl.textContent = data[attr].bannerTitle;
        descr1ConteEl.textContent = data[attr].discritptionContentP1;
        descr2ConteEl.textContent = data[attr].discritptionContentP2;
        descr3ConteEl.textContent = data[attr].discritptionContentP3;
        gridMisionTitle.textContent = data[attr].gridTitleMission1;
        gridVisionTitle.textContent = data[attr].gridTitleVision1;
        gridDiscr1.textContent = data[attr].gridMissionDescr1;
        gridDiscr2.textContent = data[attr].gridMissionDescr2;
    });
});

var data = {
    "english":
    {
        "navLinkAccueil": "Homepage",
        "navLinkMotGoverneur": "Word from the Governor",
        "navLinkNosZone": "Our Areas",
        "navLinkDecouv;": "Discover us",
        "navLinkContact": "Contact us",
        "navLinkDistrict": "Convention District",
        "bannerTitle": "Our history",
        "gridTitleMission1": "Our mission",
        "gridTitleVision1": "Our Vision",
        "gridMissionDescr1": "Empowering Lions clubs, their members and partners to take action for health and well-being, strengthen community connections, provide support to those in need around the world through the Humanitarian Service and Grants,???",
        "gridMissionDescr2": "To be the world leader in the field of local and humanitarian service.",
        "discritptionContentP1": "Lions serve",
        "discritptionContentP2": "A simple concept since our inception in 1917. Our clubs bring together men and women who give their time and effort to address issues locally and around the world. Our history is long. And we are proud of it. We have served for more than 100 years with extraordinary generosity, putting the needs of our neighbors, our cities and the world first. We are proud of our rich past and we know this is just the beginning. Every day, we carry on our legacy with the aim of having an even greater impact in the future.",
        "discritptionContentP3": "Lions Clubs International today brings together 1.4 million Men and Women in 48,000 clubs across 208 countries. With every action completed and every person helped, we write history. We have been around for over 100 years but our history is still being built. And we don't want it any other way."
    },
    "french":
    {
        "navLinkAccueil": "Accueil",
        "navLinkMotGoverneur": "Mot du Gouverneur",
        "navLinkNosZone": "Nos Zones",
        "navLinkDecouv;": "Nous Decouvrir",
        "navLinkContact": "Nous Contacter",
        "navLinkDistrict": "Convention District",
        "bannerTitle": "Notre Histoire",
        "gridTitleMission1": "Notre mission",
        "gridTitleVision1": "Notre Vision",
        "gridMissionDescr1": "Donner aux Lions clubs, ?? leurs membres et ?? leurs partenaires les moyens d???agir pour la sant?? et le bien-??tre, de renforcer les liens au sein des collectivit??s, d???apporter un soutien ?? ceux qui en ont besoin dans le monde entier par le biais du service humanitaire et de subventions,???",
        "gridMissionDescr2": "??tre le leader mondial dans le domaine du service local et humanitaire.",
        "discritptionContentP1": "Les Lions servent",
        "discritptionContentP2": "Un concept simple depuis notre cr??ation en 1917. Nos clubs regroupent des hommes et des femmes qui donnent leur tempset leurs efforts pour r??pondre aux probl??mes localement et dans le monde. Notre histoire est longue. Et nous en sommes fiers. Nous servons depuis plus de 100 ans avec une extraordinaire g??n??rosit??, en faisant passer en premier les besoins de nos voisins, de nos villes et du monde. Nous sommes fiers de notre riche pass?? et nous savons que ce n???est que le d??but. Chaque jour, nous perp??tuons notre h??ritage avec pour objectif d???avoir un impact encore plus fort ??l???avenir.",
        "discritptionContentP3": "Le Lions Clubs International r??unit aujourd???hui 1, 4 millions d???Hommes et Femmes r??partis dans 48 000 clubs ?? travers 208 pays. Avec chaque action termin??e et chaque personne aid??e, nous ??crivons l???histoire. Nous existons depuis plus de 100 ans mais notre histoire se construit encore. Et nous ne voulons pas qu???il en soit autrement."
    }
}