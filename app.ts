let select: any = (el:string , all:boolean =false) => {
    el = el.trim();
    let element:any;
   if(all){
        element = Array.from(document.querySelectorAll(el))
    }
    else {
        element = document.querySelector(el);
    }

    if( element === null || element.length === 0 || element === undefined ){
        return console.log('element not found');
    }else{
        return element
    }
}

let inputText: HTMLTextAreaElement = select('#inputText');
let symbolInput:HTMLInputElement = select('#symbol');
let joinedText:HTMLTextAreaElement = select('#joinedText');
let blankLines:HTMLInputElement  = select('#blankLines');
 

let bool : boolean = false;
let trailingBool : boolean = false;

let blankLinesFunction =  (e:any) => {
    if(e.target.checked){
       bool = true
    }
    else{
        bool = false
    }
   
}
 



const inputFunction = (n:boolean) => {
    let originalValue =   n ? inputText.value.replaceAll(/^\s*$(?:\r\n?|\n)/gm, '') : inputText.value;
    inputText.value = originalValue;
    let symValue = symbolInput.value;
    let replacedValue = originalValue.replaceAll(/\n/gi, symValue); 
    joinedText.value = replacedValue;
}

inputText.addEventListener('input', () => {
    inputFunction(bool);
})

symbolInput.addEventListener('input', () => {
    inputFunction(bool);
})

blankLines.addEventListener('change', () => {

    inputFunction(bool);
})

blankLines.addEventListener('input', (e) => {
    blankLinesFunction(e)
})

 