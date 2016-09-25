Ext.define('ORDemo.view.Welcome',{
    extend: 'Ext.navigation.View',
    xtype: 'welcomeScreen',
    id: 'navView',
    scrollable: true,
    
        
    config: {
        navigationBar: {
            items: [                    
                {xtype: 'button', align: 'right', html: 'Logout', action: 'logout'}
            ]  
        },
        
        items: [            
            {
                title: 'Home',
                xtype: 'homeScreen'
            }
//            ,
//            {
//                title: 'Items',
//                xtype: 'itemScreen'
//            }
        ]
    }
});