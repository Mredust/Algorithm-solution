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
    public ListNode deleteDuplicates(ListNode head) {
        //方法一：双指针
        // if(head == null || head.next == null){
        //     return head;
        // }
        // ListNode p1 = head;
        // ListNode p2;
        // while((p2 = p1.next)!= null){
        //     if(p1.val == p2.val){
        //         p1.next = p2.next;
        //     }else{
        //         p1 = p1.next;
        //     }
        // }
        // return head;

        //方法二：递归
        if(head == null || head.next == null){
            return head;
        }
        if(head.val == head.next.val){
            return deleteDuplicates(head.next);
        }else{
            head.next = deleteDuplicates(head.next);
            return head;
        }
    }
}
