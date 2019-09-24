# Run Api laravel local

## Windows users:
- Download wamp: http://www.wampserver.com/en/
- Download and extract cmder mini: https://github.com/cmderdev/cmder/releases/download/v1.1.4.1/cmder_mini.zip
- Update windows environment variable path to point to your php install folder (inside wamp installation dir) (here is how you can do this http://stackoverflow.com/questions/17727436/how-to-properly-set-php-environment-variable-to-run-commands-in-git-bash)
 

cmder will be refered as console

## Mac Os, Ubuntu and windows users continue here:
- Create a database locally named `gradesdb` utf8_general_ci 
- Download composer https://getcomposer.org/download/
- Pull Laravel/php project from git provider.
- Open the console and cd `api` is a root directory
- Run `composer install` or ```php composer.phar install```
- Run `php artisan key:generate` 
- Run `php artisan migrate`
- Run `php artisan db:seed` to run seeders, if any.
- Run php artisan passport:install`
- Run `php artisan serve`

##### You can now access to api at localhost:8000 :)

## If for some reason your project stop working do these:
```php
$ composer install
$ php artisan migrate
```

# Now Run Angular local
- Open the console and cd `site` is a root directory
- Run `ng serve`
##### You can now access to angular project at localhost:4200:)

## License
[MIT](https://choosealicense.com/licenses/mit/)