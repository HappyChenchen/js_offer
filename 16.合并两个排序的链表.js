function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 == null) {
        return pHead2;
    } else if (pHead2 == null) {
        return pHead1;
    }
    var result = {};
    if (pHead1.val < pHead2.val) {
        result = pHead1;
        result.next = Merge(pHead1.next, pHead2);
    } else {
        result = pHead2;
        result.next = Merge(pHead1, pHead2.next);
    }
    return result;
}