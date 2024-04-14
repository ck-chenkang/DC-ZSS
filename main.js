const ModbusRTU = require('modbus-serial');

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

const client = new ModbusRTU();

setInterval(function () {
  console.log('client.isOpen: ' + client.isOpen);
  if (!client.isOpen) {
    client.connectTCP('127.0.0.1', { port: 502 });
    client.setID(1);
  }
  client.readHoldingRegisters(0, 10, function (err, data) {
    console.log(data.data);
  });
}, 1000);
