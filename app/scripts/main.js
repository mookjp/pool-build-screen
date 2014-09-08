(function () {
    showCommitId();

    var ws = new WebSocket("ws://" + document.location.host + ":8080");
    ws.onmessage = function(event){
        if (event.data == "FINISHED") {
            document.location.reload();
        } else {
            $(".log-console").append("\n" + event.data);
            $(".log-console").animate(
                { scrollTop:
                    $(".log-console")[0].scrollHeight - $(".log-console").height()
                },
                200);
        }
    }

    ws.onerror = function(event){
    }
})();

function showCommitId() {
    $(".commit-id").text(document.location.host.split(".")[0]);
}
