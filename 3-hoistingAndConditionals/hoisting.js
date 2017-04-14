var bird = 'Eagle';
( function () {
    if ( typeof bird === 'undefined' ){
        bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );
