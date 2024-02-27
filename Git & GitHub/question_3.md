### .gitignore

* A **.gitignore** file is a special text file placed in your project's root directory. It serves the crucial purpose of specifying files and folders that Git should intentionally ignore. This means these excluded items won't be tracked by Git, and any changes made to them won't be included in your commits or pushed to the repository.

#### Importance

* Prevents clutter and unnecessary commits: Many projects contain files that shouldn't be part of the actual codebase, such as: operating system specific files, compliled files, sensitive information.

* Protects sensitive information: As mentioned, a .gitignore file can help prevent accidental inclusion of sensitive information like passwords or API keys in your commits. This safeguards your security and privacy, especially when working with code in public repositories.
