
# Confirmation dialog

In this project I made confirmation dialog that can be used for confirmation just via function.

## Usage example

```javascript
import { useConfirmationStore } from "./confirmationStore"

const confirmationStore = useConfirmationStore()

const deleteItem = async () => {
  const confirmed = await confirmationStore.openDialog( {
    title: "Delete Call log",
    detail: `Are you sure you want to deactivate your account? All of your data
will be permanently removed from our servers forever. This action cannot be undone.`
  } )
  if ( confirmed ) {
    // Do some action
    console.log( "confirmed" )
  } else {
    console.log( 'cancelled' )
  }
}
```
