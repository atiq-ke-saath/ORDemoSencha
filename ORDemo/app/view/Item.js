Ext.define('ORDemo.view.Item',{
    
    extend: 'Ext.Panel',
    xtype: 'itemScreen',
    fullscreen: true,
    scrollable: true,
    
    config: {
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Items',
                
                items: [
                    {xtype: 'button', align: 'left', ui: 'back', html: 'Back', action: 'backToHome'},
                    {xtype: 'button', align: 'right', html: 'Logout', action: 'logout'}
                ]
            },
            {
                xtype: 'list',                
                itemTpl: '{title}',
                data: [
                    {title: 'Item1'},
                    {title: 'Item2'},
                    {title: 'Item3'},
                    {title: 'Item4'},
                    {title: 'Item5'}
                ]
            }
        ]
        
    }
    
});