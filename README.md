# NgDataflow

This is a basic demo of how to pass information from component to component using Angular.

## Passing State Down 

First of all, you want to store state as high up in the app as possible and pass it down. To
a pass it down, in the HTML file for the app, you would pass the state as an attribute in the 
component tag as [variableName] = "stateName". Then you will have access to this state in the
component. In the typescript file for the component, you would then want to import 'Input' 
from the core angular files and would then decorate the variables that are being passed into
the component. Then you will be able to use it in the component.

## Passing State Up

To pass state down,  you would import Output decorators and Event Emitters from the core
angular files in a similar way that you imported in the Input decorators to pass state 
down. Then you would decorate the variable where you declare the new event emitter using
the syntax:
@Output() eventEmitterName = new EventEmitter();

You can now use this eventEmitter to pass state up in a function using the syntax:
this.eventEmitterName.emit(dataToPassGoesHere);

Now in the HTML holding the components, you will pass this information to the next component
using the following syntax:
<ComponentName (propName)="eventEmitterName($event)"></ComponentName>



