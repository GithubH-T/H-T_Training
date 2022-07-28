import test from 'tape'
import { incrementAsync, delay } from './sagas'
import { put, call } from 'redux-saga/effects'
// what is tape,assert,deepEqual here
test ("incrementAsync Saga test", (assert) => {
    const gen= incrementAsync()

    // assert.deepEqual(
    //     gen.next(),
    //     { done:false, value: ??? },
    //     'incrementAsync should return a Promise that will resolve after 1 second'
    // )
    
    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
    ),

    assert.deepEqual(
        gen.next().value,
        put({ type: 'INCREMENT' }),
        'incrementAsync Saga must dispatch an INCREMENT action'
    ),

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
    ),

    assert.end()
});
