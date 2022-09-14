# AURA

<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
    
    <aura:attribute name="num1" type="integer" />
    <aura:attribute name="num2" type="integer" />
    <aura:attribute name="total" type="integer" />
    
    <aura:attribute name="isAdd" type="boolean" default="false" />
    <aura:attribute name="isSub" type="boolean" default="false" />
    <aura:attribute name="isMul" type="boolean" default="false" />
    <aura:attribute name="isDiv" type="boolean" default="false" />
    
    <div class="slds-box slds-theme_shade slds-theme_alert-texture">
    <lightning:input name="input1" label="Primeiro número" value="{!v.num1}" />
    <lightning:input name="input2" label="Segundo número" value="{!v.num2}" />
    <br/>
    <lightning:buttonGroup>
        <lightning:button label="Adição" onclick="{!c.Add}" />
        <lightning:button label="Subtração" onclick="{!c.Sub}" />
        <lightning:button label="Mulplicação" onclick="{!c.Mul}" />
        <lightning:button label="Divisão" onclick="{!c.Divi}" />
        <lightning:button label="Limpar" onclick="{!c.Clear}" />
    </lightning:buttonGroup>
    <br/>
    </div>
    <aura:if isTrue="{!v.isAdd}">
        Adição de dois números = {!v.total}
    </aura:if>
    <aura:if isTrue="{!v.isSub}">
        Subtração de dois números = {!v.total}
    </aura:if>
    <aura:if isTrue="{!v.isMul}">
        Multplicação de dois números = {!v.total}
    </aura:if>
    <aura:if isTrue="{!v.isDiv}">
        Divisão de dois números = {!v.total}
    </aura:if>
    
</aura:component>


({
    Add : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) + parseInt(b);
        component.set("v.total",total);
        component.set("v.isAdd",true);
        component.set("v.isSub",false);
        component.set("v.isMul",false);
        component.set("v.isDiv",false);
    },
    
    Sub : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) - parseInt(b);
        component.set("v.total",total);
        component.set("v.isAdd",false);
        component.set("v.isSub",true);
        component.set("v.isMul",false);
        component.set("v.isDiv",false);
    },
    
    Mul : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) * parseInt(b);
        component.set("v.total",total);
        component.set("v.isAdd",false);
        component.set("v.isSub",false);
        component.set("v.isMul",true);
        component.set("v.isDiv",false);
    },
    
    Divi : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) / parseInt(b);
        component.set("v.total",total);
        component.set("v.isAdd",false);
        component.set("v.isSub",false);
        component.set("v.isMul",false);
        component.set("v.isDiv",true);
    },

    Clear : function(component, event, helper) {
        component.set("v.total",0);
        component.set("v.num1",0);
        component.set("v.num2",0);
        component.set("v.isAdd",false);
        component.set("v.isSub",false);
        component.set("v.isMul",false);
    }
})


