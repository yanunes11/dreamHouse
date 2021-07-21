({
    doInit : function(component) {
        console.log('doInit - called');
        var action = component.get("c.getPickListValuesIntoList");
        action.setParams({
            objectType: component.get("v.sObjectName"),
            selectedField: component.get("v.fieldName")
        });
        action.setCallback(this, function(response) {
            var list = response.getReturnValue();
            component.set("v.picklistValues", list);
        })
        console.log('doInit - end');
        $A.enqueueAction(action);
    }
})
