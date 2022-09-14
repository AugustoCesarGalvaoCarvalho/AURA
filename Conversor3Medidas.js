({
    isDecimetro : function(component, event, helper) {
        var a = component.get("v.num1");
        var total = (parseFloat(a) * 10).toFixed(2);
        
        component.set("v.total",total);
        component.set("v.isDecimetro",true);
        component.set("v.isQuilometros",false);
        component.set("v.isCentimetro",false);
    },  
    isQuilometros : function(component, event, helper) {
        var a = component.get("v.num1");
        var total = (parseFloat(a) / 1000).toFixed(2);
        
        component.set("v.total",total);
        component.set("v.isDecimetro",false);
        component.set("v.isQuilometros",true);
        component.set("v.isCentimetro",false);    
    },
    isCentimetro : function(component, event, helper) {
        var a = component.get("v.num1");
        var total = (parseFloat(a) * 100).toFixed(2);
        
        component.set("v.total",total);
        component.set("v.isDecimetro",false);
        component.set("v.isQuilometros",false);
        component.set("v.isCentimetro",true);      
    },
    Clear : function(component, event, helper) {
        component.set("v.total",0);
        component.set("v.num1",0);
        component.set("v.isDecimetro",false);
        component.set("v.isQuilometros",false);
        component.set("v.isCentimetro",false);
    }
})
