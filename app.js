var select = function (el, all) {
    if (all === void 0) { all = false; }
    el = el.trim();
    var element;
    if (all) {
        element = Array.from(document.querySelectorAll(el));
    }
    else {
        element = document.querySelector(el);
    }
    if (element === null || element.length === 0 || element === undefined) {
        return console.log('element not found');
    }
    else {
        return element;
    }
};
var inputText = select('#inputText');
var symbolInput = select('#symbol');
var joinedText = select('#joinedText');
var blankLines = select('#blankLines');
var bool = false;
var trailingBool = false;
var blankLinesFunction = function (e) {
    if (e.target.checked) {
        bool = true;
    }
    else {
        bool = false;
    }
};
var inputFunction = function (n) {
    var originalValue = n ? inputText.value.replaceAll(/^\s*$(?:\r\n?|\n)/gm, '') : inputText.value;
    inputText.value = originalValue;
    var symValue = symbolInput.value;
    var replacedValue = originalValue.replaceAll(/\n/gi, symValue);
    joinedText.value = replacedValue;
};
inputText.addEventListener('input', function () {
    inputFunction(bool);
});
symbolInput.addEventListener('input', function () {
    inputFunction(bool);
});
blankLines.addEventListener('change', function () {
    inputFunction(bool);
});
blankLines.addEventListener('input', function (e) {
    blankLinesFunction(e);
});
