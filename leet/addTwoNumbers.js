var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var dummyHead = new ListNode(0);
    var current = dummyHead;
    var carry = 0;
    while (l1 !== null || l2 !== null) {
        var sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
}
// Create two linked lists
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
var res = addTwoNumbers(l1, l2);
console.log(res); // Output the resulting linked list
