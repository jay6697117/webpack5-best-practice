import './css/index.css';
import './css/index.less';
import avatar from './assets/avatar.png';

class Test {
  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar;
    this.renderImg();
  }
  say() {
    // h1Node
    const h1Node = document.createElement('h1');
    h1Node.style.padding = '10px';
    h1Node.style.background = 'lightgreen';
    h1Node.style.border = '1px solid #000';
    h1Node.className = 'color-blue';
    h1Node.innerHTML = `你好，我叫${this.name}`;
    document.getElementById('app').appendChild(h1Node);
  }
  renderImg() {
    // imgNode
    const imgNode = document.createElement('img');
    imgNode.src = this.avatar;
    document.getElementById('app').appendChild(imgNode);
    // divNode
    const divNode = document.createElement('div');
    divNode.style.padding = '10px';
    divNode.style.background = '#eee';
    divNode.style.border = '1px solid #000';
    divNode.className = 'color-red';
    divNode.innerHTML = `名字: ${this.name}`;
    document.getElementById('app').appendChild(divNode);
  }
}
const p = new Test('张金辉', avatar);
console.log(`p:`, p);
p.say();
