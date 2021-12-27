# coreutils.js

This is a collection of JS scripts meant to mimic the functionality of [Unix
command line utilities](https://en.wikipedia.org/wiki/List_of_Unix_commands).

## Requirements

* Node
  * Specific version TBA
* Yarn
  * Install with `npm i yarn -g`

## Plan

A program can be either:
* ✅ - implemented
* 🔨 - currently worked on
* 📅 - Will be done in the future
* 🚫 - Will not be done in the future

| Implementation status | Program    | Category              | Option code    | Description                                                                |
|-----------------------|------------|-----------------------|----------------|----------------------------------------------------------------------------|
| 🔨                     | mkdir      | Filesystem            | Mandatory      | Make directories                                                           |
| 🔨                     | mv         | Filesystem            | Mandatory      | Move or rename files                                                       |
| 🔨                     | rm         | Filesystem            | Mandatory      | Remove directory entries                                                   |
| 📅                     | comm       | Text processing       | Mandatory      | Select or reject lines common to two files                                 |
| 📅                     | csplit     | Text processing       | Mandatory      | Split files based on context                                               |
| 📅                     | cut        | Text processing       | Mandatory      | Cut out selected fields of each line of a file                             |
| 📅                     | diff       | Text processing       | Mandatory      | Compare two files; see also cmp                                            |
| 📅                     | expand     | Text processing       | Mandatory      | Convert tabs to spaces                                                     |
| 📅                     | fold       | Text processing       | Mandatory      | Filter for folding lines                                                   |
| 📅                     | head       | Text processing       | Mandatory      | Copy the first part of files                                               |
| 📅                     | join       | Text processing       | Mandatory      | Merges two sorted text files based on the presence of a common field       |
| 📅                     | paste      | Text processing       | Mandatory      | Merge corresponding or subsequent lines of files                           |
| 📅                     | patch      | Text processing       | Mandatory      | Apply changes to files                                                     |
| 📅                     | sort       | Text processing       | Mandatory      | Sort, merge, or sequence check text files                                  |
| 📅                     | tail       | Text processing       | Mandatory      | Copy the last part of a file                                               |
| 📅                     | tr         | Text processing       | Mandatory      | Translate characters                                                       |
| 📅                     | unexpand   | Text processing       | Mandatory      | Convert spaces to tabs                                                     |
| 📅                     | uniq       | Text processing       | Mandatory      | Report or filter out repeated lines in a file                              |
| 📅                     | wc         | Text processing       | Mandatory      | Line, word and byte or character count                                     |
| 📅                     | who        | System administration | Mandatory      | Display who is on the system                                               |
| 📅                     | echo       | Shell programming     | Mandatory      | Write arguments to standard output                                         |
| 📅                     | false      | Shell programming     | Mandatory      | Return false value                                                         |
| 📅                     | printf     | Shell programming     | Mandatory      | Write formatted output                                                     |
| 📅                     | read       | Shell programming     | Mandatory      | Read a line from standard input                                            |
| 📅                     | sleep      | Shell programming     | Mandatory      | Suspend execution for an interval                                          |
| 📅                     | tee        | Shell programming     | Mandatory      | Duplicate the standard output                                              |
| 📅                     | true       | Shell programming     | Mandatory      | Return true value                                                          |
| 📅                     | xargs      | Shell programming     | Mandatory      | Construct argument lists and invoke utility                                |
| 📅                     | at         | Process management    | Mandatory      | Execute commands at a later time                                           |
| 📅                     | batch      | Process management    | Mandatory      | Schedule commands to be executed in a batch queue                          |
| 📅                     | kill       | Process management    | Mandatory      | Terminate or signal processes                                              |
| 📅                     | time       | Process management    | Mandatory      | Time a simple command                                                      |
| 📅                     | uudecode   | Network               | Mandatory      | Decode a binary file                                                       |
| 📅                     | uuencode   | Network               | Mandatory      | Encode a binary file                                                       |
| 📅                     | date       | Misc                  | Mandatory      | Display the date and time                                                  |
| 📅                     | grep       | Misc                  | Mandatory      | Search text for a pattern                                                  |
| 📅                     | id         | Misc                  | Mandatory      | Return user identity                                                       |
| 📅                     | locale     | Misc                  | Mandatory      | Get locale-specific information                                            |
| 📅                     | logname    | Misc                  | Mandatory      | Return the user's login name                                               |
| 📅                     | od         | Misc                  | Mandatory      | Dump files in various formats                                              |
| 📅                     | split      | Misc                  | Mandatory      | Split files into pieces                                                    |
| 📅                     | tty        | Misc                  | Mandatory      | Return user's terminal name                                                |
| 📅                     | umask      | Misc                  | Mandatory      | Get or set the file mode creation mask                                     |
| 📅                     | uname      | Misc                  | Mandatory      | Return system name                                                         |
| 📅                     | basename   | Filesystem            | Mandatory      | Return non-directory portion of a pathname; see also dirname               |
| 📅                     | cat        | Filesystem            | Mandatory      | Concatenate and print files                                                |
| 📅                     | chgrp      | Filesystem            | Mandatory      | Change the file group ownership                                            |
| 📅                     | chmod      | Filesystem            | Mandatory      | Change the file modes/attributes/permissions                               |
| 📅                     | chown      | Filesystem            | Mandatory      | Change the file ownership                                                  |
| 📅                     | cksum      | Filesystem            | Mandatory      | Write file checksums and sizes                                             |
| 📅                     | cmp        | Filesystem            | Mandatory      | Compare two files; see also diff                                           |
| 📅                     | cp         | Filesystem            | Mandatory      | Copy files                                                                 |
| 📅                     | dd         | Filesystem            | Mandatory      | Convert and copy a file                                                    |
| 📅                     | df         | Filesystem            | Mandatory      | Report free disk space                                                     |
| 📅                     | dirname    | Filesystem            | Mandatory      | Return the directory portion of a pathname; see also basename              |
| 📅                     | du         | Filesystem            | Mandatory      | Estimate file space usage                                                  |
| 📅                     | file       | Filesystem            | Mandatory      | Determine file type                                                        |
| 📅                     | find       | Filesystem            | Mandatory      | Find files                                                                 |
| 📅                     | ln         | Filesystem            | Mandatory      | Link files                                                                 |
| 📅                     | ls         | Filesystem            | Mandatory      | List directory contents                                                    |
| 📅                     | pathchk    | Filesystem            | Mandatory      | Check pathnames                                                            |
| 📅                     | pwd        | Filesystem            | Mandatory      | Print working directory                                                    |
| 📅                     | rmdir      | Filesystem            | Mandatory      | Remove directories, if they are empty.                                     |
| 📅                     | touch      | Filesystem            | Mandatory      | Change file access and modification times                                  |
| 📅                     | nl         | Text processing       | Optional (XSI) | Line numbering filter                                                      |
| 📅                     | cal        | Misc                  | Optional (XSI) | Print a calendar                                                           |
| 🚫                     | awk        | Text processing       | Mandatory      | Pattern scanning and processing language                                   |
| 🚫                     | ed         | Text processing       | Mandatory      | The standard text editor                                                   |
| 🚫                     | iconv      | Text processing       | Mandatory      | Codeset conversion                                                         |
| 🚫                     | lp         | Text processing       | Mandatory      | Send files to a printer                                                    |
| 🚫                     | pr         | Text processing       | Mandatory      | Print files                                                                |
| 🚫                     | sed        | Text processing       | Mandatory      | Stream editor                                                              |
| 🚫                     | tsort      | Text processing       | Mandatory      | Topological sort                                                           |
| 🚫                     | command    | Shell programming     | Mandatory      | Execute a simple command                                                   |
| 🚫                     | expr       | Shell programming     | Mandatory      | Evaluate arguments as an expression                                        |
| 🚫                     | getopts    | Shell programming     | Mandatory      | Parse utility options                                                      |
| 🚫                     | logger     | Shell programming     | Mandatory      | Log messages                                                               |
| 🚫                     | sh         | Shell programming     | Mandatory      | Shell, the standard command language interpreter                           |
| 🚫                     | test       | Shell programming     | Mandatory      | Evaluate expression                                                        |
| 🚫                     | nice       | Process management    | Mandatory      | Invoke a utility with an altered nice value                                |
| 🚫                     | nohup      | Process management    | Mandatory      | Invoke a utility immune to hangups                                         |
| 🚫                     | ps         | Process management    | Mandatory      | Report process status                                                      |
| 🚫                     | renice     | Process management    | Mandatory      | Set nice values of running processes                                       |
| 🚫                     | wait       | Process management    | Mandatory      | Await process completion                                                   |
| 🚫                     | alias      | Misc                  | Mandatory      | Define or display aliases                                                  |
| 🚫                     | ar         | Misc                  | Mandatory      | Create and maintain library archives                                       |
| 🚫                     | bc         | Misc                  | Mandatory      | Arbitrary-precision arithmetic language                                    |
| 🚫                     | crontab    | Misc                  | Mandatory      | Schedule periodic background work                                          |
| 🚫                     | env        | Misc                  | Mandatory      | Set the environment for command invocation                                 |
| 🚫                     | gencat     | Misc                  | Mandatory      | Generate a formatted message catalog                                       |
| 🚫                     | getconf    | Misc                  | Mandatory      | Get configuration values                                                   |
| 🚫                     | hash       | Misc                  | Mandatory      | Hash database access method                                                |
| 🚫                     | localedef  | Misc                  | Mandatory      | Define locale environment                                                  |
| 🚫                     | m4         | Misc                  | Mandatory      | Macro processor                                                            |
| 🚫                     | mailx      | Misc                  | Mandatory      | Process messages                                                           |
| 🚫                     | man        | Misc                  | Mandatory      | Display system documentation                                               |
| 🚫                     | mesg       | Misc                  | Mandatory      | Permit or deny messages                                                    |
| 🚫                     | newgrp     | Misc                  | Mandatory      | Change to a new group                                                      |
| 🚫                     | pax        | Misc                  | Mandatory      | Portable archive interchange                                               |
| 🚫                     | stty       | Misc                  | Mandatory      | Set the options for a terminal                                             |
| 🚫                     | tabs       | Misc                  | Mandatory      | Set terminal tabs                                                          |
| 🚫                     | tput       | Misc                  | Mandatory      | Change terminal characteristics                                            |
| 🚫                     | unalias    | Misc                  | Mandatory      | Remove alias definitions                                                   |
| 🚫                     | write      | Misc                  | Mandatory      | Write to another user's terminal                                           |
| 🚫                     | cd         | Filesystem            | Mandatory      | Change the working directory Version 6 AT&T UNIX                           |
| 🚫                     | mkfifo     | Filesystem            | Mandatory      | Make FIFO special files                                                    |
| 🚫                     | strings    | C programming         | Mandatory      | Find printable strings in files                                            |
| 🚫                     | cc/c99     | C programming         | Optional (CD)  | Compile standard C programs                                                |
| 🚫                     | lex        | C programming         | Optional (CD)  | Generate programs for lexical tasks                                        |
| 🚫                     | yacc       | C programming         | Optional (CD)  | Yet another compiler compiler                                              |
| 🚫                     | asa        | Text processing       | Optional (FR)  | Interpret carriage-control characters                                      |
| 🚫                     | nm         | C programming         | Optional (SD,  | XSI) Write the name list of an object file                                 |
| 🚫                     | make       | Programming           | Optional (SD)  | Maintain, update, and regenerate groups of programs                        |
| 🚫                     | ctags      | C programming         | Optional (SD)  | Create a tags file                                                         |
| 🚫                     | strip      | C programming         | Optional (SD)  | Remove unnecessary information from executable files                       |
| 🚫                     | more       | Text processing       | Optional (UP)  | Display files on a page-by-page basis                                      |
| 🚫                     | vi         | Text processing       | Optional (UP)  | Screen-oriented (visual) display editor                                    |
| 🚫                     | bg         | Process management    | Optional (UP)  | Run jobs in the background                                                 |
| 🚫                     | fg         | Process management    | Optional (UP)  | Run jobs in the foreground                                                 |
| 🚫                     | jobs       | Process management    | Optional (UP)  | Display status of jobs in the current session                              |
| 🚫                     | fc         | Misc                  | Optional (UP)  | Process the command history list                                           |
| 🚫                     | talk       | Misc                  | Optional (UP)  | Talk to another user                                                       |
| 🚫                     | uux        | Process management    | Optional (UU)  | Remote command execution                                                   |
| 🚫                     | uucp       | Network               | Optional (UU)  | System-to-system copy                                                      |
| 🚫                     | uustat     | Network               | Optional (UU)  | uucp status inquiry and job control                                        |
| 🚫                     | ex         | Text processing       | Optional (XSI) | Text editor                                                                |
| 🚫                     | zcat       | Text processing       | Optional (XSI) | Expand and concatenate data                                                |
| 🚫                     | fuser      | Process management    | Optional (XSI) | List process IDs of all processes that have one or more files open         |
| 🚫                     | ipcrm      | Misc                  | Optional (XSI) | Remove a message queue, semaphore set, or shared memory segment identifier |
| 🚫                     | ipcs       | Misc                  | Optional (XSI) | Report interprocess communication facilities status                        |
| 🚫                     | type       | Misc                  | Optional (XSI) | Displays how a name would be interpreted if used as a command              |
| 🚫                     | ulimit     | Misc                  | Optional (XSI) | Set or report file size limit                                              |
| 🚫                     | uncompress | Misc                  | Optional (XSI) | Expand compressed data                                                     |
| 🚫                     | compress   | Filesystem            | Optional (XSI) | Compress data                                                              |
| 🚫                     | link       | Filesystem            | Optional (XSI) | Create a hard link to a file                                               |
| 🚫                     | unlink     | Filesystem            | Optional (XSI) | Call the unlink function                                                   |
| 🚫                     | cflow      | C programming         | Optional (XSI) | Generate a C-language call graph                                           |
| 🚫                     | cxref      | C programming         | Optional (XSI) | Generate a C-language program cross-reference table                        |
