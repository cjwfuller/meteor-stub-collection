Package.describe({
  name: 'em0ney:stub-collection',
  version: '0.0.1',
  summary: 'A class to stub out your collections when writing unit tests',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'underscore'
  ]);
  api.addFiles('stub-collection.js');

  api.export('StubCollection');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'underscore']);
  api.use('em0ney:stub-collection');
  api.addFiles('stub-collection-tests.js');
});
