# createRegExr
정규식 생성기

// test example

var re = new RegExp(_r.ctBracketTxt("[", "[\\w]*"));

re.test("[aassadas]");
//true

var re = new RegExp(_r.ctBracketTxt("(", "[\\w]*"));

re.test("(aassadas)");
//true

var re = new RegExp(_r.ctBracketTxt("{", "[\\w]*"));

re.test("{aassadas}");
//true
