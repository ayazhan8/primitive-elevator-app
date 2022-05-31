# Getting Started with Primitive Elevator App

## Available Scripts

To run the app, you should run these scripts in the project directory:

### `npm install`

### `npm start`

## How does the app work?

There is a button on each floor, when pressed, the nearest elevator moves to the desired floor.

There is a small delay between each action because of the animations (e.g. opening/closing doors, smooth transitions between floors).

### How the app can be improved & Future Work

1. Adding interfaces/types with TypeScript and implementing more functionality.

As for now, there are no clear interfaces/types for Elevators to list all of the needed attributes.
For example, we could add elevator statuses/states to indicate if they are idle or moving.

Queues could also be implemented, so that if the user presses several buttons on different floors the requests would be satisfied one by one depending on their distance, priority, etc.

The app functionality could be expanded: adding more elevators, deleting them, adding floors, etc.

2. The structure.
   All of the styling is in App.css right now, as I decided it would be easier to read and navigate it for a small project like this. But, upon expansion it would be better to use separate folders for each Component with its layout (.js/.tsx files) and styling (.css/.scss files, etc).
