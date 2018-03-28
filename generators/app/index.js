'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(`Welcome to the super ${chalk.red('ionic-suc')} generator!`)
        );

        const prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                validate: name => {
                    if (!name) {
                        return 'Project name cannot be empty';
                    }
                    if (!/\w+/.test(name)) {
                        return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
                    }

                    var fs = require('fs');
                    if (!fs.existsSync(this.destinationPath(name))) {
                        return true;
                    }
                    if (require('fs').statSync(this.destinationPath(name)).isDirectory()) {
                        return 'Project already exist';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Your project id',
                validate: id => {
                    if (!id) {
                        return 'Project id cannot be empty';
                    }
                    return true;
                }
            }
        ];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
            this.log('app name', props.name);
            this.log('app id', props.id);
        });
    }

    configuring() {
        const path = require('path');
        const fs = require('fs');
        const done = this.async();
        fs.exists(this.destinationPath(this.props.name),
            exists => {
                if (exists
                    && fs.statSync(this.destinationPath(this.props.name)).isDirectory()) {

                    this.log.error('Directory [' + this.props.name + '] exists');
                    process.exit(1);

                }
                this.destinationRoot(path.join(this.destinationRoot(), this.props.name));
                done();
            });
    }

    writing() {

        this.fs.copy(this.templatePath('hooks'), this.destinationPath('hooks'));
        this.fs.copy(this.templatePath('platforms'), this.destinationPath('platforms'));
        this.fs.copy(this.templatePath('plugins'), this.destinationPath('plugins'));
        this.fs.copy(this.templatePath('resources'), this.destinationPath('resources'));
        this.fs.copy(this.templatePath('www/dll'), this.destinationPath('www/dll'));

        this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), this.props, {
            interpolate: /<%=([\s\S]+?)%>/g
        });

        // this.fs.copyTpl(this.templatePath('www/manifest.json'), this.destinationPath('www/manifest.json'), this.props);

        this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.props);
        this.fs.copyTpl(this.templatePath('_ionic.config.json'), this.destinationPath('ionic.config.json'), this.props);
        this.fs.copyTpl(this.templatePath('config.xml.tmpl'), this.destinationPath('config.xml'), this.props);

        this.fs.copy(this.templatePath('webpack.dll.config.js'), this.destinationPath('webpack.dll.config.js'));
        this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
        this.fs.copy(this.templatePath('webpack.prod.config.js'), this.destinationPath('webpack.prod.config.js'));
        this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'));

    }

    end() {
        this.log.ok(`Project ${this.props.name} generated!!!`);
    }
};
