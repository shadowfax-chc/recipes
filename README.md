Recipes
=======

http://shadowfax-chc.github.io/recipes/

### To start

```console
git clone --recursive git@github.com:shadowfax-chc/recipes.git
```

### Install for dev

```console
go get -v -u github.com/spf13/hugo
go get -v -u github.com/wellington/wellington/wt
npm install
```

### Watching for local changes

```console
hugo server
gulp watch
```

### Add content and publishing

```console
hugo new entree/new-recipe.md
./deploy.sh
```
