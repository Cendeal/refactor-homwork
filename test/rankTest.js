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

rankTest('should return A when rating given voyage length is 3', t => {
    //given
    const voyage = {
        zone: 'east-indies',
        length: 3,
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

rankTest('should return A when rating given voyage zone is china, voyage length is 19, history with china and history length 15', t => {
    //given
    const voyage = {
        zone: 'china',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
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


rankTest('should return A when rating given voyage zone is east-indies, voyage length is 19, history with china and history length 15', t => {
    //given
    const voyage = {
        zone: 'east-indies',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];
    //when
    const result = rating(voyage, history)
    //then
    t.is('B', result)
});
rankTest('should return A when rating given voyage zone is china, voyage length is 13, history with china and history length 15', t => {
    //given
    const voyage = {
        zone: 'china',
        length: 13,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];
    //when
    const result = rating(voyage, history)
    //then
    t.is('A', result)
});
rankTest('should return A when rating given voyage length is 5', t => {
    //given
    const voyage = {
        zone: 'east-indies',
        length: 5,
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
