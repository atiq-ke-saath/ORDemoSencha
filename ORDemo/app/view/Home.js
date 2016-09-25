Ext.define('ORDemo.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homeScreen',
    alias: 'widget.homeScreen',
    
    config: {
        
        //fullscreen: true,        
        scrollable: true,
        layout: 'vbox',
        
        showAnimation: {
            type: 'slide',
            direction: 'left'    
        },
        
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
                            action: 'logout'
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
                        html: [
                            '<div align="left">',
                            '   <div style="float: left;"><img src="/ORDemo/resources/icons/user_img.png"/></div>',
                            '   <div style="float: right;">',
                            '       <p style="font-family: "Comic Sans";">Rahman, Atiqur</p>',
                            '       <p style="font-size: small; font-weight: normal;">Merchandise Team Lead</p>',
                            '   </div>',
                            '</div>'
                        ].join(""),
                        style: 'background: #E8E0D3; margin: 2px; border-radius:0',
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
                        listeners: {
                            tap: function() {
                                Ext.Viewport.setActiveItem({xtype: 'itemScreen'});
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        html: 'Pricing',
                        style: 'background: #5AD3A7; margin: 2px; border-radius:0',
                        flex: 1
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