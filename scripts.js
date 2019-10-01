function render (tag, node ,idx) {
    if (idx===1){
        console.log('idx', idx)
        node.innerHTML +=  `<span> (${tag})</span>`;
    } else if (idx ===2){
        node.innerHTML += `<button>Destroy</button>`;
     } else {node.innerHTML +=tag;}

}

//const {name, email, isVIP} = document.querySelectorAll('input[name="name"]','input[name="email"]', 'input[name="vip"]');
const customerList = document.querySelector('#customerList')
const abc= document.querySelectorAll('input')
// [name="name"]','input[name="email"]', 'input[name="vip"]');
const obj= {};
const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
    // console.log('name.value',name );
    // console.log('abc', abc[0].value);
    abc.forEach( (elm,idx) =>{
        console.log('elm',elm)
        render(`<span>${elm.value}</span>`, customerList, idx)
    })
    console.log('hello')
    ev.preventDefault();
})


