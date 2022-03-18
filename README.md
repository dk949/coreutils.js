# coreutils.js

This is a collection of JS scripts meant to mimic the functionality of [Unix
command line utilities](https://en.wikipedia.org/wiki/List_of_Unix_commands).

## Requirements

* [node](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/)

## Plan

A program can be either:

* :ballot_box_with_check: - implemented
* :hammer: - currently worked on
* :calendar: - Will be done in the future
* :no_entry: - Will not be done in the future

| Implementation status   | Program    | Category              | Option code    | Description                                                                |
|-------------------------|------------|-----------------------|----------------|----------------------------------------------------------------------------|
| :ballot_box_with_check: | cat        | Filesystem            | Mandatory      | Concatenate and print files                                                |
| :ballot_box_with_check: | rm         | Filesystem            | Mandatory      | Remove directory entries                                                   |
| :ballot_box_with_check: | echo       | Shell programming     | Mandatory      | Write arguments to standard output                                         |
| :ballot_box_with_check: | false      | Shell programming     | Mandatory      | Return false value                                                         |
| :ballot_box_with_check: | true       | Shell programming     | Mandatory      | Return true value                                                          |
| :hammer:                | mkdir      | Filesystem            | Mandatory      | Make directories                                                           |
| :hammer:                | mv         | Filesystem            | Mandatory      | Move or rename files                                                       |
| :calendar:              | comm       | Text processing       | Mandatory      | Select or reject lines common to two files                                 |
| :calendar:              | csplit     | Text processing       | Mandatory      | Split files based on context                                               |
| :calendar:              | cut        | Text processing       | Mandatory      | Cut out selected fields of each line of a file                             |
| :calendar:              | diff       | Text processing       | Mandatory      | Compare two files; see also cmp                                            |
| :calendar:              | expand     | Text processing       | Mandatory      | Convert tabs to spaces                                                     |
| :calendar:              | fold       | Text processing       | Mandatory      | Filter for folding lines                                                   |
| :calendar:              | head       | Text processing       | Mandatory      | Copy the first part of files                                               |
| :calendar:              | join       | Text processing       | Mandatory      | Merges two sorted text files based on the presence of a common field       |
| :calendar:              | paste      | Text processing       | Mandatory      | Merge corresponding or subsequent lines of files                           |
| :calendar:              | patch      | Text processing       | Mandatory      | Apply changes to files                                                     |
| :calendar:              | sort       | Text processing       | Mandatory      | Sort, merge, or sequence check text files                                  |
| :calendar:              | tail       | Text processing       | Mandatory      | Copy the last part of a file                                               |
| :calendar:              | tr         | Text processing       | Mandatory      | Translate characters                                                       |
| :calendar:              | unexpand   | Text processing       | Mandatory      | Convert spaces to tabs                                                     |
| :calendar:              | uniq       | Text processing       | Mandatory      | Report or filter out repeated lines in a file                              |
| :calendar:              | wc         | Text processing       | Mandatory      | Line, word and byte or character count                                     |
| :calendar:              | who        | System administration | Mandatory      | Display who is on the system                                               |
| :calendar:              | printf     | Shell programming     | Mandatory      | Write formatted output                                                     |
| :calendar:              | read       | Shell programming     | Mandatory      | Read a line from standard input                                            |
| :calendar:              | sleep      | Shell programming     | Mandatory      | Suspend execution for an interval                                          |
| :calendar:              | tee        | Shell programming     | Mandatory      | Duplicate the standard output                                              |
| :calendar:              | xargs      | Shell programming     | Mandatory      | Construct argument lists and invoke utility                                |
| :calendar:              | at         | Process management    | Mandatory      | Execute commands at a later time                                           |
| :calendar:              | batch      | Process management    | Mandatory      | Schedule commands to be executed in a batch queue                          |
| :calendar:              | kill       | Process management    | Mandatory      | Terminate or signal processes                                              |
| :calendar:              | time       | Process management    | Mandatory      | Time a simple command                                                      |
| :calendar:              | uudecode   | Network               | Mandatory      | Decode a binary file                                                       |
| :calendar:              | uuencode   | Network               | Mandatory      | Encode a binary file                                                       |
| :calendar:              | date       | Misc                  | Mandatory      | Display the date and time                                                  |
| :calendar:              | grep       | Misc                  | Mandatory      | Search text for a pattern                                                  |
| :calendar:              | id         | Misc                  | Mandatory      | Return user identity                                                       |
| :calendar:              | locale     | Misc                  | Mandatory      | Get locale-specific information                                            |
| :calendar:              | logname    | Misc                  | Mandatory      | Return the user's login name                                               |
| :calendar:              | od         | Misc                  | Mandatory      | Dump files in various formats                                              |
| :calendar:              | split      | Misc                  | Mandatory      | Split files into pieces                                                    |
| :calendar:              | tty        | Misc                  | Mandatory      | Return user's terminal name                                                |
| :calendar:              | umask      | Misc                  | Mandatory      | Get or set the file mode creation mask                                     |
| :calendar:              | uname      | Misc                  | Mandatory      | Return system name                                                         |
| :calendar:              | basename   | Filesystem            | Mandatory      | Return non-directory portion of a pathname; see also dirname               |
| :calendar:              | chgrp      | Filesystem            | Mandatory      | Change the file group ownership                                            |
| :calendar:              | chmod      | Filesystem            | Mandatory      | Change the file modes/attributes/permissions                               |
| :calendar:              | chown      | Filesystem            | Mandatory      | Change the file ownership                                                  |
| :calendar:              | cksum      | Filesystem            | Mandatory      | Write file checksums and sizes                                             |
| :calendar:              | cmp        | Filesystem            | Mandatory      | Compare two files; see also diff                                           |
| :calendar:              | cp         | Filesystem            | Mandatory      | Copy files                                                                 |
| :calendar:              | dd         | Filesystem            | Mandatory      | Convert and copy a file                                                    |
| :calendar:              | df         | Filesystem            | Mandatory      | Report free disk space                                                     |
| :calendar:              | dirname    | Filesystem            | Mandatory      | Return the directory portion of a pathname; see also basename              |
| :calendar:              | du         | Filesystem            | Mandatory      | Estimate file space usage                                                  |
| :calendar:              | file       | Filesystem            | Mandatory      | Determine file type                                                        |
| :calendar:              | find       | Filesystem            | Mandatory      | Find files                                                                 |
| :calendar:              | ln         | Filesystem            | Mandatory      | Link files                                                                 |
| :calendar:              | ls         | Filesystem            | Mandatory      | List directory contents                                                    |
| :calendar:              | pathchk    | Filesystem            | Mandatory      | Check pathnames                                                            |
| :calendar:              | pwd        | Filesystem            | Mandatory      | Print working directory                                                    |
| :calendar:              | rmdir      | Filesystem            | Mandatory      | Remove directories, if they are empty.                                     |
| :calendar:              | touch      | Filesystem            | Mandatory      | Change file access and modification times                                  |
| :calendar:              | nl         | Text processing       | Optional (XSI) | Line numbering filter                                                      |
| :calendar:              | cal        | Misc                  | Optional (XSI) | Print a calendar                                                           |
| :no_entry:              | awk        | Text processing       | Mandatory      | Pattern scanning and processing language                                   |
| :no_entry:              | ed         | Text processing       | Mandatory      | The standard text editor                                                   |
| :no_entry:              | iconv      | Text processing       | Mandatory      | Codeset conversion                                                         |
| :no_entry:              | lp         | Text processing       | Mandatory      | Send files to a printer                                                    |
| :no_entry:              | pr         | Text processing       | Mandatory      | Print files                                                                |
| :no_entry:              | sed        | Text processing       | Mandatory      | Stream editor                                                              |
| :no_entry:              | tsort      | Text processing       | Mandatory      | Topological sort                                                           |
| :no_entry:              | command    | Shell programming     | Mandatory      | Execute a simple command                                                   |
| :no_entry:              | expr       | Shell programming     | Mandatory      | Evaluate arguments as an expression                                        |
| :no_entry:              | getopts    | Shell programming     | Mandatory      | Parse utility options                                                      |
| :no_entry:              | logger     | Shell programming     | Mandatory      | Log messages                                                               |
| :no_entry:              | sh         | Shell programming     | Mandatory      | Shell, the standard command language interpreter                           |
| :no_entry:              | test       | Shell programming     | Mandatory      | Evaluate expression                                                        |
| :no_entry:              | nice       | Process management    | Mandatory      | Invoke a utility with an altered nice value                                |
| :no_entry:              | nohup      | Process management    | Mandatory      | Invoke a utility immune to hangups                                         |
| :no_entry:              | ps         | Process management    | Mandatory      | Report process status                                                      |
| :no_entry:              | renice     | Process management    | Mandatory      | Set nice values of running processes                                       |
| :no_entry:              | wait       | Process management    | Mandatory      | Await process completion                                                   |
| :no_entry:              | alias      | Misc                  | Mandatory      | Define or display aliases                                                  |
| :no_entry:              | ar         | Misc                  | Mandatory      | Create and maintain library archives                                       |
| :no_entry:              | bc         | Misc                  | Mandatory      | Arbitrary-precision arithmetic language                                    |
| :no_entry:              | crontab    | Misc                  | Mandatory      | Schedule periodic background work                                          |
| :no_entry:              | env        | Misc                  | Mandatory      | Set the environment for command invocation                                 |
| :no_entry:              | gencat     | Misc                  | Mandatory      | Generate a formatted message catalog                                       |
| :no_entry:              | getconf    | Misc                  | Mandatory      | Get configuration values                                                   |
| :no_entry:              | hash       | Misc                  | Mandatory      | Hash database access method                                                |
| :no_entry:              | localedef  | Misc                  | Mandatory      | Define locale environment                                                  |
| :no_entry:              | m4         | Misc                  | Mandatory      | Macro processor                                                            |
| :no_entry:              | mailx      | Misc                  | Mandatory      | Process messages                                                           |
| :no_entry:              | man        | Misc                  | Mandatory      | Display system documentation                                               |
| :no_entry:              | mesg       | Misc                  | Mandatory      | Permit or deny messages                                                    |
| :no_entry:              | newgrp     | Misc                  | Mandatory      | Change to a new group                                                      |
| :no_entry:              | pax        | Misc                  | Mandatory      | Portable archive interchange                                               |
| :no_entry:              | stty       | Misc                  | Mandatory      | Set the options for a terminal                                             |
| :no_entry:              | tabs       | Misc                  | Mandatory      | Set terminal tabs                                                          |
| :no_entry:              | tput       | Misc                  | Mandatory      | Change terminal characteristics                                            |
| :no_entry:              | unalias    | Misc                  | Mandatory      | Remove alias definitions                                                   |
| :no_entry:              | write      | Misc                  | Mandatory      | Write to another user's terminal                                           |
| :no_entry:              | cd         | Filesystem            | Mandatory      | Change the working directory Version 6 AT&T UNIX                           |
| :no_entry:              | mkfifo     | Filesystem            | Mandatory      | Make FIFO special files                                                    |
| :no_entry:              | strings    | C programming         | Mandatory      | Find printable strings in files                                            |
| :no_entry:              | cc/c99     | C programming         | Optional (CD)  | Compile standard C programs                                                |
| :no_entry:              | lex        | C programming         | Optional (CD)  | Generate programs for lexical tasks                                        |
| :no_entry:              | yacc       | C programming         | Optional (CD)  | Yet another compiler compiler                                              |
| :no_entry:              | asa        | Text processing       | Optional (FR)  | Interpret carriage-control characters                                      |
| :no_entry:              | nm         | C programming         | Optional (SD,  | XSI) Write the name list of an object file                                 |
| :no_entry:              | make       | Programming           | Optional (SD)  | Maintain, update, and regenerate groups of programs                        |
| :no_entry:              | ctags      | C programming         | Optional (SD)  | Create a tags file                                                         |
| :no_entry:              | strip      | C programming         | Optional (SD)  | Remove unnecessary information from executable files                       |
| :no_entry:              | more       | Text processing       | Optional (UP)  | Display files on a page-by-page basis                                      |
| :no_entry:              | vi         | Text processing       | Optional (UP)  | Screen-oriented (visual) display editor                                    |
| :no_entry:              | bg         | Process management    | Optional (UP)  | Run jobs in the background                                                 |
| :no_entry:              | fg         | Process management    | Optional (UP)  | Run jobs in the foreground                                                 |
| :no_entry:              | jobs       | Process management    | Optional (UP)  | Display status of jobs in the current session                              |
| :no_entry:              | fc         | Misc                  | Optional (UP)  | Process the command history list                                           |
| :no_entry:              | talk       | Misc                  | Optional (UP)  | Talk to another user                                                       |
| :no_entry:              | uux        | Process management    | Optional (UU)  | Remote command execution                                                   |
| :no_entry:              | uucp       | Network               | Optional (UU)  | System-to-system copy                                                      |
| :no_entry:              | uustat     | Network               | Optional (UU)  | uucp status inquiry and job control                                        |
| :no_entry:              | ex         | Text processing       | Optional (XSI) | Text editor                                                                |
| :no_entry:              | zcat       | Text processing       | Optional (XSI) | Expand and concatenate data                                                |
| :no_entry:              | fuser      | Process management    | Optional (XSI) | List process IDs of all processes that have one or more files open         |
| :no_entry:              | ipcrm      | Misc                  | Optional (XSI) | Remove a message queue, semaphore set, or shared memory segment identifier |
| :no_entry:              | ipcs       | Misc                  | Optional (XSI) | Report interprocess communication facilities status                        |
| :no_entry:              | type       | Misc                  | Optional (XSI) | Displays how a name would be interpreted if used as a command              |
| :no_entry:              | ulimit     | Misc                  | Optional (XSI) | Set or report file size limit                                              |
| :no_entry:              | uncompress | Misc                  | Optional (XSI) | Expand compressed data                                                     |
| :no_entry:              | compress   | Filesystem            | Optional (XSI) | Compress data                                                              |
| :no_entry:              | link       | Filesystem            | Optional (XSI) | Create a hard link to a file                                               |
| :no_entry:              | unlink     | Filesystem            | Optional (XSI) | Call the unlink function                                                   |
| :no_entry:              | cflow      | C programming         | Optional (XSI) | Generate a C-language call graph                                           |
| :no_entry:              | cxref      | C programming         | Optional (XSI) | Generate a C-language program cross-reference table                        |
