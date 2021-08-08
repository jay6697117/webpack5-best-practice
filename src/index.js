import './css/index.css';
import './css/index.less';

class Test {
  constructor(name) {
    this.name = name;
    const divNode = document.createElement('div');
    divNode.style.padding = '10px';
    divNode.style.background = '#eee';
    divNode.style.border = '1px solid #000';
    divNode.className = 'color-red';
    divNode.innerHTML = `名字: ${name}`;
    document.getElementById('app').appendChild(divNode);
  }
  say() {
    const h1Node = document.createElement('h1');
    h1Node.style.padding = '10px';
    h1Node.style.background = 'lightgreen';
    h1Node.style.border = '1px solid #000';
    h1Node.className = 'color-blue';
    h1Node.innerHTML = `你好，我叫${this.name}`;
    document.getElementById('app').appendChild(h1Node);
    // throw new Error('hello error!');
  }
}
const p = new Test('张金辉');
console.log(`p:`, p);
p.say();
