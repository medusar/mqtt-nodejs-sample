var mqtt = require('mqtt')
var dateTime = require('node-datetime');
var client = mqtt.connect('mqtt://iot.eclipse.org', {
    clientId: "mqtt_sample_id_chapter_9",
    clean: false,
    keepalive: 5
})

client.on('connect', function () {
    client.on('packetsend', function (packet) {
        console.log(`${dateTime.create().format('H:M:S')}: send ${packet.cmd}`)
    })

    client.on('packetreceive', function (packet) {
        console.log(`${dateTime.create().format('H:M:S')}: receive ${packet.cmd}`)
    })
})
