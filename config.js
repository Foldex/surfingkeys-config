// A very tridactyl-esque config file.

// Compatibility Prefix
const {
    Clipboard,
    Front,
    Hints,
    Normal,
    RUNTIME,
    Visual,
    aceVimMap,
    addSearchAlias,
    cmap,
    getClickableElements,
    imap,
    imapkey,
    iunmap,
    map,
    mapkey,
    readText,
    removeSearchAlias,
    tabOpenLink,
    unmap,
    unmapAllExcept,
    vmapkey,
    vunmap
} = api;

// ---- Settings ----
Hints.setCharacters('asdfgyuiopqwertnmzxcvb');

settings.defaultSearchEngine = 'd';
settings.hintAlign = 'left';
settings.omnibarPosition = 'bottom';
settings.focusFirstCandidate = false;
settings.focusAfterClosed = 'last';
settings.scrollStepSize = 200;
settings.tabsThreshold = 0;
settings.modeAfterYank = 'Normal';

// ---- Map -----
// --- Hints ---
// Open Multiple Links
map('<Alt-f>', 'cf');

// Yank Link URL
map('<Alt-y>', 'ya');
map('<Alt-u>', 'ya');

// Open Hint in new tab
map('F', 'C');

// --- Nav ---
// Open Clipboard URL in current tab
mapkey('p', "Open the clipboard's URL in the current tab", () => { Clipboard.read(function(response) { window.location.href = response.data; }); });

// Open Clipboard URL in new tab
map('P', 'cc');

// Open a URL in current tab
map('o', 'go');

// Choose a buffer/tab
map('b', 'T');

// Edit current URL, and open in same tab
map('O', ';U');

// Edit current URL, and open in new tab
map('T', ';u');

// History Back/Forward
map('H', 'S');
map('L', 'D');

// Scroll Page Down/Up
mapkey("<Ctrl-d>", "Scroll down", () => { Normal.scroll("pageDown"); });
mapkey("<Ctrl-u>", "Scroll up", () => { Normal.scroll("pageUp"); });
map('<Ctrl-b>', 'U');  // scroll full page up
//map('<Ctrl-f>', 'P');  // scroll full page down -- looks like we can't overwrite browser-native binding

// Next/Prev Page
map('K', '[[');
map('J', ']]');

// Open Chrome Flags
mapkey('gF', '#12Open Chrome Flags', () => { tabOpenLink("chrome://flags/"); });

// --- Tabs ---
// Tab Delete/Undo
map('D', 'x');
mapkey('d', '#3Close current tab', () => { RUNTIME("closeTab"); });
mapkey('u', '#3Restore closed tab', () => { RUNTIME("openLast"); });

// Move Tab Left/Right w/ one press
map('>', '>>');
map('<', '<<');

// Tab Next/Prev
map('<Alt-j>', 'R');
map('<Alt-k>', 'E');

// --- Misc ---
// Yank URL w/ one press (disables other yx binds)
map('y', 'yy');

// Change focused frame
map('gf', 'w');

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

// Emoji
iunmap(":");

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

// ---- Search Engines -----
removeSearchAlias('b', 's');
removeSearchAlias('d', 's');
removeSearchAlias('g', 's');
removeSearchAlias('h', 's');
removeSearchAlias('w', 's');
removeSearchAlias('y', 's');
removeSearchAlias('s', 's');

addSearchAlias('ama', 'amazon', 'https://www.amazon.com/s?k=', 's');
addSearchAlias('ap', 'arch pkg', 'https://www.archlinux.org/packages/?sort=&q=', 's');
addSearchAlias('aur', 'aur', 'https://aur.archlinux.org/packages/?O=0&SeB=nd&K=', 's');
addSearchAlias('aw', 'arch wiki', 'https://wiki.archlinux.org/index.php?title=Special:Search&search=', 's');
addSearchAlias('d',  'ddg', 'https://duckduckgo.com/?q=', 's');
addSearchAlias('dh', 'docker', 'https://hub.docker.com/search?type=image&q=', 's');
addSearchAlias('fh', 'flathub', 'https://flathub.org/apps/search/', 's');
addSearchAlias('gh', 'github', 'https://github.com/search?q=', 's');
addSearchAlias('pdb', 'proton', 'https://www.protondb.com/search?q=', 's');
addSearchAlias('r', 'reddit', 'https://libreddit.spike.codes/r/', 's');
addSearchAlias('st', 'steam', 'https://store.steampowered.com/search/?term=', 's');
addSearchAlias('wiki', 'wikipedia', 'https://en.wikipedia.org/wiki/Special:Search/', 's');
addSearchAlias('y', 'yt', 'https://invidious.snopyta.org/search?q=', 's');
