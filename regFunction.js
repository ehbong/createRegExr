let regFunc = {
    ctBracketTxt : function (bracketType, inText){
        let bracketTypeOpen;
        let bracketTypeClose;
        if(bracketType == '[' || bracketType == ']' || bracketType == '[]'){
            bracketTypeOpen = '(\\[)';
            bracketTypeClose = '(\\])';
        }
        if(bracketType == '(' || bracketType == ')' || bracketType == '()'){
            bracketTypeOpen = '(\\()';
            bracketTypeClose = '(\\))';
        }
        if(bracketType == '{' || bracketType == '}' || bracketType == '{}'){
            bracketTypeOpen = '(\\{)';
            bracketTypeClose = '(\\})';
        }
        return bracketTypeOpen + inText + bracketTypeClose;
    }
    , createRegExp : function(regText){
        return new RegExp('()'+regText+'()');

    }
}

let _r = regFunc;
