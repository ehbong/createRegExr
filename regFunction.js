let regFunc = {
    regHistory : []
    , pushHistory : function(regtext){
        this.regHistory.push(regtext);
    }
    , backHistory : function(){
        if(this.regHistory.length == 0){
            alert("히스토리가 없습니다.");
            return '';
        }
        return this.regHistory.pop();
    }
    , ctBracketTxt : function (bracketType, inText){
        let bracketTypeOpen;
        let bracketTypeClose;
        this.pushHistory(inText);
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
        this.pushHistory(regText);
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
    , createRegExp : function(regText, flag){
        if(flag != undefined) return new RegExp(regText, flag);
        return new RegExp(regText);
    }
}

let _r = regFunc;
