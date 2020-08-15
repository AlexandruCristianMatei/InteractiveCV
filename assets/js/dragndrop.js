// section A

const dropItem = document.querySelectorAll('.drop-item-section-a');

for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].addEventListener('dragover', dragOverA);
    dropItem[i].addEventListener('dragenter', dragEnterA);
    dropItem[i].addEventListener('dragleave', dragLeaveA);
    dropItem[i].addEventListener('drop', dragDropA);
}

function dragStartA(event) {
    this.className += ' hold-a';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-a', 0);
}

function dragEndA() {
    this.className = 'fab fa-html5';
}

function dragOverA(event) {
    event.preventDefault();
}

function dragEnterA(event) {
    event.preventDefault();
    this.className += ' hovered-a';
}

function dragLeaveA() {
    this.className = 'drop-item-section-a';

}

function dragDropA(event) {
    this.className = 'drop-item-section-a';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// section B
// line-a

const dropSegmentA = document.querySelector('.line-a');

dropSegmentA.addEventListener('dragover', dragOverLineA);
dropSegmentA.addEventListener('dragenter', dragEnterLineA);
dropSegmentA.addEventListener('dragleave', dragLeaveLineA);
dropSegmentA.addEventListener('drop', dragDropLineA);

function dragStartSegmentA(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentA() {
    this.className = 'code';
}

function dragOverLineA(event) {
    event.preventDefault();
}

function dragEnterLineA(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineA() {
    this.className = 'line-a';

}

function dragDropLineA(event) {
    this.className = 'line-a';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// line-b

const dropSegmentB = document.querySelector('.line-b');

dropSegmentB.addEventListener('dragover', dragOverLineB);
dropSegmentB.addEventListener('dragenter', dragEnterLineB);
dropSegmentB.addEventListener('dragleave', dragLeaveLineB);
dropSegmentB.addEventListener('drop', dragDropLineB);

function dragStartSegmentB(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentB() {
    this.className = 'code';
}

function dragOverLineB(event) {
    event.preventDefault();
}

function dragEnterLineB(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineB() {
    this.className = 'line-b';

}

function dragDropLineB(event) {
    this.className = 'line-b';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// line-c

const dropSegmentC = document.querySelector('.line-c');

dropSegmentC.addEventListener('dragover', dragOverLineC);
dropSegmentC.addEventListener('dragenter', dragEnterLineC);
dropSegmentC.addEventListener('dragleave', dragLeaveLineC);
dropSegmentC.addEventListener('drop', dragDropLineC);

function dragStartSegmentC(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentC() {
    this.className = 'code';
}

function dragOverLineC(event) {
    event.preventDefault();
}

function dragEnterLineC(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineC() {
    this.className = 'line-c';

}

function dragDropLineC(event) {
    this.className = 'line-c';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// line-d

const dropSegmentD = document.querySelector('.line-d');

dropSegmentD.addEventListener('dragover', dragOverLineD);
dropSegmentD.addEventListener('dragenter', dragEnterLineD);
dropSegmentD.addEventListener('dragleave', dragLeaveLineD);
dropSegmentD.addEventListener('drop', dragDropLineD);

function dragStartSegmentD(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentD() {
    this.className = 'code';
}

function dragOverLineD(event) {
    event.preventDefault();
}

function dragEnterLineD(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineD() {
    this.className = 'line-d';

}

function dragDropLineD(event) {
    this.className = 'line-d hovered-b';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// line-e

const dropSegmentE = document.querySelector('.line-e');

dropSegmentE.addEventListener('dragover', dragOverLineE);
dropSegmentE.addEventListener('dragenter', dragEnterLineE);
dropSegmentE.addEventListener('dragleave', dragLeaveLineE);
dropSegmentE.addEventListener('drop', dragDropLineE);

function dragStartSegmentE(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentE() {
    this.className = 'code';
}

function dragOverLineE(event) {
    event.preventDefault();
}

function dragEnterLineE(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineE() {
    this.className = 'line-e';

}

function dragDropLineE(event) {
    this.className = 'line-e';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// line-f

const dropSegmentF = document.querySelector('.line-f');

dropSegmentF.addEventListener('dragover', dragOverLineF);
dropSegmentF.addEventListener('dragenter', dragEnterLineF);
dropSegmentF.addEventListener('dragleave', dragLeaveLineF);
dropSegmentF.addEventListener('drop', dragDropLineF);

function dragStartSegmentF(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentF() {
    this.className = 'code';
}

function dragOverLineF(event) {
    event.preventDefault();
}

function dragEnterLineF(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineF() {
    this.className = 'line-f';

}

function dragDropLineF(event) {
    this.className = 'line-f';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// line-g

const dropSegmentG = document.querySelector('.line-g');

dropSegmentG.addEventListener('dragover', dragOverLineG);
dropSegmentG.addEventListener('dragenter', dragEnterLineG);
dropSegmentG.addEventListener('dragleave', dragLeaveLineG);
dropSegmentG.addEventListener('drop', dragDropLineG);

function dragStartSegmentG(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentG() {
    this.className = 'code';
}

function dragOverLineG(event) {
    event.preventDefault();
}

function dragEnterLineG(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineG() {
    this.className = 'line-g';

}

function dragDropLineG(event) {
    this.className = 'line-g';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}

// line-h

const dropSegmentH = document.querySelector('.line-h');

dropSegmentH.addEventListener('dragover', dragOverLineH);
dropSegmentH.addEventListener('dragenter', dragEnterLineH);
dropSegmentH.addEventListener('dragleave', dragLeaveLineH);
dropSegmentH.addEventListener('drop', dragDropLineH);

function dragStartSegmentH(event) {
    this.className += ' hold-b';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-b', 0);
}

function dragEndSegmentH() {
    this.className = 'code';
}

function dragOverLineH(event) {
    event.preventDefault();
}

function dragEnterLineH(event) {
    event.preventDefault();
    this.className += ' hovered-b';
}

function dragLeaveLineH() {
    this.className = 'line-h';

}

function dragDropLineH(event) {
    this.className = 'line-h';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    event.target.append(document.getElementsByClassName(data)[0]);
}