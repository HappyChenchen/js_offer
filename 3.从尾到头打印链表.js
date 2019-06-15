//输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

function printListFromTailToHead(head)
{
    // write code here
    var arr=[];
    var me=head;
    while(me){
        arr.push(me.val);
        me=me.next;
        
    }
    return arr.reverse();
}

