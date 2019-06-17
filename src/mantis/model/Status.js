Ext.define('Ext.us.mantis.model.Status', 
{
    extend: 'Ext.data.Model',    
    alias: 'mantis.model.status',
    
    fields: [
    { name: 'id',         type: 'number' },
    { name: 'name',       type: 'string' },
    { name: 'label',      type: 'string' },
    { name: 'color',      type: 'string' }]

});
