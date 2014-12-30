module.exports = function(grunt){

    grunt.initConfig({
        config: {
            name: 'Lin'
        },

        jshint: {
            options: {
                eqeqeq: true
            }
        }
    });


    grunt.registerTask('logs', function(){
        grunt.log.subhead('All the logs');

        grunt.log.write('no line break');
        grunt.log.writeln('Here is a linebreak');

        grunt.log.error('this is an error');
        grunt.log.errorlns('this is an error this is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an errorthis is an error');

        grunt.log.ok('everything is fine');
        grunt.log.oklns('everything is fine');
    });

    grunt.registerTask('config', function(){
        grunt.log.ok(grunt.config.get(['config', 'name']));
        grunt.log.writeln(grunt.config.get('jshint.options.eqeqeq'));
        grunt.config('jshint.options.undef', false);
        console.log(grunt.config.get(['jshint', 'options']));
    });

    grunt.registerTask('errors', function(){
        grunt.log.writeln('First line');
        grunt.log.ok('this is ok');
        grunt.fail.warn('second line with warning');
        grunt.log.ok('second to last line');
        grunt.fail.fatal('this is error');
        grunt.log.ok('last line');
    });

};
