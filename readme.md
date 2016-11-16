For those of you looking to help. I'm not particularly great with git, so I much prefer to edit things in my c9 editor without making individual commits. I'll try to push my updates here regularly. 

What's new:
Added some Cosmog to the design

Adjusted breakpoints in CSS to mesh with the badge selector
- they are now 1100px and 600px

Created Featured Pokemon section
- Currently, it just uses the text from the OU analysis and some art from Smeargle's Studio
- Long term: use JS to provide a random pokemon when page loads
- keep a list of mons, links to art, and artist to choose from
- pull overview from dex analysis

Added some places to feature art from Smogon's artists
- one always displays at the bottom of the page (below the ranks section on desktop/tablet)
- another is only visible on desktop and displays below the twitter feed

Filled in the badge section.
- pulled most of the info from forum headers and main threads

From v2:
Completely re-did the design template
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

From v1:

implemented stats section
- requires stats.js
- it pulls from stats/year-month/metagame-cutoff.txt
- uses current date. If no file found then searches back for up to a year.

implemented ranks section
- requires ladder.php and ladder.js
- ladder.php just pulls the json from pokemonshowdown.com/ladder/ou.json to prevent issues with cross-domain stuff