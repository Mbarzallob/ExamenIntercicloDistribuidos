
FROM httpd:2.4
COPY ./dist/angular_client/browser/ /usr/local/apache2/htdocs/
COPY ./.htaccess /usr/local/apache2/htdocs/
COPY ./httpd.config /usr/local/apache2/conf/httpd.conf