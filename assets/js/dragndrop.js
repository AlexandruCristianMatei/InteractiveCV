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
    if (data === 'code a-a' || data === 'code a-b' || data === 'code a-c') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-a';
        this.className += ' hovered-b';
    }
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
    if (data === 'code b-a' || data === 'code b-b' || data === 'code b-c') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-b';
        this.className += ' hovered-b';
    }
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
    if (data === 'code c-a' || data === 'code c-b' || data === 'code c-c') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-c';
        this.className += ' hovered-b';
    }
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
    this.className = 'line-d';
    this.className += ' hovered-b';
    const data = event.dataTransfer.getData("text");
    if (data === 'code d-a' || data === 'code d-b' || data === 'code d-c' || data === 'code d-d') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-d';
        this.className += ' hovered-b';
    }
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
    if (data === 'code e-a' || data === 'code e-b' || data === 'code e-c' || data === 'code e-d') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-e';
        this.className += ' hovered-b';
    }
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
    if (data === 'code f-a' || data === 'code f-b' || data === 'code f-c' || data === 'code f-d') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-f';
        this.className += ' hovered-b';
    }
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
    if (data === 'code g-a' || data === 'code g-b' || data === 'code g-c' || data === 'code g-d') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-g';
        this.className += ' hovered-b';
    }
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
    if (data === 'code h-a' || data === 'code h-b' || data === 'code h-c' || data === 'code h-d') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'line-h';
        this.className += ' hovered-b';
    }
}

// section C
// square A

const spotA = document.querySelector('.spot-a');

spotA.addEventListener('dragover', dragOverSpotA);
spotA.addEventListener('dragenter', dragEnterSpotA);
spotA.addEventListener('dragleave', dragLeaveSpotA);
spotA.addEventListener('drop', dragDropSpotA);

function dragStartColorA(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorA() {
    this.className = 'color';
}

function dragOverSpotA(event) {
    event.preventDefault();
}

function dragEnterSpotA(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotA() {
    this.className = 'spot-a';
}

function dragDropSpotA(event) {
    this.className = 'spot-a';
    const data = event.dataTransfer.getData("text");
    if (data === 'color a-w' || data === 'color a-x' || data === 'color a-y' || data === 'color a-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-a';
    }
    if (data === 'color a-x') {
        const answer = document.querySelector('.s-a');
        answer.style.display = 'block';
        answer.style.color = 'red';
    } else {
        const answer = document.querySelector('.s-a');
        answer.style.display = 'none';
    }
};

// square B

const spotB = document.querySelector('.spot-b');

spotB.addEventListener('dragover', dragOverSpotB);
spotB.addEventListener('dragenter', dragEnterSpotB);
spotB.addEventListener('dragleave', dragLeaveSpotB);
spotB.addEventListener('drop', dragDropSpotB);

function dragStartColorB(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorB() {
    this.className = 'color';
}

function dragOverSpotB(event) {
    event.preventDefault();
}

function dragEnterSpotB(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotB() {
    this.className = 'spot-b';
}

function dragDropSpotB(event) {
    this.className = 'spot-b';
    const data = event.dataTransfer.getData("text");
    if (data === 'color b-w' || data === 'color b-x' || data === 'color b-y' || data === 'color b-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-b';
    }
    if (data === 'color b-y') {
        const answer = document.querySelector('.s-b');
        answer.style.display = 'block';
        answer.style.color = '#4924a0';
    } else {
        const answer = document.querySelector('.s-b');
        answer.style.display = 'none';
    }
};

// square C

const spotC = document.querySelector('.spot-c');

spotC.addEventListener('dragover', dragOverSpotC);
spotC.addEventListener('dragenter', dragEnterSpotC);
spotC.addEventListener('dragleave', dragLeaveSpotC);
spotC.addEventListener('drop', dragDropSpotC);

function dragStartColorC(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorC() {
    this.className = 'color';
}

function dragOverSpotC(event) {
    event.preventDefault();
}

function dragEnterSpotC(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotC() {
    this.className = 'spot-c';
}

function dragDropSpotC(event) {
    this.className = 'spot-c';
    const data = event.dataTransfer.getData("text");
    if (data === 'color c-w' || data === 'color c-x' || data === 'color c-y' || data === 'color c-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-c';
    }
    if (data === 'color c-w') {
        const answer = document.querySelector('.s-c');
        answer.style.display = 'block';
        answer.style.color = '#da4f20';
    } else {
        const answer = document.querySelector('.s-c');
        answer.style.display = 'none';
    }
};

// square D

const spotD = document.querySelector('.spot-d');

spotD.addEventListener('dragover', dragOverSpotD);
spotD.addEventListener('dragenter', dragEnterSpotD);
spotD.addEventListener('dragleave', dragLeaveSpotD);
spotD.addEventListener('drop', dragDropSpotD);

function dragStartColorD(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorD() {
    this.className = 'color';
}

function dragOverSpotD(event) {
    event.preventDefault();
}

function dragEnterSpotD(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotD() {
    this.className = 'spot-d';
}

function dragDropSpotD(event) {
    this.className = 'spot-d';
    const data = event.dataTransfer.getData("text");
    if (data === 'color d-w' || data === 'color d-x' || data === 'color d-y' || data === 'color d-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-d';
    }
    if (data === 'color d-x') {
        const answer = document.querySelector('.s-d');
        answer.style.display = 'block';
        answer.style.color = '#3ff22c';
    } else {
        const answer = document.querySelector('.s-d');
        answer.style.display = 'none';
    }
};

// square E

const spotE = document.querySelector('.spot-e');

spotE.addEventListener('dragover', dragOverSpotE);
spotE.addEventListener('dragenter', dragEnterSpotE);
spotE.addEventListener('dragleave', dragLeaveSpotE);
spotE.addEventListener('drop', dragDropSpotE);

function dragStartColorE(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorE() {
    this.className = 'color';
}

function dragOverSpotE(event) {
    event.preventDefault();
}

function dragEnterSpotE(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotE() {
    this.className = 'spot-e';
}

function dragDropSpotE(event) {
    this.className = 'spot-e';
    const data = event.dataTransfer.getData("text");
    if (data === 'color e-w' || data === 'color e-x' || data === 'color e-y' || data === 'color e-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-e';
    }
    if (data === 'color e-z') {
        const answer = document.querySelector('.s-e');
        answer.style.display = 'block';
        answer.style.color = '#d1b83a';
    } else {
        const answer = document.querySelector('.s-e');
        answer.style.display = 'none';
    }
};

// square F

const spotF = document.querySelector('.spot-f');

spotF.addEventListener('dragover', dragOverSpotF);
spotF.addEventListener('dragenter', dragEnterSpotF);
spotF.addEventListener('dragleave', dragLeaveSpotF);
spotF.addEventListener('drop', dragDropSpotF);

function dragStartColorF(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorF() {
    this.className = 'color';
}

function dragOverSpotF(event) {
    event.preventDefault();
}

function dragEnterSpotF(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotF() {
    this.className = 'spot-f';
}

function dragDropSpotF(event) {
    this.className = 'spot-f';
    const data = event.dataTransfer.getData("text");
    if (data === 'color f-w' || data === 'color f-x' || data === 'color f-y' || data === 'color f-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-f';
    }
    if (data === 'color f-y') {
        const answer = document.querySelector('.s-f');
        answer.style.display = 'block';
        answer.style.color = '#01a9f2';
    } else {
        const answer = document.querySelector('.s-f');
        answer.style.display = 'none';
    }
};

// square G

const spotG = document.querySelector('.spot-g');

spotG.addEventListener('dragover', dragOverSpotG);
spotG.addEventListener('dragenter', dragEnterSpotG);
spotG.addEventListener('dragleave', dragLeaveSpotG);
spotG.addEventListener('drop', dragDropSpotG);

function dragStartColorG(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorG() {
    this.className = 'color';
}

function dragOverSpotG(event) {
    event.preventDefault();
}

function dragEnterSpotG(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotG() {
    this.className = 'spot-g';
}

function dragDropSpotG(event) {
    this.className = 'spot-g';
    const data = event.dataTransfer.getData("text");
    if (data === 'color g-w' || data === 'color g-x' || data === 'color g-y' || data === 'color g-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-g';
    }
    if (data === 'color g-y') {
        const answer = document.querySelector('.s-g');
        answer.style.display = 'block';
        answer.style.color = '#a2121f';
    } else {
        const answer = document.querySelector('.s-g');
        answer.style.display = 'none';
    }
};

// square H

const spotH = document.querySelector('.spot-h');

spotH.addEventListener('dragover', dragOverSpotH);
spotH.addEventListener('dragenter', dragEnterSpotH);
spotH.addEventListener('dragleave', dragLeaveSpotH);
spotH.addEventListener('drop', dragDropSpotH);

function dragStartColorH(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorH() {
    this.className = 'color';
}

function dragOverSpotH(event) {
    event.preventDefault();
}

function dragEnterSpotH(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotH() {
    this.className = 'spot-h';
}

function dragDropSpotH(event) {
    this.className = 'spot-h';
    const data = event.dataTransfer.getData("text");
    if (data === 'color h-w' || data === 'color h-x' || data === 'color h-y' || data === 'color h-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-h';
    }
    if (data === 'color h-w') {
        const answer = document.querySelector('.s-h');
        answer.style.display = 'block';
        answer.style.color = '#094784';
    } else {
        const answer = document.querySelector('.s-h');
        answer.style.display = 'none';
    }
};

// square I

const spotI = document.querySelector('.spot-i');

spotI.addEventListener('dragover', dragOverSpotI);
spotI.addEventListener('dragenter', dragEnterSpotI);
spotI.addEventListener('dragleave', dragLeaveSpotI);
spotI.addEventListener('drop', dragDropSpotI);

function dragStartColorI(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorI() {
    this.className = 'color';
}

function dragOverSpotI(event) {
    event.preventDefault();
}

function dragEnterSpotI(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotI() {
    this.className = 'spot-i';
}

function dragDropSpotI(event) {
    this.className = 'spot-i';
    const data = event.dataTransfer.getData("text");
    if (data === 'color i-w' || data === 'color i-x' || data === 'color i-y' || data === 'color i-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-i';
    }
    if (data === 'color i-x') {
        const answer = document.querySelector('.s-i');
        answer.style.display = 'block';
        answer.style.color = '#d272ff';
    } else {
        const answer = document.querySelector('.s-i');
        answer.style.display = 'none';
    }
};

// square J

const spotJ = document.querySelector('.spot-j');

spotJ.addEventListener('dragover', dragOverSpotJ);
spotJ.addEventListener('dragenter', dragEnterSpotJ);
spotJ.addEventListener('dragleave', dragLeaveSpotJ);
spotJ.addEventListener('drop', dragDropSpotJ);

function dragStartColorJ(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorJ() {
    this.className = 'color';
}

function dragOverSpotJ(event) {
    event.preventDefault();
}

function dragEnterSpotJ(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotJ() {
    this.className = 'spot-j';
}

function dragDropSpotJ(event) {
    this.className = 'spot-j';
    const data = event.dataTransfer.getData("text");
    if (data === 'color j-w' || data === 'color j-x' || data === 'color j-y' || data === 'color j-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-j';
    }
    if (data === 'color j-y') {
        const answer = document.querySelector('.s-j');
        answer.style.display = 'block';
        answer.style.color = '#02411f';
    } else {
        const answer = document.querySelector('.s-j');
        answer.style.display = 'none';
    }
};

// square K

const spotK = document.querySelector('.spot-k');

spotK.addEventListener('dragover', dragOverSpotK);
spotK.addEventListener('dragenter', dragEnterSpotK);
spotK.addEventListener('dragleave', dragLeaveSpotK);
spotK.addEventListener('drop', dragDropSpotK);

function dragStartColorK(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorK() {
    this.className = 'color';
}

function dragOverSpotK(event) {
    event.preventDefault();
}

function dragEnterSpotK(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotK() {
    this.className = 'spot-k';
}

function dragDropSpotK(event) {
    this.className = 'spot-k';
    const data = event.dataTransfer.getData("text");
    if (data === 'color k-w' || data === 'color k-x' || data === 'color k-y' || data === 'color k-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-k';
    }
    if (data === 'color k-z') {
        const answer = document.querySelector('.s-k');
        answer.style.display = 'block';
        answer.style.color = '#ffa10c';
    } else {
        const answer = document.querySelector('.s-k');
        answer.style.display = 'none';
    }
};

// square L

const spotL = document.querySelector('.spot-l');

spotL.addEventListener('dragover', dragOverSpotL);
spotL.addEventListener('dragenter', dragEnterSpotL);
spotL.addEventListener('dragleave', dragLeaveSpotL);
spotL.addEventListener('drop', dragDropSpotL);

function dragStartColorL(event) {
    this.className += ' hold-c';
    event.dataTransfer.setData('text', event.target.className);
    setTimeout(() => this.className = 'invisible-c', 0);
}

function dragEndColorL() {
    this.className = 'color';
}

function dragOverSpotL(event) {
    event.preventDefault();
}

function dragEnterSpotL(event) {
    event.preventDefault();
    this.className += ' hovered-c';
}

function dragLeaveSpotL() {
    this.className = 'spot-l';
}

function dragDropSpotL(event) {
    this.className = 'spot-l';
    const data = event.dataTransfer.getData("text");
    if (data === 'color l-w' || data === 'color l-x' || data === 'color l-y' || data === 'color l-z') {
        event.target.append(document.getElementsByClassName(data)[0]);
    } else {
        this.className = 'spot-l';
    }
    if (data === 'color l-y') {
        const answer = document.querySelector('.s-l');
        answer.style.display = 'block';
        answer.style.color = '#1f1f53';
    } else {
        const answer = document.querySelector('.s-l');
        answer.style.display = 'none';
    }
};