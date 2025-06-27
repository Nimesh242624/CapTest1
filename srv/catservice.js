const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

  const service = await cds.connect.to('Northwindv2');

  this.on('READ', 'Products', async (request) => {
    const res= await service.run(request.query)
    return res;
  });
  
  this.on('READ', 'Categories', async (request) => {
    const res= await service.run(request.query)
    return res;
  });
});
