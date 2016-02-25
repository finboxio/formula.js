
2.0.3 / 2016-02-25
==================

  * at stage-0

2.0.2 / 2016-02-25
==================

  * link to dist instead

2.0.1 / 2016-02-25
==================

  * remove webpack and build with browserfiy

2.0.0 / 2016-02-25
==================

  * fix this issue
  * Bumped up version to 1.0.6
  * Merge branch 'master' of https://github.com/sutoiku/formula.js
  * Update the trig library
  * Merge pull request #33 from petermoresi/master
  * Fix SEARCH including test cases
  * Fixing SEARCH function to return error.value when text is not found
  * Linting
  * Native SUM implementation
  * Release version 1.0.5
  * Bump up the version number
  * Merge branch 'master' of https://github.com/sutoiku/formula.js
  * Remove logging statements
  * Removed getjson function.
  * Fixed bug in test case for Logest function.
  * Added more test cases to text functions.
  * Added more test cases to utils functions.
  * Added test case to text functions.
  * Added more test case for statistical functions.
  * Added more test cases to miscellaneous functions.
  * Fixed bugs for POW function, which didn't return error value.
  * Removed statistic functions from math-trig and added more test cases.
  * Added more test cases to lookup-reference functions.
  * Cleaned lib requires.
  * Added more test cases for financial and information functions.
  * Addes test case to datetime and increase test coverage to 100%
  * Added more test cases for database functions, code coverage to 100%
  * Release formujajs v1.0.4
  * Added more test cases.
  * Implemented T.TEST().
  * Implemented TINV2T.
  * Implemented TREND function.
  * Implemented LOGEST function.
  * Added implementation for CHISQ.TEST()
  * Added ROW, ROWS, COLUMM and COLUMNS
  * Added more missing finctions
  * Added CHISQ.DIST.RT
  * Merge branch 'master' of https://github.com/sutoiku/formula.js
  * Fixed timezone issue temporarily.
  * Merge branch 'master' of https://github.com/sutoiku/formula.js
  * Merged test function for NETWORKDAYS.
  * Added more test for NETWORKDAYS.INTL().
  * Fixed NETWORKDAYS.INTL and modified relative test.
  * Removed duplicate test case.
  * Added more missing functions
  * Added some missing functions and associated test cases
  * Added some more test cases
  * Fix failing test cases
  * Fixed up webpack configuration
  * Merged changes
  * Merge branch 'master' of https://github.com/sutoiku/formula.js
  * Remove moment and md5 dependencies
  * Fix ACCRINT
  * Cleanup
  * Removed reference to blueimp-md5
  * Moment is now optional
  * Inject moment only if we have it
  * Put back INTERVAL in date-time file
  * Refactoring
  * Loosen epsilon for now
  * Fix tests
  * Remove moment-related tests
  * Add some tests
  * Linting / cleaning
  * Add back moment tests
  * Really remove lodash dependency
  * Maintain ordering
  * Really get rid of lodash
  * Refactoring
  * _ is not global
  * Really get rid of lodash
  * Move formulas that needs moment in their own file
  * Remove dependency on moment
  * Linting
  * Linting
  * Remove unused lodash
  * Consistent module name for node and browser
  * Merge pull request #30 from hmalphettes/webpack
  * Remove unsued dev deps, add webpack
  * Also build the standalone browser bundles
  * browser build with webpack without lodash/moment
  * Fixed the version number for publishing
  * Removed some temp files
  * Remove unwanted files
  * Remove unused files
  * Add compatibility functions
  * A little bit more clean up
  * Removed unsed packages
  * Added the test cases
  * Add missing functions
  * Got all the test passing
  * Merge branch 'master' of github.com:sutoiku/formula.js
  * Initial merge is now complete
  * Update README.md
  * Add missing google spreadsheet functions
  * V0.0.31
  * Latest dependencies
  * VALIDBIN => ISBINARY
  * ARGSTOARRAY => ARGS2ARRAY
  * implementation stats with try catch
  * throw not implemented errors
  * bad idea
  * bin folder, mock generator
  * Bump version
  * pretty table for implementations
  * check inputs of text, add implemenation stats
  * Revert "rewire compatibility formulas"
  * parse imaginary numbers before
  * remove FLOOR.PRECISE implementation, it's equal to FLOOR.MATH
  * parseNumber(undefined) is not ok
  * rewire compatibility formulas
  * jStat 0.0.6 was released
  * fix conflict
  * cover input error cases
  * add compatibility functions
  * parse inputs of known types
  * get iso ceiling from math and trig
  * Merge branch 'master' of github.com:CrowdProcess/formula.js
  * input treatment in functions of math-trig
  * make parseDate return a new date instance
  * Merge pull request #1 from hmalphettes/master
  * not most
  * make coveralls
  * fix conflict
  * suppress make commands
  * remove generate tests script
  * correct way of git+https
  * remove build directory
  * correct way of git+https
  * travis-ci badge
  * use https github url
  * Merge branch 'master' of github.com:CrowdProcess/formula.js
  * lower thresholds
  * use master jStat
  * use approximately for imaginary number tests
  * use approximately for imaginary number tests
  * lower some thresholds, compare SUM of GROWTH
  * thresholds on date-time too
  * use approximately when comparing floating point numbers
  * Add the bessel* functions
  * add travis thing
  * bump, no engines
  * oops
  * finally 100% code coverage
  * Merge branch 'refactor' of github.com:CrowdProcess/formula.js into refactor
  * fix SUMPRODUCT case for uni dimensional arrays
  * add type function
  * add sheets function
  * add sheet function
  * add na function
  * add n function
  * add istext function
  * add isref function
  * add isodd function
  * add isnumber function
  * add isnontext function
  * add isna function
  * add islogical function
  * add isformula function
  * add iserror function
  * add isblank function
  * add info function
  * add cell function
  * add error.type function
  * Merge branch 'refactor' of github.com:CrowdProcess/formula.js into refactor
  * do not limit IRR and XIRR, 100% coverage of financial functions
  * add xor function
  * add true function
  * add or function
  * add not function
  * add ifna function
  * add iferror function
  * add if function
  * add false function
  * add and function
  * Merge branch 'refactor' of github.com:CrowdProcess/formula.js into refactor
  * remove ACCRINT, bad implementation
  * add oct2hex function
  * add oct2dec function
  * add oct2bin function
  * add imtan function
  * add imsum function
  * add imsub function
  * add imsqrt function
  * add imsinh function
  * add imsech function
  * add imsec function
  * add improduct function
  * add impower function
  * add imlog2
  * add imlog10 function
  * add imln function
  * add imexp function
  * add imdiv function
  * add imcot function
  * add imsin function
  * add imcosh function
  * add imcos function
  * add imconjugate function
  * add imargument function
  * add IMABS function
  * add imreal function
  * add imaginary function
  * add hex2oct function
  * add hex2dec function
  * add hex2bin function
  * add gestep function
  * add erfc.precise function
  * add erfc function
  * add erf.precise function
  * add erf function
  * add delta function
  * add dec2oct function
  * add dec2hex function
  * add dec2bin function
  * add convert function
  * add complex function
  * add bitxor function
  * add bitrshift function
  * add bitor function
  * add bitlshift function
  * add bitand function
  * add bin2oct function
  * add bin2hex function
  * add bin2dec function
  * add bessel functions
  * more coverage
  * cover TBILL formulas
  * test-watch
  * WIP on finantial, almost done
  * statistical 100% covered and passing
  * dots
  * test more
  * Merge branch 'refactor' of github.com:CrowdProcess/formula.js into refactor
  * expose parseDate in utils
  * Merge branch 'refactor' of github.com:CrowdProcess/formula.js into refactor
  * almost done with statistical functions
  * Merge branch 'master' of github.com:sutoiku/formula.js
  * Updated git repo url
  * add yearfrac function
  * add year function
  * add workday and workday.intl functions
  * add weeknum function
  * add weekday function
  * add today function
  * add timevalue function
  * add time function
  * add second function
  * add now function
  * add networkdays.intl function
  * add networkdays function
  * add month function
  * Typo
  * More generic DATE formula
  * Less moment, more native JS
  * typeof thing === 'undefined' is stupid
  * now it's really 100% covered
  * math and trig are 100% covered
  * Add a License and Copyrights file
  * Added information for BESSEL functions
  * Updated horner function for BESSEL functions
  * Implemented BESSEL* functions and updated related tests.
  * Merge branch 'refactor' of github.com:CrowdProcess/formula.js into refactor
  * lint separately
  * add minute function
  * add isoweeknum function
  * add hour function
  * add eomonth function
  * add edate function
  * add days360 function
  * add days function
  * add day function
  * add datevalue function
  * add compatibility aliases
  * covered some math-trig functions
  * add parseBool
  * V0.0.29
  * Minor changes
  * Improved linting
  * Inline regexp
  * Merge pull request #21 from CrowdProcess/flatten_ranges
  * add utils
  * update jStat
  * add date function
  * add default errors
  * some space
  * correct branch in codeship, mixed up coveralls and coverage makes
  * badges, reason for forking
  * add coveralls reporting
  * remove dependencies not needed anymore
  * remove expose.js
  * major refactoring starting
  * Merge branch 'master' of github.com:CrowdProcess/formula.js
  * Merge branch 'flatten_ranges'
  * flatten arguments for VARP and VARPA, fix it's implementations and add tests
  * Merge branch 'flatten_ranges' of github.com:CrowdProcess/formula.js into flatten_ranges
  * fix AVERAGE, AVERAGEA and VARA implementations, add more tests for them
  * add proper COUNTIFS implementation
  * flatten arguments for TRIMMEAN and add tests for it
  * flatten arguments of STDEVS, add tests for it
  * flatten arguments of STDEVP, add tests for it
  * flatten arguments of STDEVA and add tests for it
  * flatten arguments of MINA
  * flatten arguments of MIN
  * FLATTEN works just fine with arguments, no need to convert to array first
  * flatten arguments of MEDIAN
  * flatten arguments of MAX and MAXA
  * mark TODO on GAMMALNPRECISE, LOGEST
  * mark TODO on GAMMADIST and GAMMAINV
  * Merge branch 'flatten_ranges' of github.com:CrowdProcess/formula.js into flatten_ranges
  * flatten arguments of COUNTUNIQUE
  * use array in COUNTIFS
  * fix COUNTIF and flatten its range
  * flatten arguments of COUNTIF
  * flatten arguments of COUNTA
  * COUNT must only count numbers (http://office.microsoft.com/en-001/excel-help/count-HP005209026.aspx)
  * flatten arguments of COUNTBLANK, optimize access to range element
  * do not admit ''
  * COUNT must only count non empty cells, and admit multi-dimensional arrays
  * cannot make AVERAGEIFS work with multi dimensional arrays, comment that
  * less eval in AVERAGEIFS
  * flatten AVERAGEIF
  * V0.0.28
  * Minor changes
  * Fix FLOORPRECISE
  * test true and false in AVERAGEA
  * flatten arguments of AVERAGE and AVERAGEA, ignore non numbers in AVERAGE, add utility NUMBERS function that returns the numbers in an array
  * flatten arguments of AVERAGE
  * flatten arguments of AVEDEV
  * flatten the rest of SUM formulas
  * flatten arrays of SUMX2MY2
  * flatten SUMSQ
  * make SUMIFS work
  * Merge pull request #20 from CrowdProcess/flatten_ranges
  * flatten SUMIF range
  * Merge pull request #19 from CrowdProcess/flatten_values_in_IRR
  * better algorithm for SUM
  * Merge remote-tracking branch 'origin/flatten_values_in_IRR'
  * flatten values in IRR formula
  * merge upstream
  * PROPER : return undefined if input is
  * V0.0.27
  * Straightforward IF Formula
  * Linting
  * Consolidate Formula.IFERROR implementations
  * Merged several pull requests, added grunt support for creating a bundle
  * Merge POWER pull request
  * Add test cases for ISERR, ISERROR and IFERROR
  * Merge pull request #18 from CrowdProcess/error_handling
  * check for isNaN too
  * Merge remote-tracking branch 'origin/error_handling'
  * fix conflict
  * add error handling formulas
  * return #NUM! when POWER has a negative base and fractional exponent
  * Add more test cases for SUM
  * Merge pull request #16 from CrowdProcess/ADD
  * V0.0.26
  * Basic optimisation of NETWORKDAYSINTL
  * Simplified test
  * Merge branch 'master' of github.com:CrowdProcess/formula.js
  * Merge branch 'ADD'
  * make SUM support multi dimensional arrays
  * Standalone Formula
  * Add Grunt to make a bundle
  * Added support for FINV and associated test cases
  * Updated the changelog
  * Resolved most of the outstsdning issues and pull requests
  * Added some test cases for SUM
  * Debug for INTERVAL().
  * Add INTERVAL moment function.
  * Fixed major version for moment
  * Merge pull request #12 from danielchatfield/remove-ds-store
  * Add .DS_Store to gitignore
  * Delete .DS_Store
  * JOIN : swap array and separator arguments
  * Protocol-independent links to fonts.googleapis.com
  * add node 0.10.x, 0.0.21
  * Fix lodash injection
  * Bump version
  * Bump moment version
  * Re-package FormulaJS for use on UI side
  * Fixed LEN
  * Merge branch 'master' of https://github.com/sutoiku/formula.js
  * Fixed LEFT and RIGHT
  * Added the drone.io badge to the READMME.md markdown
  * Back to using the local mocha bin so we can run on drone
  * Back to using the local mocha bin so we can run on drone
  * Initialize future variable following Henri's comment
  * Added full match support to REGEXMATCH
  * Fixed version number
  * Removed CONCAT and INITIALS functions
  * Removed logs from CONCAT function
  * Fixed bug with CONCAT
  * Added CONCAT function for arrays
  * Added INITIALS function
  * Added SUBSTRING function
  * Made LEN() a bit more robust
  * Added support for FROMNOW
  * Added FROMNOW function
1.0.6
-----

* Updated some maths trig functions
* Merged [pull request 33](https://github.com/sutoiku/formula.js/pull/33)

1.0.5
-----

* Remove console.log statements.
* index.js was accidentally truncated by jima.

1.0.4
-----

* Added the missing 22 EXCEL functions and associated test cases.

1.0.3
-----

* Removed the dependency on moment and md5

0.0.32
------

* Added the following google spreadsheet functions ADD, DIVIDE, EQ, GTE, LT, LTE, MINUS, MULTIPLY, NE and POW
* Added associated test cases

0.0.26
------

* Add grunt support from João Jerónimo (joaojeronimo)
* POWER function with negative base now works from João Jerónimo (joaojeronimo)
* SUM supports multi-dimensional arrays from João Jerónimo (joaojeronimo)

0.0.25
------

* Integrate a really old but useful pull request to add database functions (https://github.com/sutoiku/formula.js/pull/9)
* Thanks a heap to Sam Dao (grasscrm) for all the database features
* Cleared all but 1 outstanding issue on github

0.0.19
------

* Added full match support to REGEXMATCH

0.0.18
------

* Removed CONCAT and INITIALS functions

0.0.17
------

* Added support for FROMNOW

0.0.16
------

* Added support for NUMERAL function

0.0.15
------

* Improved our bower support
* Upgraded some of our dependencies

0.0.14
------

* Added support for MD5 and some test cases

0.0.13
------

* Problem with computing weekdays with NETWORKDAYS #62319048
* Fixed issue wih DATEVALUE #62514386

0.0.12
------

* Added support for the SWITCH function (#60883740)

0.0.11
------

* Add some defensive coding around the LOWER function and add associated test cases

0.0.10
------

* Add pull request to fix DATEVALUE and add some test cases
* Add the begining support for bower package management
* Removed dependency on financial.js as this is now in the expression parser

0.0.9
-----

* Fixed issue with CONCATENATE function (#59947518)

0.0.8
-----

* Added HTML2TEXT and associated test cases
* Added HUMANIZE and associated test cases (#59192844)
* Added JSON2TEXT and associated test cases (#59604642)

0.0.7
-----

* Moved the lodash functions to expression parser
* Moved the callback registration functions to expression parser module

0.0.6
-----

* Fixed the way jStat uses formula's arguments
* Dates returned as string instead of JavaScript Date object

0.0.5
-----

* Replaced sugar with lodash


0.0.4
-----

* Placed a work around for some functions in lodash that do not work well with the expression parser
* Switched across from using underscore to lodash

0.0.3
-----

* Merged in the changes in stoic.io
* Added more test coverage (we're up to about 55%)
* Added support for the financial package (https://github.com/mfreilich/financial.js)
* Did some refactoring to better support running in browser and nodejs
* Upgraded to moment v2.0.0
* Added support for requirejs
* Added support for function
