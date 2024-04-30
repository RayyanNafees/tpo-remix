
# Contribution Guide

Please read through the article [Better Commit Messages](https://dev.to/codermarcos/what-is-a-good-message-and-size-for-a-commit-2edd)

## Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")

* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title

### Gitmojis

Consider starting the commit message with an applicable [gitmoji](https://gitmoji.dev):

* :art: `:art:` when improving the format/structure of the code (Refactoring)
* :racehorse: `:racehorse:` when improving performance (profiling)
* :memo: `:memo:` when writing docs
* :penguin: `:penguin:` when commiting Linux-specific changes
* :apple: `:apple:` when when commiting macOS-specific changes
* :checkered_flag: `:checkered_flag:` when commiting Windows-specific changes
* :bug: `:bug:` when fixing a bug
* :fire: `:fire:` when removing code or files
* :green_heart: `:green_heart:` when fixing the CI build
* :white_check_mark: `:white_check_mark:` when adding tests
* :lock: `:lock:` when dealing with security
* :arrow_up: `:arrow_up:` when upgrading dependencies
* :arrow_down: `:arrow_down:` when downgrading dependencies
* :shirt: `:shirt:` when alterning eslint rules

### Commit Labels

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. `fix:` a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning i.e, *Change the `version` from `0.0.0` to `0.0.1`*)
1. `feat:` a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning i.e, *Change the `version` from `0.0.0` to `0.1.0`*).
1. `BREAKING CHANGE:` a commit that has a footer `BREAKING CHANGE:`, or appends a ! after the type/scope (for eg, `feat(vite)!`), introduces a breaking API change (correlating with MAJOR in Semantic Versioning i.e, *Change the `version` from `0.0.0` to `1.0.0`*). A BREAKING CHANGE can be part of commits of any type.

1. types other than `fix:` and `feat:` are allowed, for example `build:`, `chore:`, `ci:` (for github actions changes), `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
1. footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to git trailer format.
Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(login): add user login auth`
