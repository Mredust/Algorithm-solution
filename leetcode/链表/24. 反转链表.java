/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        //方法一：反转链表
        // ListNode res = null;
        // while(head != null){
        //     res = new ListNode(head.val , res);
        //     head = head.next;
        // }
        // return res;

        //方法二：递归
        if(head == null || head.next == null){
            return head;
        }
        ListNode last = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return last;

    }
    
}
