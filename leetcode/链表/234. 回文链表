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
    public boolean isPalindrome(ListNode head) {
        ListNode p1 = head;
        ListNode p2 = head;
        ListNode newNode = null;
        ListNode oldNode = head;

        while(p2 != null && p2.next != null){
            p1 = p1.next;
            p2 = p2.next.next;

            ListNode tmp = oldNode.next;
            oldNode.next = newNode;
            newNode = oldNode;
            oldNode = tmp;
        }

        if(p2 != null){
            p1 = p1.next;
        }

        while(newNode != null){
            if(newNode.val != p1.val){
                return false;
            }
            newNode = newNode.next;
            p1 = p1.next;
        }

        return true;

    }
}
