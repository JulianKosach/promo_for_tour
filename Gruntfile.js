

module.exports = function(grunt) {

    var adaptive = true;

    var src_url = 'http://localhost/promo_for_tour/src/';


    var d = new Date();
    var time = d.getTime();



    var dist_valid_array = ['dist/index.html'];

    var src_valid_array = ['src/index.html'];


    var async_init = '</style><script>!function(e,t,n){function r(){for(;u[0]&&"loaded"==u[0][l];)o=u.shift(),o[f]=!a.parentNode.insertBefore(o,a)}for(var i,s,o,u=[],a=e.scripts[0],f="onreadystatechange",l="readyState";i=n.shift();)s=e.createElement(t),"async"in a?(s.async=!1,e.head.appendChild(s)):a[l]?(u.push(s),s[f]=r):e.write("<"+t+\' src="\'+i+\'" defer></\'+t+">"),s.src=i}(document,"script",["js/init.js"]);</script>';

    grunt.option("force", true);


    grunt.initConfig({




        htmlcomb: {
            desktop: {
                options: {
                    removeEmptyValue: false
                },
                files: {
                    'src/index.html': ['src/index.html']
                }
            }
        },


        prettify: {
            options: {
                "indent": 4,
                "indent_char": " ",
                "indent_scripts": "normal",
                "wrap_line_length": 0,
                "brace_style": "collapse",
                "preserve_newlines": true,
                "max_preserve_newlines": 1,
                "unformatted": [
                    "code",
                    "pre",
                    "br"
                ]
            },
            desktop: {
                files: {
                    'src/index.html': ['src/index.html']
                }
            }
        },


        validation: {
            dist: {
                options: {
                    relaxerror: ['(XML processing instructions are not supported in HTML.)'],
                },
                files: {
                    src: dist_valid_array
                }
            },
            src: {
                options: {
                    relaxerror: ['(XML processing instructions are not supported in HTML.)'],
                },
                files: {
                    src: src_valid_array
                }
            }
        },




        htmlmin: {
            desktop: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                    removeAttributeQuotes: false
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },


        clean: {
            options: {
                force: true
            },

            desktop: ['dist/css/full.css', 'dist/css/bp', 'dist/css/ap', 'dist/js/bp'],
            full_dist: ['dist/']
        },


        'string-replace': {
            desktop_rebase: {
                files: {
                    './': ['dist/js/init.min.js', 'dist/index.*']
                },
                options: {
                    replacements: [{
                        pattern: /main.js/ig,
                        replacement: 'main.min.js'
                    }, {
                        pattern: /libs.js/ig,
                        replacement: 'libs.min.js'
                    }, {
                        pattern: /init.js/ig,
                        replacement: 'init.min.js'
                    }, {
                        pattern: /map.js/ig,
                        replacement: 'map.min.js'
                    }, {
                        pattern: /full.css/ig,
                        replacement: 'full.min.css'
                    }, {
                        pattern: /head.css/ig,
                        replacement: 'head.min.css'
                    }, {
                        pattern: /..\/mobile/ig,
                        replacement: 'mobile'
                    }, {
                        pattern: /..\/tablet/ig,
                        replacement: 'tablet'
                    }, {
                        pattern: /..\/track/ig,
                        replacement: 'track'
                    },{
                        pattern:'../../../composer/template/',
                        replacement: 'template/'
                        }]
                }
            },
            desktop_beforebase: {
                files: {
                    './': 'dist/css/head.min.css'
                },
                options: {
                    replacements: [{
                        pattern: /\/img/ig,
                        replacement: '../img'
                    }]
                }
            },
            desktop_afterbase: {
                files: {
                    './': ['dist/css/head.min.css']
                },
                options: {
                    replacements: [{
                        pattern: /..\/img/ig,
                        replacement: 'img'
                    }]
                }
            },
            desktop_remove_img_from_head: {
                files: {
                    './': 'dist/css/bp/critical.css'
                },
                options: {
                    replacements: [{
                        pattern: /(?:background-image)[ ]*:[ ]*[^;]+/ig,
                        replacement: ' '
                    }, {
                        pattern: /(?:url)\([^*]*\)+/ig,
                        replacement: ' '
                    }]
                }
            },
            desktop_for_lazyload: {
                files: {
                    './': ['dist/index.php', 'dist/js/main.min.js']
                },
                options: {
                    replacements: [{
                        pattern: /src="img\//ig,
                        replacement: 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" data-original="img/'
                    }, {
                        pattern: /src=img\//ig,
                        replacement: 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" data-original=img/'
                    }, {
                        pattern: /src='img\//ig,
                        replacement: "src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=' data-original='img/"
                    }, {
                        pattern: '$(document).ready(',
                        replacement: '$("img").each(function(){var a=$(this).attr("data-original");"undefined"!=typeof a&&a!==!1&&$(this).attr("src",$(this).data("original"))}),$(document).ready('
                    }]
                }
            },
            desktop_async_css: {
                files: {
                    './': ['dist/js/bp/init.js']
                },
                options: {
                    replacements: [{
                        pattern: '//loadCSS',
                        replacement: 'loadCSS'
                    }]
                }
            },
            desktop_init_js_composer:{

                files: {
                    './': ['dist/js/bp/init.js']
                },
                options: {
                    replacements: [{
                        pattern: '"js/composer.js"',
                        replacement: '"js/full.min.js","js/main.min.js"'
                    }]
                }

            },
            desktop_async_init: {
                files: {
                    './': ['dist/index.php']
                },
                options: {
                    replacements: [{
                        pattern: '</style>',
                        replacement: async_init
                    }]
                }
            },
            desktop_remove_link_css: {
                files: {
                    './': ['dist/index.php']
                },
                options: {
                    replacements: [{
                        pattern: /<link[^>]*css[^>]*>/ig,
                        replacement: ' '
                    }]
                }
            },
            desktop_remove_sync_init: {
                files: {
                    './': ['dist/index.php']
                },
                options: {
                    replacements: [{
                        pattern: /<script[^>]*(?:webfont.js|init.js)[^>]*>[^>]*\/script>/ig,
                        replacement: ' '
                    },
                    {
                        pattern: "<script>var composer_config = <?php include('config.json'); ?></script>",
                        replacement:' '
                    }
                    ]
                }
            },
            tablet_rebase: {
                files: {
                    './': ['dist/tablet/js/init.min.js', 'dist/tablet/index.*', 'dist/tablet/ajax/map.html']
                },
                options: {
                    replacements: [{
                        pattern: /main.js/ig,
                        replacement: 'main.min.js'
                    }, {
                        pattern: /libs.js/ig,
                        replacement: 'libs.min.js'
                    }, {
                        pattern: /init.js/ig,
                        replacement: 'init.min.js'
                    }, {
                        pattern: /map.js/ig,
                        replacement: 'map.min.js'
                    }, {
                        pattern: /full.css/ig,
                        replacement: 'full.min.css'
                    }, {
                        pattern: /head.css/ig,
                        replacement: 'head.min.css'
                    }, {
                        pattern: /..\/desktop/ig,
                        replacement: '../'
                    }]
                }
            },
            tablet_beforebase: {
                files: {
                    './': 'dist/tablet/css/head.min.css'
                },
                options: {
                    replacements: [{
                        pattern: /\/img/ig,
                        replacement: '../img'
                    }]
                }
            },
            tablet_afterbase: {
                files: {
                    './': ['dist/tablet/css/head.min.css']
                },
                options: {
                    replacements: [{
                        pattern: /..\/img/ig,
                        replacement: 'img'
                    }]
                }
            },
            tablet_remove_img_from_head: {
                files: {
                    './': 'src/tablet/css/bp/critical.css'
                },
                options: {
                    replacements: [{
                        pattern: /(?:background-image)[ ]*:[ ]*[^;]+/ig,
                        replacement: ' '
                    }, {
                        pattern: /(?:url)\([^*]*\)+/ig,
                        replacement: ' '
                    }]
                }
            },
            tablet_for_lazyload: {
                files: {
                    './': ['dist/tablet/index.php', 'dist/tablet/js/main.min.js']
                },
                options: {
                    replacements: [{
                        pattern: /src="img\//ig,
                        replacement: 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" data-original="img/'
                    }, {
                        pattern: /src=img\//ig,
                        replacement: 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" data-original=img/'
                    }, {
                        pattern: /src='img\//ig,
                        replacement: "src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=' data-original='img/"
                    }, {
                        pattern: '$(document).ready(',
                        replacement: '$("img").each(function(){var a=$(this).attr("data-original");"undefined"!=typeof a&&a!==!1&&$(this).attr("src",$(this).data("original"))}),$(document).ready('
                    }]
                }
            },
            tablet_async_css: {
                files: {
                    './': ['src/tablet/js/bp/init.js']
                },
                options: {
                    replacements: [{
                        pattern: '//loadCSS',
                        replacement: 'loadCSS'
                    }]
                }
            },
            tablet_async_init: {
                files: {
                    './': ['dist/tablet/index.php']
                },
                options: {
                    replacements: [{
                        pattern: '</style>',
                        replacement: async_init
                    }]
                }
            },
            tablet_remove_link_css: {
                files: {
                    './': ['dist/tablet/index.php']
                },
                options: {
                    replacements: [{
                        pattern: /<link[^>]*css[^>]*>/ig,
                        replacement: ' '
                    }]
                }
            },
            tablet_remove_sync_init: {
                files: {
                    './': ['dist/tablet/index.php']
                },
                options: {
                    replacements: [{
                        pattern: /<script[^>]*(?:webfont.js|init.js)[^>]*>[^>]*\/script>/ig,
                        replacement: ' '
                    }]
                }
            },
            mobile_rebase: {
                files: {
                    './': ['dist/mobile/js/init.min.js', 'dist/mobile/index.*', 'dist/mobile/ajax/map.html']
                },
                options: {
                    replacements: [{
                        pattern: /main.js/ig,
                        replacement: 'main.min.js'
                    }, {
                        pattern: /libs.js/ig,
                        replacement: 'libs.min.js'
                    }, {
                        pattern: /init.js/ig,
                        replacement: 'init.min.js'
                    }, {
                        pattern: /map.js/ig,
                        replacement: 'map.min.js'
                    }, {
                        pattern: /full.css/ig,
                        replacement: 'full.min.css'
                    }, {
                        pattern: /head.css/ig,
                        replacement: 'head.min.css'
                    }, {
                        pattern: /..\/desktop/ig,
                        replacement: '../'
                    }]
                }
            },
            mobile_beforebase: {
                files: {
                    './': 'dist/mobile/css/head.min.css'
                },
                options: {
                    replacements: [{
                        pattern: /\/img/ig,
                        replacement: '../img'
                    }]
                }
            },
            mobile_afterbase: {
                files: {
                    './': ['dist/mobile/css/head.min.css']
                },
                options: {
                    replacements: [{
                        pattern: /..\/img/ig,
                        replacement: 'img'
                    }]
                }
            },
            mobile_remove_img_from_head: {
                files: {
                    './': 'src/mobile/css/bp/critical.css'
                },
                options: {
                    replacements: [{
                        pattern: /(?:background-image)[ ]*:[ ]*[^;]+/ig,
                        replacement: ' '
                    }, {
                        pattern: /(?:url)\([^*]*\)+/ig,
                        replacement: ' '
                    }]
                }
            },
            mobile_for_lazyload: {
                files: {
                    './': ['dist/mobile/index.php', 'dist/mobile/js/main.min.js']
                },
                options: {
                    replacements: [{
                        pattern: /src="img\//ig,
                        replacement: 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" data-original="img/'
                    }, {
                        pattern: /src=img\//ig,
                        replacement: 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" data-original=img/'
                    }, {
                        pattern: /src='img\//ig,
                        replacement: "src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=' data-original='img/"
                    }, {
                        pattern: '$(document).ready(',
                        replacement: '$("img").each(function(){var a=$(this).attr("data-original");"undefined"!=typeof a&&a!==!1&&$(this).attr("src",$(this).data("original"))}),$(document).ready('
                    }]
                }
            },
            mobile_async_css: {
                files: {
                    './': ['src/mobile/js/bp/init.js']
                },
                options: {
                    replacements: [{
                        pattern: '//loadCSS',
                        replacement: 'loadCSS'
                    }]
                }
            },
            mobile_async_init: {
                files: {
                    './': ['dist/mobile/index.php']
                },
                options: {
                    replacements: [{
                        pattern: '</style>',
                        replacement: async_init
                    }]
                }
            },
            mobile_remove_link_css: {
                files: {
                    './': ['dist/mobile/index.php']
                },
                options: {
                    replacements: [{
                        pattern: /<link[^>]*css[^>]*>/ig,
                        replacement: ' '
                    }]
                }
            },
            mobile_remove_sync_init: {
                files: {
                    './': ['dist/mobile/index.php']
                },
                options: {
                    replacements: [{
                        pattern: /<script[^>]*(?:webfont.js|init.js)[^>]*>[^>]*\/script>/ig,
                        replacement: ' '
                    }]
                }
            },
            start_rev: {
                files: {
                    './': ['src/desktop/manifest.appcache']
                },
                options: {
                    replacements: [{
                        pattern: /# GEN_ID = \d\d\d\d\d\d\d\d\d\d/ig,
                        replacement: '# GEN_ID = '+time.toString().slice(-10)
                    }]
                }
            },
            revision: {
                files: {
                    './': ['dist/index.php', 'dist/js/init.min.js']
                },
                options: {
                    replacements: [{
                        pattern: /init\.min\.js/ig,
                        replacement: 'init.min.js?' + time
                    },{
                        pattern: /full\.min\.js/ig,
                        replacement: 'full.min.js?' + time
                    },{
                        pattern: /main\.min\.js/ig,
                        replacement: 'main.min.js?' + time
                    }, {
                        pattern: /full\.min\.css/ig,
                        replacement: 'full.min.css?' + time
                    }]
                }
            },



            
            change_livereload_port_grunt:{
                files: {
                    './': ['Gruntfile.js']
                },
                options: {
                    replacements: [{
                        pattern: /port: \d\d\d\d\,\/\/LIVERELOAD_PORT/ig,
                        replacement: 'port: '+ time.toString().slice(-4) +',//LIVERELOAD_PORT' 
                    }]
                }
                
            },
            change_livereload_port_index:{
                files: {
                    './': ['src/index.html']
                },
                options: {
                    replacements: [{
                        pattern: /localhost:\d\d\d\d\/livereload.js/ig,
                        replacement: 'localhost:'+ time.toString().slice(-4) +'/livereload.js' 
                    }]
                }
                
            },
            add_cooment_livereload:{
                files: {
                    './': ['src/index.html']
                },
                options: {
                    replacements: [{
                        pattern: /<script src="http:\/\/localhost:\d\d\d\d\/livereload\.js"><\/script>/ig,
                        replacement: '<!-- <script src="http://localhost:0000/livereload.js"></script> -->' 
                    }]
                }
                
            },
            remove_comment_livereload:{
                files: {
                    './': ['src/index.html']
                },
                options: {
                    replacements: [{
                        pattern: /<!-- <script src="http:\/\/localhost:\d\d\d\d\/livereload\.js"><\/script> -->/ig,
                        replacement: '<script src="http://localhost:0000/livereload.js"></script>' 
                    }]
                }
                
            },
            remove_comment_manifest: {
                files: {
                    './': ['dist/manifest.appcache']
                },
                options: {
                    replacements: [{
                        pattern: /# dist /ig,
                        replacement: ''
                    }]
                }
            }
        },


        dataUri: {
            desktop: {
                src: ['dist/css/full.min.css', 'dist/css/head.min.css'],
                dest: 'dist/css/',
                options: {
                    target: ['dist/img/*.*'],
                    fixDirLevel: true,
                    maxBytes: 2048

                }
            },
            tablet: {
                src: ['dist/tablet/css/full.min.css', 'dist/tablet/css/head.min.css'],
                dest: 'dist/tablet/css/',
                options: {
                    target: ['dist/tablet/img/*.*'],
                    fixDirLevel: true,
                    maxBytes: 2048

                }
            },
            mobile: {
                src: ['dist/mobile/css/full.min.css', 'dist/mobile/css/head.min.css'],
                dest: 'dist/mobile/css/',
                options: {
                    target: ['dist/mobile/img/*.*'],
                    fixDirLevel: true,
                    maxBytes: 2048

                }
            }
        },


        concat: {
            desktop_libs_js: {
                src: 'src/js/libs/*.js',
                dest: 'src/js/libs.js'
            },
            desktop_full_css: {
                src: ['src/desktop/css/libs.css', 'src/desktop/css/style.css'],
                dest: 'dist/css/full.css'
            },
            desktop_head_css: {
                src: ['src/desktop/css/head.css', 'dist/css/bp/critical.css'],
                dest: 'dist/css/bp/head.css'
            },
            tablet_libs_js: {
                src: 'src/tablet/js/libs/*.min.js',
                dest: 'src/tablet/js/libs.js'
            },
            tablet_libs_css: {
                src: 'src/tablet/css/libs/*.css',
                dest: 'src/tablet/css/libs.css'
            },
            tablet_full_css: {
                src: ['src/tablet/css/libs.css', 'src/tablet/css/style.css', 'src/tablet/css/media.css', 'src/tablet/css/scripts.css'],
                dest: 'src/tablet/css/full.css'
            },
            tablet_head_css: {
                src: ['src/tablet/css/head.css', 'src/tablet/css/bp/critical.css'],
                dest: 'src/tablet/css/bp/head.css'
            },
            mobile_libs_js: {
                src: 'src/mobile/js/libs/*.min.js',
                dest: 'src/mobile/js/libs.js'
            },
            mobile_libs_css: {
                src: 'src/mobile/css/libs/*.css',
                dest: 'src/mobile/css/libs.css'
            },
            mobile_full_css: {
                src: ['src/mobile/css/libs.css', 'src/mobile/css/style.css', 'src/mobile/css/media.css', 'src/mobile/css/scripts.css'],
                dest: 'src/mobile/css/full.css'
            },
            mobile_head_css: {
                src: ['src/mobile/css/head.css', 'src/mobile/css/bp/critical.css'],
                dest: 'src/mobile/css/bp/head.css'
            },
            allcritical: {
                src: ['src/desktop/css/bp/critical.css', 'src/desktop/css/bp/critical_t.css', 'src/desktop/css/bp/critical_m.css'],
                dest: 'src/desktop/css/bp/critical.css'
            }
        },


        cssmin: {
            desktop: {
                files: [{
                    src: 'dist/css/ap/head.css',
                    dest: 'dist/css/head.min.css'
                }, {
                    src: 'dist/css/ap/full.css',
                    dest: 'dist/css/full.min.css'
                }]
            },
            tablet: {
                files: [{
                    src: 'src/tablet/css/ap/head.css',
                    dest: 'dist/tablet/css/head.min.css'
                }, {
                    src: 'src/tablet/css/ap/full.css',
                    dest: 'dist/tablet/css/full.min.css'
                }]
            },
            mobile: {
                files: [{
                    src: 'src/mobile/css/ap/head.css',
                    dest: 'dist/mobile/css/head.min.css'
                }, {
                    src: 'src/mobile/css/ap/full.css',
                    dest: 'dist/mobile/css/full.min.css'
                }]
            }
        },


        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            desktop_src: {
                files: [{
                    'dist/js/init.min.js': 'dist/js/bp/init.js'
                }, {
                    'dist/js/main.min.js': 'src/desktop/js/main.js'
                }, {
                    'dist/js/full.min.js': 'dist/js/bp/full.js'
                }]
            },
            desktop_libs: {
                files: [{
                    expand: true,
                    cwd: 'src/desktop/js/libs/',
                    src: '**/*.js',
                    dest: 'src/desktop/js/libs/'
                }]
            },
            tablet_src: {
                files: [{
                    'dist/tablet/js/init.min.js': 'src/tablet/js/bp/init.js'
                }, {
                    'dist/tablet/js/main.min.js': 'src/tablet/js/main.js'
                }, {
                    'dist/tablet/js/map.min.js': 'src/tablet/js/map.js'
                }]
            },
            tablet_libs: {
                files: [{
                    expand: true,
                    cwd: 'src/tablet/js/libs/',
                    src: '**/*.js',
                    dest: 'src/tablet/js/libs/'
                }]
            },
            mobile_src: {
                files: [{
                    'dist/mobile/js/init.min.js': 'src/mobile/js/bp/init.js'
                }, {
                    'dist/mobile/js/main.min.js': 'src/mobile/js/main.js'
                }, {
                    'dist/mobile/js/map.min.js': 'src/mobile/js/map.js'
                }]
            },
            mobile_libs: {
                files: [{
                    expand: true,
                    cwd: 'src/mobile/js/libs/',
                    src: '**/*.js',
                    dest: 'src/mobile/js/libs/'
                }]
            }
        },


        sass: {
            desktop: {
                options: {
                    sourceMap: true
                },
                files: {
                    'src/css/style.css': 'src/css/sass/style.scss'
                }
            }
        },


        imagemin: {
            desktop: {
                files: [{
                    expand: true,
                    cwd: 'src/desktop/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            },
            tablet: {
                files: [{
                    expand: true,
                    cwd: 'src/tablet/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/tablet/img/'
                }]
            },
            mobile: {
                files: [{
                    expand: true,
                    cwd: 'src/mobile/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/mobile/img/'
                }]
            }
        },


        autoprefixer: {
            options: {
                browsers: ['ie >= 8', 'last 10 versions', '> 0.1%', 'ff >= 20', 'Android > 1']
            },
            desktop: {
                files: [{
                    'dist/css/ap/full.css': 'dist/css/full.css'
                }, {
                    'dist/css/ap/head.css': 'dist/css/bp/head.css'
                }]
            }
        },
        prettysass: {
            options: {
                indent: 4
            },
            desktop: {
                src: ['src/css/sass/*.scss']
            },
        },
        
        insert:{

             head_css: {
                src: "dist/css/head.min.css",
                dest: "dist/index.php",
                match: "/*head.min.css*/"
            },
        },
        
        watch: {
            desktop_sass: {
                //options: { livereload: true },
                files: ['src/css/sass/*.scss'],
                tasks: ['sass:desktop']
            },

            livereload: {
                options: {
                    spawn: true,
                    livereload: {
                        host: 'localhost',
                        port: 7380,//LIVERELOAD_PORT
                        //key: grunt.file.read('livereload.key'),
                        //cert: grunt.file.read('livereload.crt')
                        // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
                    }
                },
                files: ['src/**/*.html', 'src/**/*.js', 'src/**/*.css'],
                tasks: []

            },
            
            
            desktop_concat_libs_js: {
                //options: { livereload: true },
                files: ['src/js/libs/*.js'],
                tasks: ['concat:desktop_libs_js'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-ftpush');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-data-uri');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-w3c-html-validation');
    grunt.loadNpmTasks('grunt-inline-imgsize');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-htmlcomb');
    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-prettysass');
    grunt.loadNpmTasks('grunt-insert');




	grunt.registerTask('reset_lr',[
        'string-replace:add_cooment_livereload',
        'string-replace:remove_comment_livereload',
        'string-replace:change_livereload_port_grunt',
        'string-replace:change_livereload_port_index'
    ]);

    grunt.registerTask('default', ['watch']);


};