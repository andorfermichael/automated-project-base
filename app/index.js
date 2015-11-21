'use strict'

const generators = require('yeoman-generator')
const promptConfig = require('./prompts/config')

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments)
  },
  initializing() {
    this.destinationRoot('tmp')
  },
  prompting() {
    const done = this.async()
    this.prompt(promptConfig, function(userConfig) {
      this.userConfig = userConfig
      this.config.set(userConfig)
      done()
    }.bind(this))
  },
  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.userConfig
    )

    this.fs.copy(
      this.templatePath('_Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    )

    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    )
    this.fs.copy(
      this.templatePath('eslintrc'),
      this.destinationPath('.eslintrc')
    )
    this.fs.copy(
      this.templatePath('gitattributes'),
      this.destinationPath('.gitattributes')
    )
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    )
    this.fs.copy(
      this.templatePath('nvmrc'),
      this.destinationPath('.nvmrc')
    )
	this.fs.copy(
		this.templatePath('README.md'),
		this.destinationPath('README.md')
	)
	this.fs.copy(
		this.templatePath('LICENSE'),
		this.destinationPath('LICENSE')
	)
	this.fs.copy(
		this.templatePath('CONTRIBUTING.md'),
		this.destinationPath('CONTRIBUTING.md')
	)
	this.fs.copy(
		this.templatePath('docs/'),
		this.destinationPath('docs/')
	)
	this.fs.copy(
		this.templatePath('test/'),
		this.destinationPath('test/')
	)


    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('app/index.html'),
      this.userConfig
    )

    this.fs.copy(
      this.templatePath('assets/scripts/js/app.js'),
      this.destinationPath('app/assets/scripts/js/app.js')
    )

    this.fs.copy(
      this.templatePath('assets/styles/app.scss'),
      this.destinationPath('app/assets/styles/app.scss')
    )

    this.fs.copy(
      this.templatePath('assets/icons/*'),
      this.destinationPath('app/assets/icons/')
    )

    this.fs.copy(
      this.templatePath('assets/images/*'),
      this.destinationPath('app/assets/images/')
    )

	this.fs.copy(
		this.templatePath('assets/video/*'),
		this.destinationPath('app/assets/video/')
	)

	this.fs.copy(
		this.templatePath('assets/audio/*'),
		this.destinationPath('app/assets/audio/')
	)
  },
  install() {
    this.npmInstall()
  }
})
