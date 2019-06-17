//输入一个链表，反转链表后，输出新链表的表头。

function ReverseList(pHead)
{
    if(!pHead){
        return null;
    }
    var pre = null;
    var next = null;
    while(pHead){
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}