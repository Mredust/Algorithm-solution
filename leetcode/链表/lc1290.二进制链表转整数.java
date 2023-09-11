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
    public int getDecimalValue(ListNode head) {
        //方法一：直接遍历
        // ListNode curNode =head;
        // int res = 0;
        // while( curNode != null){
        //     res = res *2 + curNode.val;
        //     curNode = curNode.next;
        // }
        // return res;

        //方法二：数组
        ArrayList<Integer> arr =new ArrayList<>();
        while (head != null){
            arr.add(head.val);
            head = head.next;
        } 
        int res =0;
        for(int i = arr.size()-1; i>=0 ;i--){
            res += Math.pow(2,(arr.size()-i-1)) * arr.get(i);
        }
        return res;

        
    }
}
