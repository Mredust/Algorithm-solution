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
    public ListNode removeElements(ListNode head, int val) {
        //方法一：
        // ListNode sentinel = new ListNode(-1 , head);
        // ListNode p1 = sentinel;
        // ListNode p2 = sentinel.next;
        // while(p2 != null){
        //     if(p2.val == val){
        //         p1.next = p2.next;
        //         p2 = p2.next;
        //     }else{
        //         p1 = p1.next;
        //         p2 = p2.next;
        //     }
        // }
        // return sentinel.next;

        //方法二：递归
        // if (head == null){
        //     return null;
        // }
        // if (head.val == val){
        //     return removeElements(head.next , val);
        // }else{
        //     head.next = removeElements(head.next , val);
        //     return head;
        // }

        //方法三：
        //不为空且重复
        while(head != null && head.val ==val  ){
            head = head.next;
        }
        //不为空且不重复
        ListNode cur = head;
        while (cur != null){
            while(cur.next != null && cur.next.val == val){
                cur.next = cur.next.next;
            }
            cur = cur.next;
        }
        return head;

    }
}

 
