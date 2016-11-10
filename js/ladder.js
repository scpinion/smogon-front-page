function updatePSRanks(meta) {
    $("#ps-standings-container").html("<p>Loading...</p>");
    
    $.ajax({
      url: "ladder.php?meta=" + meta,
    }).done(function( data ) {
        data = JSON.parse(data)
        console.log(data)
        var text = "<table id=\"ps-standings\">";
        text += " <thead>";
        text += "  <tr>";
        text += "   <th class=\"rank head\">Rank</th>";
        text += "   <th class=\"username head\">Name</th>";
        text += "   <th class=\"elo head\">ELO</th>";
        text += "   <th class=\"gxe head\">GXE</th>";
        text += "  </tr>";
        text += " </thead>";
        text += " <tbody>";
        for (let i=0; i<100; i++) {
            let playerData = data.toplist[i]
            text += "  <tr>";
            text += "   <td class=\"rank cell\">" + (i+1) + "</td>";
            text += "   <td class=\"username cell\">" + playerData.username + "</td>";
            text += "   <td class=\"elo cell\">" + playerData.elo.toFixed(1) + "</td>";
            text += "   <td class=\"gxe cell\">" + playerData.gxe.toFixed(1) + "</td>";
            text += "  </tr>";
        }
        text += " </tbody></table>"
        $("#ps-standings-container").html(text);
      });
}
$( document ).ready(function() {
   updatePSRanks("ou")
});

$("#ranks-metagame-select").on("change", function() {
  updatePSRanks(this.value);
});