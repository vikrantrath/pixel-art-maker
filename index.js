HEIGHT = 10;
WIDTH = 10;
mouseDown = false;
let divColor = 'green'
let mDiv = document.createElement('div');
    mDiv.className = 'MainDiv'
for (let i = 0; i < HEIGHT; i++) {
    let rowDiv = document.createElement('div')
    rowDiv.className = 'rowDiv'
    for (let j = 0; j < WIDTH; j++) {
        let uDiv = document.createElement('div')
        uDiv.className = 'UnitDiv';
        uDiv.onclick = changeColor;
        uDiv.onmousedown = ()=>{mouseDown = true}
        uDiv.onmouseup = ()=>{ mouseDown = false}
        uDiv.onmouseenter = ()=>{
            if(mouseDown)
                uDiv.style.backgroundColor = divColor;
        }
        rowDiv.append(uDiv);
    }
    mDiv.append(rowDiv)
}
let rowDiv = document.createElement('div')
rowDiv.className = 'rowDiv';

['red','green','blue','yellow'].forEach(col =>{
    let colDiv = document.createElement('div')
    colDiv.className = col+"Div";
    colDiv.style.backgroundColor = col;
    colDiv.onclick = ()=> {
        divColor = col;
    }
    rowDiv.append(colDiv)
})

mDiv.append(rowDiv)
document.body.append(mDiv)
function changeColor() {
    this.style.backgroundColor = divColor;
}