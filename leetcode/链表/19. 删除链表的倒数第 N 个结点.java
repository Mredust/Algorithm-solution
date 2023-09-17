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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        //方法一：递归
        // ListNode s = new ListNode(-1 , head);
        // recursion(s , n);
        // return s.next;

        //方法二：
        ListNode s = new ListNode(-1 , head);
        ListNode p1 = s;
        ListNode p2 = s;
        for(int i = 0; i <= n; i++){
            p1 = p1.next;
        }
        while(p1 != null){
            p1 = p1.next;
            p2 = p2.next;
        }
        p2.next = p2.next.next;
        return s.next;


    }

    private int recursion(ListNode head, int n){
        if(head == null){
            return 0;
        }
        int nth = recursion(head.next , n);
        if(nth == n){
            head.next = head.next.next;
        }
        return nth + 1;
    }
}
