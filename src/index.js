module.exports = function toReadable (number) {
    const arr = [
        ['0','zero'],
        ['1','one'],
        ['2','two'],
        ['3','three'],
        ['4','four'],
        ['5','five'],
        ['6','six'],
        ['7','seven'],
        ['8','eight'],
        ['9','nine'],
        ['10','ten'],
        ['11','eleven'],
        ['12','twelve'],
        ['13','thirteen'],
        ['14','fourteen'],
        ['15','fifteen'],
        ['16','sixteen'],
        ['17','seventeen'],
        ['18','eighteen'],
        ['19','nineteen'],
        ['20','twenty'],
        ['30','thirty'],
        ['40','forty'],
        ['50','fifty'],
        ['60','sixty'],
        ['70','seventy'],
        ['80','eighty'],
        ['90','ninety'],
        ['100','one hundred'],
        ['200','two hundred'],
        ['300','three hundred'],
        ['400','four hundred'],
        ['500','five hundred'],
        ['600','six hundred'],
        ['700','seven hundred'],
        ['800','eight hundred'],
        ['900','nine hundred']
    ];
    let numToStr = String(number);
    let lengthNumber = numToStr.length;
    let result = '';
    let a = numToStr[0];
    
    function unit() {
        for (i = 0; i < arr.length; i++) {
            if (arr[i][0] == a) 
                {
                    result = arr[i][1];
                }
        }
    }
    
    function dozen() {
        if (numToStr[1] == '0' || numToStr[0] == '1'){
            a = numToStr;
            unit();
        }
        if (numToStr[0] > '1' && numToStr[1] == '0'){
            a = numToStr;
            unit();
        }
        if (numToStr[0] > '1' && numToStr[1] !== '0'){
            let dozens = numToStr[0] + '0';
            let units = numToStr[1];
            a = dozens;
            unit();
            res = result;
            a = units;
            unit();
            result = res + ' ' + result;
        }
    }
  
    function hundred() {
        let hungreds = numToStr[0] + '00';
        let dozens = numToStr[1] + '0';
        let units = numToStr[2];
        if (numToStr[1] == '0' && numToStr[2] == '0'){
            a = numToStr;
            unit();
        }
        if (numToStr[1] == '0' && numToStr[2] !== '0'){
            a = hungreds;
            unit();
            hung = result;
            a = units;
            unit();
            result = hung + ' ' + result;
        }
        if (numToStr[1] !== '0' && Number(numToStr[1]) > 1 && numToStr[2] == '0'){
            a = hungreds;
            unit();
            hung = result;
            a = dozens;
            unit();
            result = hung + ' ' + result;
        } 
        if (numToStr[1] !== '0' && Number(numToStr[1]) > 1 && numToStr[2] !== '0'){
            a = hungreds;
            unit();
            hung = result;
            a = dozens;
            unit();
            doz = result;
            a = units;
            unit();
            result = hung + ' ' + doz + ' ' + result;
        } 
        if (numToStr[1] !== '0' && Number(numToStr[1]) == 1){
            a = hungreds;
            unit();
            hung = result;
            a = numToStr[1] + numToStr[2];
            unit();
            result = hung + ' ' + result;
        } 
       }
  
    if (lengthNumber === 1){
      unit();
    }
  
    if (lengthNumber === 2){
      dozen();
    }
  
    if (lengthNumber === 3){
      hundred();
    }
    return result;
}


