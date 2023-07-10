1.  To install `Composer` globally, download the installer from https://getcomposer.org/download/ Verify that Composer in successfully installed, and version of installed Composer will appear:

        composer --version

2.  Install `Composer` dependencies.

        composer install

3.  Copy `.env.example` file and create duplicate. Use `cp` command for Linux or Max user.

        cp .env.example .env

    If you are using `Windows`, use `copy` instead of `cp`.

        copy .env.example .env

4.  Create a table in MySQL database and fill the database details `DB_DATABASE` in `.env` file.

5.  The below command will create tables into database using Laravel migration and seeder.

        php artisan migrate

6.  The below command will create dummy data to table post

        php artisan db:seed

7.  To install `Node js` globally, download the installer from https://nodejs.org/en/download Verify that Node Js in successfully installed, and version of installed Node js will appear:

        node --version

8.  The below to install node js package

        npm install

        npm run build

9.  Generate your application encryption key:

        php artisan key:generate

10. Start the localhost server:

        php artisan serve
