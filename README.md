## Grunt Task
####plugin components
- linter js: **jshint, jscs, eslint**
- linter sass: **sass-lint**
- compile sass: **libsass**
- compile js: **babel**
- optimize css: **autoprefixer, uncss, grunt-criticalcss, grunt-revizor**
- production:
	- clean distribution: **grunt-contrib-clean**
  - cache new files: **grunt-hashres**
  - css: **grunt-contrib-cssmin**
  - js: **uglify**
  - html: **grunt-contrib-htmlmin, grunt-line-remover**
  - image: **imagemin**


####grunt start :white_check_mark:
- **Usuage**: On start deploy project locally.
- **Tasks**: install packages + linters + compiling code on development + start servers + start client.


####grunt linter :white_check_mark:
- **Usuage**: Check css, html, and js errors.
- **Tasks**: check styles, check misinterpretation compilers.


####grunt css :white_check_mark:
- **Usuage**: compile sass code.
- **Tasks**: linter sass code + compile sass code + optimize css.

####grunt js :white_check_mark:
- **Usuage**: compile javascript code.
- **Tasks**: linters js + compile ecma2015.

####grunt production :heavy_exclamation_mark:
- **Usuage**: distribution code for production environment.
- **CSS Tasks**: linter sass code + compile sass code + optimize css + uglify css.

####grunt shell:stopServer
- **Usuage**: stop development servers

##System requirements
- javascript Ecma2015 files : *.ec6.js
- deployment sources: /public
- distribution sources: /dist
