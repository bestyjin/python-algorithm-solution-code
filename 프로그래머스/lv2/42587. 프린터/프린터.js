class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(newValue){
        const newNode = new Node(newValue);
        if (this.head === null){
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    peek(){
        return this.head.value;
    }
}

function solution(priorities, location) {
    let queue = new Queue();
    for (let i = 0; i<priorities.length; i+=1){
        queue.enqueue([priorities[i],i]);
    }
    priorities.sort((a,b)=>b-a);
    let count = 0;
    while(true){
        const currValue = queue.peek();
        if(currValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue());
        } else {
            const value = queue.dequeue();
            count+=1;
            if(value[1] === location) {
                return count;
            }
        }
    }
    
}