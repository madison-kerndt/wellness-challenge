import { moduleForModel, test } from 'ember-qunit';

moduleForModel('student', 'Unit | Model | student', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should return undefined without valid input', function(assert) {
  const student = this.subject({});

  assert.equal(student.get('student'), undefined, 'student attributes throw error if empty');
});
