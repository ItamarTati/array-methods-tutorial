//                         ╔══════════════════════════════════╗
//                         ║                                  ║
//                         ║   Don't Change any Code Here     ║
//                         ║               Please.            ║
//                         ║                                  ║
//                         ╚══════════════════════════════════╝
//

export const numbersArray = [1, 2, 3, 4, 5];
export const stringsArray = ["Apple", "Banana", "Cherry", "Date", "Fig"];
export const booleansArray = [true, false, true, false, true];
export const heroData =  [
    {
        name: "Izuku Midoriya (Deku)",
        description: "The main protagonist and a student at U.A. High School with a powerful Quirk inherited from All Might.",
        image: "image_url_for_deku.webp",
        quirk: "One For All",
        backgroundColor: null
    },
    {
        name: "Katsuki Bakugo (Kacchan)",
        description: "Another student at U.A. High School and a childhood friend/rival of Izuku. His Quirk allows him to create explosions.",
        image: "image_url_for_bakugo.webp",
        quirk: "Explosion",
        backgroundColor: null
    },
    {
        name: "All Might",
        description: "The Symbol of Peace and the former No. 1 Hero with the Quirk 'One For All.' He mentors Izuku.",
        image: "image_url_for_all_might.webp",
        quirk: "One For All",
        backgroundColor: null
    },
    {
        name: "Shoto Todoroki",
        description: "A student at U.A. High School with both ice and fire powers due to his parentage.",
        image: "image_url_for_todoroki.webp",
        quirk: "Half-Cold Half-Hot",
        backgroundColor: null
    },
    {
        name: "Ochaco Uraraka (Uravity)",
        description: "A cheerful U.A. student who can manipulate gravity with her Quirk.",
        image: "image_url_for_uraraka.webp",
        quirk: "Zero Gravity",
        backgroundColor: null
    },
    {
        name: "Tenya Iida (Ingenium)",
        description: "Known for his incredible speed, he's a classmate of Izuku and Ochaco.",
        image: "image_url_for_iida.webp",
        quirk: "Engine",
        backgroundColor: null
    },
    {
        name: "Tsuyu Asui (Froppy)",
        description: "A U.A. student with frog-like abilities, including a long, extendable tongue.",
        image: "image_url_for_asui.webp",
        quirk: "Frog",
        backgroundColor: null
    },
    {
        name: "Eijiro Kirishima (Red Riot)",
        description: "Known for his hardening Quirk, making his body nearly indestructible.",
        image: "image_url_for_kirishima.webp",
        quirk: "Hardening",
        backgroundColor: null
    },
    {
        name: "Momo Yaoyorozu (Creati)",
        description: "A highly intelligent student at U.A. who can create objects from her body.",
        image: "image_url_for_yaoyorozu.webp",
        quirk: "Creation",
        backgroundColor: null
    },
    {
        name: "Dabi",
        description: "A villain with fire-based powers and a member of the League of Villains.",
        image: "image_url_for_dabi.webp",
        quirk: "Cremation",
        backgroundColor: null
    },
    {
        name: "Hawks",
        description: "The No. 2 Hero known for his mastery of flight and control over feathers.",
        image: "image_url_for_hawks.webp",
        quirk: "Fierce Wings",
        backgroundColor: null
    },
    {
        name: "Mirko",
        description: "A pro hero with super-speed and rabbit-like attributes.",
        image: "image_url_for_mirko.webp",
        quirk: "Rabbit",
        backgroundColor: null
    },
    {
        name: "Nejire Hado",
        description: "A member of the 'Big Three' at U.A. High School with energy-based powers.",
        image: "image_url_for_nejire.webp",
        quirk: "Wave Motion",
        backgroundColor: null
    },
    {
        name: "Tamaki Amajiki (Suneater)",
        description: "Another member of the 'Big Three' who can transform parts of his body into food.",
        image: "image_url_for_amajiki.webp",
        quirk: "Manifest",
        backgroundColor: null
    },
    {
        name: "Chizome Akaguro (Stain)",
        description: "A vigilante with the Quirk 'Bloodcurdle' that allows him to paralyze his victims by licking their blood.",
        image: "image_url_for_stain.webp",
        quirk: "Bloodcurdle",
        backgroundColor: null
    }
]

export function createList(arr, container) {
    const ul = document.createElement('ul');
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

export function createGallery(data, container) {
    data.forEach((hero) => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = hero.image;
        img.alt = hero.name;
        img.style.height ='200px';
        img.style.backgroundColor = hero.backgroundColor;

        const p = document.createElement('p');
        p.textContent = hero.name;

        div.appendChild(img);
        div.appendChild(p);
        container.appendChild(div);
    });
}

export const numbersContainer = document.querySelector('#numbers-list');
export const stringsContainer = document.querySelector('#strings-list');
export const booleansContainer = document.querySelector('#booleans-list');
export const heroGalleryContainer = document.querySelector('.gallery');


