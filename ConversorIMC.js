({
    calculo : function(component, event, helper) {
        var peso = component.get("v.num1");
        var altura  = component.get("v.num2");
        var total = (parseFloat(peso) / (parseFloat(altura) **2)).toFixed(2);
        var estado = "";
        
        if(total < 17){
            estado = "Abaixo"; 
        }else if(total > 17 && total <= 20){
            estado = "com o Peso normal";  
        }else{
            estado = "Acima"; 
        }
        
        component.set("v.total",total);
        component.set("v.estado",estado);
        component.set("v.calculo",true);
    },
    
    Clear : function(component, event, helper) {
        component.set("v.total",0);
        component.set("v.num1",0);
        component.set("v.num2",0);
        component.set("v.calculo",false);
    }
})
