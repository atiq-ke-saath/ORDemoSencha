Ext.define('ORDemo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'ORDemo.view.Login'
    ],
    
    config: {
        scrollable: true,
        
        showAnimation: {
            type: 'slide',
            direction: 'right'
        },        
        items: [
            {  
                html:[
                    '<br/>',
                    '<div align="right"><img src="/ORDemo/resources/icons/Oracle-Retail-Logo-NB.png"/></div>',
                    '<br/>'  
                ].join("")
            },
            
            {
                xtype: 'fieldset',
                itemId: 'loginForm',
                title: 'Sign In',
                
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        id: 'txtUsername',
                        autoCapitalize: false
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        id: 'txtPassword'
                    },
                    {
                        xtype: 'button',
                        text: 'Sign-in',
                        id: 'btnLogin',
                        ui: 'confirm'
                        /*
                        listeners:{
                            tap: function(btn, evt, eOpts) {
                                var txtUsername = Ext.ComponentQuery.query('#txtUsername')[0];
                                if(txtUsername.getValue()!="")
                                    Ext.Msg.alert('Sign-in','Welcome '+txtUsername.getValue(),Ext.emptyFn);
                                else
                                    Ext.Msg.alert('Sign-in','Please Enter Username & Password',Ext.emptyFn);
                            }    
                        }
                        */
                        
                    }
                ]
            },
            
            {  
                html:[
                    '<br/>',
                    '<div align="right"><img src="/ORDemo/resources/icons/keep-challenging-logo.png"/></div>',
                    '<br/>'  
                ].join("")
            },
        ]
    }
});