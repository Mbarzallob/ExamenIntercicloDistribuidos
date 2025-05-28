# FROM debian:bullseye

# RUN apt update && \
#     apt install -y curl gnupg apache2 && \
#     curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
#     apt install -y nodejs && \
#     npm install -g @angular/cli

# WORKDIR /app
# COPY . .

# RUN npm install && ng build --configuration production

# RUN cp -r dist/angular_client/browser/* /var/www/html/
# COPY apache.conf /etc/apache2/sites-available/000-default.conf

# EXPOSE 80

# CMD ["apache2ctl", "-D", "FOREGROUND"]

FROM httpd:2.4
COPY ./dist/angular_client/browser/ /usr/local/apache2/htdocs/
COPY ./.htaccess /usr/local/apache2/htdocs/
COPY ./httpd.config /usr/local/apache2/conf/httpd.conf