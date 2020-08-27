const rankTest = require('ava');
const {rating} = require('../src/rank')

rankTest('should return B when rating given voyage zone is west-indies and history with china', t => {
    //given
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    //when
    const result = rating(voyage, history)
    //then
    t.is('B', result)
});

rankTest('should return A when rating given voyage zone is china and history with china', t => {
    //given
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    //when
    const result = rating(voyage, history)
    //then
    t.is('A', result)
});

rankTest('should return A when rating given voyage zone is east-indies and history with china', t => {
    //given
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    //when
    const result = rating(voyage, history)
    //then
    t.is('B', result)
});
