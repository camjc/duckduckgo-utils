describe('DDG.getFileExtension()', function() {


    var tests = [
        ['', ''],
        [null, null],
        ['http://duckduckgo.com/logo.png', 'png'],
        ['http://duckduckgo.com/logo.svg', 'svg'],
        ['http://duckduckgo.com/assets/logo@2x.png', 'png'],
        ['http://duckduckgo.com/assets/logo@2x.png?v=2', 'png?v=2']
    ];

    tests.forEach(function(test) {
        it('should return the expected file extension for the given path/filename', function() {
            expect(DDG.getFileExtension(test[0])).toEqual(test[1]);
        });
    });

});
