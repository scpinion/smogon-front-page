function getMetagameUsageStats(meta) {
    $("#stats-container").html("Loading...");
    let now = new Date();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let cutoff = 1630;
    if (meta in {"ou":1, "doublesou":1}) cutoff = 1695;
    console.log(month)
    getStatsUntilUsableMonth(year, month, meta, cutoff);
}

function getStatsUntilUsableMonth(year, month, meta, cutoff, counter) {
    if (parseInt(month) < 1) {
        $("#stats-container").html("unable to load stats.");
        return;
    }
    if (month < 10) {month = "0" + month}
    console.log(month)
    $.ajax({
      url: "stats/" + year + "-" + month + "/" + meta + "-" + cutoff + ".txt"
    }).done(function( data ) {
        let usage = [];
        let lines = data.split("\n");
        lines = lines.slice(5, -2); //remove table header and footer
        for (let i=0; i < 50; i++) {
            let line = lines[i];
            let usageData = line.replace(" ", "").split("|");
            usage.push({
                "name": usageData[2].trim(),
                "percent": usageData[3].replace(/%/g, "").trim()
            });
        }
        addUsageDataToPage(usage, meta);
        
    }).fail( function(e) {
        console.log(e);
        getStatsUntilUsableMonth(year, month-1, meta, cutoff, counter + 1);
    });
}

function addUsageDataToPage(usage, meta) {
    let text = "";
    for(let i = 0; i < 50; i++) {
        if (i===0) {
            text += "<a href=\"http://www.smogon.com/dex/xy/pokemon/" + usage[i].name.toLowerCase() + "/" + meta + "/\"><div class=\"large-usage\"><img src=\"http://play.pokemonshowdown.com/sprites/bw/" + usage[i].name.toLowerCase() + ".png\" /><div>" + parseFloat(usage[i].percent).toFixed(1) + " %</div></div></a>";
        } else {
            text += "<a href=\"http://www.smogon.com/dex/xy/pokemon/" + usage[i].name.toLowerCase() + "/" + meta + "/\"><div class=\"small-usage\"><img src=\"http://www.smogon.com/dex/media/sprites/xyicons/" + usage[i].name.toLowerCase() + ".png\" /><div>" + parseFloat(usage[i].percent).toFixed(1) + " %</div></div></a>";
        }
    }
    $("#stats-container").html(text);
}

$( document ).ready(function() {
   getMetagameUsageStats("ou");
});

$("#stats-metagame-select").on("change", function() {
  getMetagameUsageStats(this.value);
});