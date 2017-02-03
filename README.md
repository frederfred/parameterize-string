# Parameterize string

Replace any special characters in a string with an ASCII approximation. Usefull for creating URL-friendly slugs.

This package is very similar to the ActiveSupport::Inflector [parameterize](http://apidock.com/rails/ActiveSupport/Inflector/parameterize) method in Ruby on Rails.

## Installation
`npm install --save parameterize-string`

## Usage

### Default options
```javascript
{
  separator: '-',
  preserveCase: false,
}
```

### Example
```javascript
import parameterize from 'parameterize-string';

parameterize('Björk Guðmundsdóttir'); // bjork-gudmundsdottir
parameterize('Björk Guðmundsdóttir', { preserveCase: true }); // Bjork-Gudmundsdottir
parameterize('Björk Guðmundsdóttir', { separator: '_' }); // bjork_gudmundsdottir
```

## Test
`npm test`
