Ext.define('ORDemo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'ORDemo.view.Login'
    ],
    
    config: {
        
        items: [
            {  
                html:'<br/><br/><br/><br/>'  
            },
            {
                xtype: 'fieldset',
                itemId: 'loginForm',
                title: 'Login Form',
                
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
            }
        ]
    }
});