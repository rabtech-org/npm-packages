import boxen from 'boxen';
import { gray, green, red, underline, yellow } from 'chalk';
import fs from 'fs';
import Fuse from 'fuse.js';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import wrap from 'word-wrap';

const filter = array => array.filter(x => x);

const headerLength = answers =>
    answers.type.name.length +
    answers.type.emoji.length +
    3 +
    (answers.scope ? answers.scope.length + 2 : 0);

const maxSummaryLength = (options, answers) => options.maxHeaderWidth - headerLength(answers);

const filterSubject = _subject => {
    let subject = _subject.trim();
    if (subject.charAt(0).toLowerCase() !== subject.charAt(0)) {
        subject = subject.charAt(0).toLowerCase() + subject.slice(1, subject.length);
    }
    while (subject.endsWith('.')) {
        subject = subject.slice(0, subject.length - 1);
    }

    return subject;
};

const mapEmojiChoices = ({ types }) =>
    types.map(({ name, emoji, description, code }) => ({
        name: `${name}  -  ${emoji}  ${description}`,
        value: {
            emoji,
            name,
        },
        code,
    }));

export default options => {
    const choices = mapEmojiChoices(options);
    const scopes = [
        ...{ name: '[skip]', value: '' },
        ...{ name: '[all packages]', value: 'root' },
        ...fs.readdirSync('./packages' || '.').map(name => ({ name })),
    ];

    const fuzzyOptions = {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
    };
    const fuzzyType = new Fuse(choices, {
        ...fuzzyOptions,
        keys: ['name', 'code'],
    });
    const fuzzyScope = new Fuse(scopes, {
        ...fuzzyOptions,
        keys: ['name'],
    });

    return {
        async prompter(cz, commit) {
            cz.prompt.registerPrompt('autocomplete', inquirerAutocompletePrompt);
            const questions = [
                {
                    type: 'autocomplete',
                    name: 'type',
                    message: `${yellow(
                        '<type>',
                    )} Select the type of change that you're committing:`,
                    source: (_, query) =>
                        Promise.resolve(
                            query ? fuzzyType.search(query).map(({ item }) => item) : choices,
                        ),
                },
                {
                    type: 'autocomplete',
                    name: 'scope',
                    message: `${yellow('<scope>')} The name of the package affected`,
                    source: (_, query) =>
                        Promise.resolve(
                            query ? fuzzyScope.search(query).map(({ item }) => item) : scopes,
                        ),
                    filter(value) {
                        return value.trim().toLowerCase();
                    },
                },
                {
                    type: 'input',
                    name: 'subject',
                    message(answers) {
                        return `${yellow(
                            '<subject>',
                        )} Write a short, imperative tense description of the change ${gray(
                            '(max',
                        )} ${maxSummaryLength(options, answers)} ${gray('chars):')}\n`;
                    },
                    validate(subject, answers) {
                        const filteredSubject = filterSubject(subject);
                        return filteredSubject.length === 0
                            ? 'subject is required'
                            : filteredSubject.length <= maxSummaryLength(options, answers)
                            ? true
                            : `Subject length must be less than or equal to ${maxSummaryLength(
                                  options,
                                  answers,
                              )} characters. Current length is ${
                                  filteredSubject.length
                              } characters.`;
                    },
                    transformer(subject, answers) {
                        const filteredSubject = filterSubject(subject);
                        const color =
                            filteredSubject.length <= maxSummaryLength(options, answers)
                                ? green
                                : red;
                        return color(`(${filteredSubject.length}) ${subject}`);
                    },
                    filter(subject) {
                        return filterSubject(subject);
                    },
                },
                {
                    type: 'input',
                    name: 'body',
                    message: `${yellow(
                        '<body>',
                    )} Provide a longer description of the change: ${gray(
                        'press enter to skip',
                    )}\n`,
                },
                {
                    type: 'confirm',
                    name: 'isBreaking',
                    message: 'Are there any breaking changes?',
                    default: false,
                },
                {
                    type: 'input',
                    name: 'breakingBody',
                    default: '-',
                    message:
                        'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:\n',
                    when(answers) {
                        return answers.isBreaking && !answers.body;
                    },
                    validate(breakingBody) {
                        return (
                            breakingBody.trim().length > 0 || 'Body is required for BREAKING CHANGE'
                        );
                    },
                },
                {
                    type: 'input',
                    name: 'breaking',
                    message: 'Describe the breaking changes:\n',
                    when(answers) {
                        return answers.isBreaking;
                    },
                },

                {
                    type: 'confirm',
                    name: 'isIssueAffected',
                    message: 'Does this change affect any open issues?',
                    default: false,
                },
                {
                    type: 'input',
                    name: 'issues',
                    message: `Add issue references: ${gray(
                        '(e.g. "#Closes JRF-2", "#Closes JRF-3".)"',
                    )}\n`,
                    when(answers) {
                        return answers.isIssueAffected;
                    },
                },
            ];
            const answers = await cz.prompt(questions);

            const wrapOptions = {
                trim: true,
                cut: false,
                newline: '\n',
                indent: '',
                width: options.maxLineWidth,
            };

            const scope = answers.scope ? `(${answers.scope})` : '';

            const head = `${answers.type.emoji} ${answers.type.name + scope}: ${answers.subject}`;

            const body = answers.body ? wrap(answers.body, wrapOptions) : false;

            let breaking = answers.breaking ? answers.breaking.trim() : '';
            breaking = breaking
                ? `BREAKING CHANGE: ${breaking.replace(/^BREAKING CHANGE: /, '')}`
                : '';
            breaking = breaking ? wrap(breaking, wrapOptions) : false;

            const issues = answers.issues ? wrap(answers.issues, wrapOptions) : false;

            const fullCommit = filter([head, body, breaking, issues]).join('\n\n');

            /* eslint-disable */
            console.log();
            console.log(underline('Commit preview:'));
            console.log(boxen(green(fullCommit), { padding: 1, margin: 1 }));
            /* eslint-enable */
            const { doCommit } = await cz.prompt([
                {
                    type: 'confirm',
                    name: 'doCommit',
                    message: 'Are you sure that you want to commit?',
                },
            ]);

            if (doCommit) {
                commit(fullCommit);
            }
        },
    };
};
