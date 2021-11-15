// const paragraph = document.querySelector('p'); // const paragraph: HTMLParagraphElement | null

// const paragraph = document.getElementById('message-output') // const paragraph: HTMLElement | null

const userInputElement = <HTMLInputElement>document.getElementById('user-input'); // one way of type casting
const userInputElement2 = document.getElementById('user-input') as HTMLInputElement; // second way of type casting


// userInputElement.value = 'Hi there!' // Property 'value' does not exist on type 'HTMLElement' when const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there!';
userInputElement2.value = 'Hi there!';
