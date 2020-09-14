/** @format */

const regFunc = {
  regHistory: [],
  pushHistory: function (regtext) {
    this.regHistory.push(regtext);
  },
  backHistory: function () {
    if (this.regHistory.length == 0) {
      alert("히스토리가 없습니다.");
      return "";
    }
    return this.regHistory.pop();
  },
  // 괄호 감싸기
  ctBracketTxt: function (bracketType, inText) {
    let bracketTypeOpen;
    let bracketTypeClose;
    this.pushHistory(inText);
    if (bracketType == "[" || bracketType == "]" || bracketType == "[]") {
      bracketTypeOpen = "(\\[)";
      bracketTypeClose = "(\\])";
    }
    if (bracketType == "(" || bracketType == ")" || bracketType == "()") {
      bracketTypeOpen = "(\\()";
      bracketTypeClose = "(\\))";
    }
    if (bracketType == "{" || bracketType == "}" || bracketType == "{}") {
      bracketTypeOpen = "(\\{)";
      bracketTypeClose = "(\\})";
    }
    return bracketTypeOpen + inText + bracketTypeClose;
  },
  // 더하기
  plus: function (mark, num, min, max) {
    this.pushHistory(regText);
    if (arguments.length > 1) {
      if (typeof min == "number") {
        return "{" + min + ",}";
      }
      if (typeof max == "number" || typeof min == "number") {
        return "{" + min + "," + max + "}";
      }
      if (typeof num == "number") {
        return "{" + num + "}";
      }
    } else {
      return mark;
    }
  },
  // 텍스트의 시작
  sText: function (text) {
    return "^" + text;
  },
  // 텍스트의 마지막
  eText: function (text) {
    return text + "$";
  },
  // 빈칸 뒤 텍스트 검색
  sBoundary: function (text) {
    return "/\b" + text;
  },
  // 빈칸 앞 텍스트 검색
  eBoundary: function (text) {
    return "/\b" + text;
  },
  // 정규식 형식으로 변환
  createRegExp: function (regText, flag) {
    if (flag != undefined) return new RegExp(regText, flag);
    return new RegExp(regText);
  },
};

let selectFunc = {
  getCursorLocation: function (obj) {
    return obj.selectionEnd;
  },
  getSeletedBoundLocation: function (obj) {
    return [obj.selectionStart, obj.selectionEnd];
  },
  getSelectLocation: function (obj) {
    return obj.selectionStart == obj.selectionEnd ? this.getCursorLocation(obj) : this.getSeletedBoundLocation(obj);
  },
  getSelectedStr: function (obj) {
    return typeof this.getSelectLocation(obj) === "number" ? obj.value : obj.value.substring(this.getSeletedBoundLocation(obj)[0], this.getSeletedBoundLocation(obj)[1]);
  },
};

let _s = selectFunc;
let _r = regFunc;
