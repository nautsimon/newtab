# newtab
##homepage with customizable links, a to do list, and the current date   

###How to add this to your new tab:
1. add "Replace New Tab Page" chrome extension
2. copy and paste the path to homepage.html into path
3. save

###Adding/replacing/removing links:
1. open homepage.html in a text editor (notepad++, notepad, sublime, etc.)
2. scroll down to "*/these are the links/*"

- to change the destination of the link, change the text within the "" next to href
...(eg. `<li><a href="change this text">[github]</a></li><"`

- to change the title of the link, change the text between the two ><

...(eg. `<li><a href="http://github.com/">[change this text]</a></li>`)

- to delete an entire link, simply delete the entire line

- to add a link, simply clone a line by copy and pasting and changing the values (see above)
