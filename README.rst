erp
======

Basic ERPC functionality, starting with Journal Entries. Right now we are in the process of building journal entry templates and then analysis for my rental home business.


:License: MIT


Settings
--------


Basic Commands
--------------

Running the backend
^^^^^^^^^^^^^^^^^^^^^

* 1: establish a virtual environment and then install from requirements.txt

* 2: start django

    $ python manage.py runserver

Running the frontend
^^^^^^^^^^^
* 1: start from npm
    $ npm start

To run the tests, check your test coverage, and generate an HTML coverage report::

    $ coverage run -m pytest
    $ coverage html
    $ open htmlcov/index.html

Running tests with py.test
~~~~~~~~~~~~~~~~~~~~~~~~~~

::

  $ pytest
