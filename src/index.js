class Test {
  constructor(name) {
    this.name = name;
    const divNode = document.createElement('div');
    divNode.innerHTML = `名字: ${name}`;
    divNode.style.color = 'white';
    divNode.style.padding = '10px';
    divNode.style.background = '#999';
    divNode.style.border = '1px solid #000';
    document.getElementById('app').appendChild(divNode);
  }
  say() {
    const h1Node = document.createElement('h1');
    h1Node.innerHTML = `你好，我叫${this.name}`;
    h1Node.style.padding = '10px';
    h1Node.style.background = 'lightgreen';
    h1Node.style.border = '1px solid #000';
    document.getElementById('app').appendChild(h1Node);
    // throw new Error('hello error!');
  }
}
const p = new Test('张金辉');
console.log(`p:`, p);
p.say();
