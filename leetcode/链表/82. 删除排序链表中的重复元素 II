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
        //方法一：递归
        // if(head == null || head.next == null){
        //     return head;
        // }
        // if(head.val == head.next.val){
        //     ListNode p = head.next.next;
        //     while(p != null && p.val == head.val){
        //         p = p.next;
        //     }
        //     return deleteDuplicates(p);
        // }else{
        //     head.next = deleteDuplicates(head.next);
        //     return head;
        // }

        //方法二：指针
        if(head == null || head.next == null){
            return head;
        }

        ListNode s = new ListNode(-1 , head);
        ListNode p1 = s;
        ListNode p2 , p3;
        while((p2 = p1.next) != null && ((p3 = p2.next) != null)){
            if(p2.val == p3.val){
                while((p3 = p3.next) != null && p3.val == p2.val){}
                p1.next = p3;
            }else{
                p1 = p1.next;
            }
        }
        return s.next;
    }   
}
