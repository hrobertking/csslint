(function() {
    "use strict";

    var Assert = YUITest.Assert;

    YUITest.TestRunner.add(new YUITest.TestCase({

        name: "selector naming convention errors",

        "Subselectors following the camelcase pattern should result in an error": function() {
            var result = CSSLint.verify("div .fooBar { display: block; }", { "selector-pattern": 1 });

            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Selector naming convention not followed.", result.messages[0].message);
        },

        "Selectors following the camelcase pattern should result in an error": function() {
            var result = CSSLint.verify(".fooBar { display: block; }", { "selector-pattern": 1 });

            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Selector naming convention not followed.", result.messages[0].message);
        },

        "Subselectors following the snakecase pattern should result in an error": function() {
            var result = CSSLint.verify("div .foo_bar { display: block; }", { "selector-pattern": 1 });

            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Selector naming convention not followed.", result.messages[0].message);
        },

        "Selectors following the snakecase pattern should result in an error": function() {
            var result = CSSLint.verify(".foo_bar { display: block; }", { "selector-pattern": 1 });

            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Selector naming convention not followed.", result.messages[0].message);
        },

        "Subselectors following the hyphen pattern should not result in an error": function() {
            var result = CSSLint.verify("div .foo-bar { display: block; }", { "selector-pattern": 1 });

            Assert.areEqual(0, result.messages.length);
        },

        "Selectors following the hyphen pattern should not result in an error": function() {
            var result = CSSLint.verify(".foo-bar { display: block; }", { "selector-pattern": 1 });

            Assert.areEqual(0, result.messages.length);
        }

    }));

})();
