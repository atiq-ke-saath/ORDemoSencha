Ext.define('ORDemo.controller.Main',{
    extend: 'Ext.app.Controller',
    
    init: function(){
        console.log('Main Controller Initialized');
    },
    
    launch: function(){
        console.log('Main Controller Launched');
    },
    
    config: {
        refs: {
            loginForm: '#loginForm',
            txtUsername: '#txtUsername',
            txtPassword: '#txtPassword',
            btnLogin: '#btnLogin',
            navView: '#navView'
        },
        control: {
            btnLogin: {
                tap: 'doLogin'
            },
            'button[action=logout]': {
                tap: 'doLogout'
            },
            'button[action=backToHome]': {
                tap: 'navToHome'
            }
        }
    },
    
    doLogin: function(){
        console.log('doLogin Fired...');
        var username = this.getTxtUsername().getValue();
        var password = this.getTxtPassword().getValue();
        
        if(username=='admin' && password=='1234') {
            //Ext.Msg.alert('Sign-in','Login Successful',Ext.emptyFn);
            Ext.Viewport.add({xtype: 'homeScreen'});
            Ext.Viewport.setActiveItem({xtype: 'homeScreen'});
        }
        else {
            Ext.Msg.alert('Sign-in','Login Denied',Ext.emptyFn);
        }
    },
        
    doLogout: function() {
        Ext.Viewport.setActiveItem({xtype:'main'});
    },
    
    navToHome: function() {
        Ext.Viewport.setActiveItem({xtype:'homeScreen'});
    }
});