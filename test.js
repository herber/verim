import test from 'ava';
import verim from '.';
import hookStd from 'hook-std';

test('throws error', t => {
  const msg = 'throws error';

  try {
    verim(false, msg);
  } catch (err) {
    t.is(err.message, msg);
  }
});

test('logs error', t => {
  t.plan(1);

  const msg = 'logs error';
  const unhook = hookStd.stderr(output => {
    unhook();
    t.is(output.trim(), msg);
  });

  verim(false, msg, false);
});

test('throws error if msg is not a string', t => {
  const msg = 0;

  try {
    verim(false, msg);
  } catch (err) {
    t.is(err.message, 'Second parameter must be a string');
  }
});

test('does not throw an error if bool is true', t => {
  const msg = 'does not throw an error if bool is true';

  try {
    verim(true, msg);
    t.pass();
  } catch (err) {
    t.fail(err);
  }
});
