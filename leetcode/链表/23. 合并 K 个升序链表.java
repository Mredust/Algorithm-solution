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
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists.length == 0){
            return null;
        }
        return split(lists , 0 ,lists.length-1);

    }
    private ListNode split(ListNode[] lists , int i ,int j){
        if(i == j){
            return lists[i];
        }
        int m  = (i + j) >>> 1;
        ListNode left =  split(lists , i , m);
        ListNode right =  split(lists , m + 1 , j);
        return mergeTwoLists(left,right);
    }

    private ListNode mergeTwoLists(ListNode list1 , ListNode list2){
        if(list1 == null){
            return list2;
        }else if(list2 == null){
            return list1;
        }else if(list1.val <= list2.val){
            list1.next = mergeTwoLists(list1.next , list2);
            return list1;
        }else{
            list2.next = mergeTwoLists(list2.next , list1);
            return list2;
        }
    }
}
