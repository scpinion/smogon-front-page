What's new:
- Created Featured Pokemon section
- Just used the text from their OU analysis and art from Smeargle's Studio
- Updated the RMT badge section.
- 

From v2:
- Completely re-did the design template
- uses w3.css to facilitate a responsive columnar layout.
- three columns on desktop
- two columns on tablet (~990px cutoff)
- one column on mobile (~600px cutoff)
- navigation menus also adapt to screen size

Added new slider code
- used flickity (http://flickity.metafizzy.co/)
- mobile friendly and stupidly easy to implement

Badge Selector
- this still needs some work. It flows awkwardly and might be sparse content-wise
- 

From v1:

implemented stats section
- requires stats.js
- it pulls from stats/year-month/metagame-cutoff.txt
- uses current date. If no file found then searches back for up to a year.

implemented ranks section
- requires ladder.php and ladder.js
- ladders.php just pulls the json from pokemonshowdown.com/ladder/ou.json to prevent issues with cross-domain stuff