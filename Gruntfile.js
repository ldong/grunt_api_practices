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

    grunt.registerTask('files', function(){
        var str = grunt.file.read('package.json');
        grunt.log.writeln(str);

        // json now is an JSON object
        var json = grunt.file.readJSON('package.json');
        console.log(json.devDependencies);

        var yaml = grunt.file.readYAML('data_example.yaml');
        console.log(yaml);

        grunt.file.write('fileName.txt', 'some text');
        grunt.file.copy('fileName.txt', 'other_copy.txt');
        grunt.file.delete('other_copy.txt');

        grunt.file.mkdir('newDir');
        grunt.file.recurse('src', function(file){
            grunt.log.ok(file);
        });

    });

    grunt.registerTask('options', function(){
        var target = grunt.option('target');
        grunt.log.writeln(target);
    });

    grunt.registerTask('util', function(){
        // what type of this object
        grunt.log.writeln(grunt.util.kindOf([1,2,3]));

        var norStr = grunt.util.normalizelf('This is a string\nOk?');
        grunt.log.writeln(norStr);
        var o = {
            name: 'Lin',
            obj: {
                val1: 1,
                val2: 2
            },
            arr: ['a', 'b', 'c']
        };

        grunt.util.recurse(o, function(val){
            grunt.log.writeln(val);
            // grunt.log.ok(val);
        });

        grunt.log.ok(grunt.util.repeat(3, 'Cool ') + 'Great!');

        var num = 10;
        grunt.log.ok(num+' '+grunt.util.pluralize(num, 'function/funtions'));

        throw grunt.util.error('error');
    });
};
