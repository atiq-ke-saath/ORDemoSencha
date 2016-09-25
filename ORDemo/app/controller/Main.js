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
            btnLogin: '#btnLogin'
        },
        control: {
            btnLogin: {
                tap: 'doLogin'
            }
        }
    },
    
    doLogin: function(){
        console.log('doLogin Fired...');
        var username = this.getTxtUsername().getValue();
        var password = this.getTxtPassword().getValue();
        
        if(username=='admin' && password=='1234') {
            Ext.Msg.alert('Sign-in','Login Successful',Ext.emptyFn);
            Ext.Viewport.add(Ext.create('ORDemo.view.Home'));
            console.log('Home View Added');
        }
        else {
            Ext.Msg.alert('Sign-in','Login Denied',Ext.emptyFn);
        }
    }
});