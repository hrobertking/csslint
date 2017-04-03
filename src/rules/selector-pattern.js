/*
 * Rule: warn when the selector naming convention is not followed
 */

CSSLint.addRule({

    // rule information
    id: "selector-pattern",
    name: "Warn when the naming convention is not followed",
    desc: "Will warn when the selector naming convention is not followed",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            rxCamel = /^[a-z]+([0-9]+|[A-Z][a-z]+)?/,
            rxSnake = /^[a-z][a-z0-9\_]+$/,
            rxDashs = /^[a-z][a-z0-9\-]*$/,
            choice = "hyphen",
            pattern;

        /**
         * use the hyphen pattern
         */
        switch (choice) {
            case "camel":
                pattern = rxCamel;
                break;
            case "sname":
                pattern = rxSnake;
                break;
            default:
                pattern = rxDashs;
                break;
        }

        parser.addListener("startrule", function(event) {
            var sel,
                pts,
                cls,
                bites;

            for (sel = 0; sel < event.selectors.length; sel += 1) {
                for (pts = 0; pts < event.selectors[sel].parts.length; pts += 1) {
                    if (event.selectors[sel].parts[pts].type === 8) {
                        bites = event.selectors[sel].parts[pts].text.split(/\#|\./);
                        for (cls = 0; cls < bites.length; cls += 1) {
                            if (bites[cls] && !pattern.test(bites[cls])) {
                                reporter.report("Selector naming convention not followed.", event.line, event.col, rule);
                            }
                        }
                    }
                }
            }
        });
    }

});
