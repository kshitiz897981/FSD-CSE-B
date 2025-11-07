function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}
const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'click me to visit google'
}
const mainContainer=document.querySelector('#root');
//now add reactElement to mainContainer
customRender(reactElement,mainContainer);//what to add and where to add

const anotherElement=(
    <a href="https://www.google.com" target="_blank">visit</a>
)