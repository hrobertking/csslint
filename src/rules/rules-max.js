/*
 * Rule: Warn when there are 500 or more rules in a stylesheet
 */

CSSLint.addRule({

    // rule information
    id: "rules-max",
    name: "Warn when too many rules are present",
    desc: "Will warn when the rule count in a stylesheet crosses the limit specified.",
    browsers: "All",

    // initialization
    init: function(parser, reporter, options) {
        "use strict";
        var rule = this,
            ruleCount = 0,
            limit = options ? options["max-rules"] : 0;

        limit = limit || 0;

        parser.addListener("startrule", function() {
            ruleCount += 1;
        });

        parser.addListener("endstylesheet", function() {
            if (limit && limit < ruleCount) {
                reporter.report("There are too many rules (" + ruleCount + ") in the stylesheet.", 0, 0, rule);
            }
        });
    }

});
