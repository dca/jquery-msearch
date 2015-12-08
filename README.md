
jQuery-msearch
==
A simple jQuery plugin for search element using css `:not` selector.

[![Code Climate](https://codeclimate.com/github/dca/jquery-msearch.png)](https://codeclimate.com/github/dca/jquery-msearch)

##Usage

```js
$('input-selector').msearch('search-selector', 'field-name');
```

##Example

```html
  <input class="search1" />
  <div id="main-list1">
    <div data-name="mary" class="search-item">Mary</div>
    <div data-name="jack" class="search-item">Jack</div>
    <div data-name="bob" class="search-item">Bob</div>
  </div>
  <script>
    $('input.search1').msearch('#main-list1 .search-item', 'data-name');
  </script>
```


## Installation

The fastest way to get started is use [bower](http://bower.io), it's as easy as:

```sh
$ bower install --save jquery-msearch
```

Also, you can install it using [npm](https://www.npmjs.com), just type the following command

```sh
$ npm install jquery-msearch --save
```

 
 
