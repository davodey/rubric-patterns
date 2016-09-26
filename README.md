# Elements Patternlab V 0.1
http://159.182.11.87/elements-patternlab/

## Pattern Lab & Elements Boilerplate
This setup will get you started with running a basic Pattern Lab integrated with elements.  Perfect for prototyping HTML and SCSS in an atomic environment. To get started, install all the necessary dependencies and load configuration folders and files.
1. Clone or download this repository.
2. ``` $ npm install ```


## Starting up
The below command uses browser-sync, gulp sass, and other build tools to automate your workflow.  After you run it, you will be able to edit the files and the project and browser will reload with the changes.

1. ``` $ gulp ```

## Editing the SCSS / Styling

1. All styling is done in the files located in ui > scss.  The files in here will compile and be distributed to patternlab and the css folder in this directory for easy portability.


## Editing and creating patterns

1. Pattern creation is done in the pattern-lab > source > _patterns folder.  The files in here will compile and be distributed to the public folder.
2. Only work in the source folder, the public folder is cleaned and rebuilt on save.

For more information on patternlab
1. http://patternlab.io
2. http://patternlab.io/docs/index.html