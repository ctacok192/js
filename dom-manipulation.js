let div = document.createElement('div');
div.className = 'wrapper';
document.body.prepend(div);
let ul = document.createElement('ul');
div.prepend(ul);
let li3 = document.createElement('li');
li3.innerHTML = 'три';
ul.prepend(li3);
let li2 = document.createElement('li');
li2.innerHTML = 'два';
ul.prepend(li2);
let li1 = document.createElement('li');
li1.innerHTML = 'один';
ul.prepend(li1);
let img = document.createElement('img')
img.className = 'cute';
img.alt = 'Cute Puppy';
img.src = 'https://picsum.photos/200';
img.style.width = '250px';
div.append(img);
let div2 = document.createElement('div');
div.prepend(div2);
div2.innerHTML = '<p></p><p class="warning"></p>';
div2.innerHTML = '<p class="warning"></p>';
function generatePlayerCard () {
    document.body.insertAdjacentHTML('afterbegin', '<div class="playerCard"><h2>NAME — AGE</h2><p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p></div>')

}
generatePlayerCard();
let div3 = document.createElement('div');
div3.className = 'cards';
div.before(div3);
function getListContent() {
    let result = [];
    for (let i=1;i<=4;i++) {
        let p = document.createElement('p');
        p.append(i);
        result.push(p);
    }
    return result;
}
div3.append(...getListContent());
