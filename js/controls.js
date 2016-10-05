jq(document).on("click", "#close-btn", function(e) {
    remote.getCurrentWindow().close();
});

jq(document).on("click", "#min-btn", function(e) {
    remote.getCurrentWindow().minimize();
});
var maximize = function(e) {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
};
jq(document).on("dblclick", "#controls", maximize);
jq(document).on("click", "#max-btn", maximize);

jq(document).on("click", "#settings-btn", function(e) {
    jq("#settings-panel").appendTo("#popup");
    jq("#popup").show();
    jq("#theme-selector").trigger('click').attr("size","2");

});
jq(document).on("mouseup", ":not(#settings-btn), :not(#settings-panel)", function() {
    jq("#popup").hide();
});

jq(document).on('keydown', function(e) {
    if (e.which == 27) jq("#popup").hide();
});

jq(document).on("change", "#theme-selector", function(e) {
    var theme = jq(e.target).find("option:selected").text();
    setCustomTheme(theme)
    jq("#popup").hide();
});
