---
layout: jsfile
---
function check_solution(provided_sol, next) {
    let input_val = document.getElementById("input").value.toLowerCase();
    if (input_val === provided_sol) {
        let answer_div = document.getElementById("answer");
        answer_div.innerHTML = `Korrekt! Zur nächsten Etappe geht es <a href=/lille-trail${next}>hier</a> entlang.`;
    } else {
        let response_field = document.getElementById("response");
        response_field.innerHTML = "<br>Das war leider nicht die richtige Antwort :(<br>Denk daran, dass keine Umlaute, Akzente oder andere Sonderzeichen erlaubt sind!";
    }
}
