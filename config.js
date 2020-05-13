// A very tridactyl-esque config file.

// ---- Functions ----
mapkey('p', "Open the clipboard's URL in the current tab", function() {
    Clipboard.read(function(response) {
        window.location.href = response.data;
    });
});

// Jisho Translate on q/Q
// Messy
Front.registerInlineQuery({
    url: function(q) {
        return `https://jisho.org/search/${q}`;
    },
    parseResult: function(res) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(res.text, "text/html");
        var result = doc.querySelector("#primary>div.exact_block");
        if (result) {
            result.querySelectorAll('div>span.furigana').forEach(function(e){
                br = document.createElement("br");
                e.appendChild(br);
            });
            result.querySelectorAll('h4').forEach(function(e){
                e.remove();
            });
            result.querySelectorAll('div>div.concept_light-status').forEach(function(e){
                e.remove();
            });
            result.querySelectorAll('div>a.light-details_link').forEach(function(e){
                e.remove();
            });
            result.querySelectorAll('div>span.meaning-abstract').forEach(function(e){
                e.remove();
            });
            result.querySelectorAll('div>span.supplemental_info').forEach(function(e){
                e.outerHTML = "&nbsp;" + e.outerHTML;
            });
            var exp = result.innerHTML;
            return exp;
        }    }
});

// ---- Settings ----
Hints.characters = 'asdfgyuiopqwertnmzxcvb';

settings.defaultSearchEngine = 'd';
settings.hintAlign = 'left';
settings.omnibarPosition = 'bottom';
settings.focusFirstCandidate = false;
settings.focusAfterClosed = 'last';
settings.scrollStepSize = 200;
settings.tabsThreshold = 7;
settings.startToShowEmoji = 2;
settings.modeAfterYank = 'Normal';

// Search Engines
removeSearchAliasX('b', 's');
removeSearchAliasX('d', 's');
removeSearchAliasX('g', 's');
removeSearchAliasX('h', 's');
removeSearchAliasX('w', 's');
removeSearchAliasX('y', 's');
removeSearchAliasX('s', 's');

addSearchAliasX('amz', 'amazon', 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias=aps&field-keywords=', 's');
addSearchAliasX('au', 'aur', 'https://aur.archlinux.org/packages/?O=0&SeB=nd&K=', 's');
addSearchAliasX('aw', 'arch wiki', 'https://wiki.archlinux.org/index.php?title=Special:Search&search=', 's');
addSearchAliasX('d', 'duckduckgo', 'https://duckduckgo.com/?q=', 's');
addSearchAliasX('gh', 'github', 'https://github.com/search?utf8=✓&q=', 's');
addSearchAliasX('j', 'jisho', 'http://jisho.org/search/', 's');
addSearchAliasX('mtg', 'mtg cards', 'https://scryfall.com/search?q=', 's');
addSearchAliasX('r', 'reddit', 'https://old.reddit.com/r/', 's');
addSearchAliasX('st', 'steam', 'https://store.steampowered.com/search/?term=', 's');
addSearchAliasX('w', 'wikipedia', 'https://en.wikipedia.org/wiki/Special:Search/', 's');
addSearchAliasX('y', 'invidious', 'https://invidio.us/search?q=', 's');

// ---- Unmap -----
// Proxy Stuff
unmap('spa');
unmap('spb');
unmap('spc');
unmap('spd');
unmap('sps');
unmap('cp');
unmap(';cp');
unmap(';ap');

// Misc
unmap(';t');
unmap('si');
unmap('ga');
unmap('gc');
unmap('gn');
unmap('gr');
unmap('ob');
unmap('og');
unmap('od');
unmap('oy');

// ---- Map -----
// Misc
map('<Alt-f>', 'cf');
map('<Alt-y>', 'ya');
map('P', 'cc');
map('F', 'C');
map('gf', 'w');
map('`', '\'');
map('o', 'go');
// History Back/Forward
map('H', 'S');
map('L', 'D');
// Tab Delete/Undo
map('D', 'x');
mapkey('d', '#3Close current tab', function() {
    RUNTIME("closeTab");
});
mapkey('u', '#3Restore closed tab', function() {
    RUNTIME("openLast");
});
// Scroll Page Down/Up
mapkey('<Ctrl-d>', '#9Forward half page', function() { Normal.feedkeys('3j'); });
mapkey('<Ctrl-u>', '#9Back half page', function() { Normal.feedkeys('3k'); });
mapkey('<Ctrl-Space>', '#9Page Up', function() { Normal.feedkeys('5k'); });
// Tab Next/Prev
map('<Alt-j>', 'R');
map('<Alt-k>', 'E');
// Next/Prev Page
map(']', ']]');
map('[', '[[');
mapkey('K', '#1Click on the previous link on current page', previousPage);
mapkey('J', '#1Click on the next link on current page', nextPage);
// Move Tab Left/Right
map('>', '>>');
map('<', '<<');

// Chrome Flags
mapkey('gF', '#12Open Chrome Flags', function() {
    tabOpenLink("chrome://flags/");
});
