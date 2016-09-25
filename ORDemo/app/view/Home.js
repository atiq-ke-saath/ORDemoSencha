Ext.define('ORDemo.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homeScreen',
    
    
    config: {
        
        fullscreen: true,        
        scrollable: true,
        layout: 'vbox',
                
        items: [
            {
                    docked: 'top', 
                    xtype: 'titlebar',
                    title: 'Oracle Retail',
                    items: [
                        {
                            xtype: 'button',
                            html: 'Logout',
                            align: 'right',
                            listeners: {
                                tap: function(btn, evt, eOpts){
                                    Ext.Msg.alert('Logout','You Clicked Logout', Ext.emptyFn);
                                }
                            }    
                        }
                    ]
            },
            {                
                xtype: 'panel',                
                flex: 1,
                
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        html: 'My Profile',                        
                        style: 'background: #F8C273; margin: 2px; border-radius:0',
                        flex: 1,
                        listeners: {
                            tap: function(btn, evt, eOpts){
                                console.log('MyProfile tapped');
                            }
                        }
                    }
                ]    
                
                
            },
            {                
                xtype: 'panel',
                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        html: 'Items',
                        style: 'background: #FF5733; margin: 2px; border-radius:0',
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        html: 'Pricing',
                        style: 'background: #5AD3A7; margin: 2px; border-radius:0',
                        flex: 1,
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        html: 'Orders',
                        renderTo: Ext.getBody(),
                        style: 'background: #5589EA; margin: 2px; border-radius:0',
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        html: 'Transfers',
                        style: 'background: #ECDF5F; margin: 2px; border-radius:0',
                        flex: 1,
                    }
                ]
            }
        ]
    }
});