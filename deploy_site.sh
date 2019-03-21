rm -rf _site
bundle exec jekyll build --config _config.yml,_config_gh_pages.yml # later configs override earlier ones
cd _site
git init
git remote add origin git@github.com:department-of-veterans-affairs/vets-design-system-documentation.git
git checkout -b gh-pages
git add -A
git commit -m "update site"
git push -f origin gh-pages
cd ../
rm -rf _site