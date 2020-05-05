let regFunc = {
    regHistory : []
    , pushHistory : function(regtext){
        this.regHistory.push(this.regHistory);
    }
    , backHistory : function(){
        return this.regHistory.pop();
    }
    , ctBracketTxt : function (bracketType, inText){
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
    , plusOption : function(mark, num, min, max){
        if(arguments.length > 1){
            if(typeof min == "number"){
                return "{"+min+",}";
            }
            if(typeof max == "number" || typeof min == "number"){
                return "{"+min+","+max+"}";
            }
            if(typeof num == "number"){
                return "{"+num+"}";
            }
        }else{
            return mark;
        }
    }
    , createRegExp : function(regText){
        this.pushHistory(regText);
        return new RegExp(regText);
    }
}

let _r = regFunc;
