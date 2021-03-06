/**
 * @fileoverview eslint plugin demo
 * @author bowen-wu
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/bowen-lint'),

    RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('bowen-lint', rule, {
    valid: [],
    invalid: [
        {
            code: 'individual lint',
            errors: [{
                message: 'Fill me in.',
                type: 'Me too'
            }]
        }
    ]
});
