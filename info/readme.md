# Plants' ids

| Plant  | Id |
| ------------- | ------------- |
| `wheat`  | 1 |
| `corn`  | 2 |
| `carrot`  | 17  |
| `radish`  | 19  |
| `strawberry`  | 20  |
| `tomato`  | 21  |
| `onion`  | 22  |
| `spinach`  | 23  |

I will try to complete the list asap.

# How the game works?

The game has a `cache` variable, which is an array that stores all action that user does on the game.
For example If you are clicking to water a plant the game registers it and does `cache.push({data})`.
There is also an async interval function which loops for all data in the `cache` and finally does the actions from here based on data. You can look up some functions which are named `farmAction(stringAction,a,b,c)`. 
To summarize -  we have only to *intelligently push* correct data to the `cache` to make the game do what we want.

# Reverse-engineering

Simply just do an action then try to print `cache` array (if done immediately - success rate is 100%). You will see the data object pushed into the `cache`. Then you can see what's the plant id, how are transaction handled and so on.