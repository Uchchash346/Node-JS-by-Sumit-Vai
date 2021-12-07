const EventEmitter = require('events');
const emitter = new EventEmitter();
class School extends EventEmitter {
    startPeriod() {
        console.log('Class Started');

        // raise event when bell ring
        // raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000)
    }
}


module.exports = School;