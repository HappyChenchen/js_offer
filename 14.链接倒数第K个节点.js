//输入一个链表，输出该链表中倒数第k个结点。

function FindKthToTail(head, k) {
    var arr = [];
    while(head!=null){
        arr.push(head);
        head = head.next;
    }
    return arr[arr.length-k];
}