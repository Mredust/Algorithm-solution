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
        // 方法一：直接遍历
        int res = 0;
        while( head != null){
            res = res * 2 + head.val;    // res = (res << 2) +head.val;
            head = head.next;
        }
        return res;

        //方法二：数组
        // ArrayList<Integer> arr =new ArrayList<>();
        // while (head != null){
        //     arr.add(head.val);
        //     head = head.next;
        // } 
        // int res =0;
        // for(int i = arr.size()-1; i>=0 ;i--){
        //     res += Math.pow(2,(arr.size()-i-1)) * arr.get(i);
        // }
        // return res;

        //方法三：转字符串
        // StringBuilder sb = new StringBuilder();
        // while (head != null){
        //     sb.append(head.val);
        //     head = head.next;
        // }
        // return Integer.parseInt(sb.toString(),2);

        //方法四：原始做法
        // int nodeLength = 0;
        // int res = 0;
        // ListNode tempNode = head;
        // while (tempNode != null){
        //     nodeLength ++;
        //     tempNode = tempNode.next;
        // }
        // while(head != null){
        //     res += head.val + Math.pow(2,nodeLength-2);
        //     head = head.next;
        //     nodeLength --;
        // }
        // return res;
        
        //方法五：栈
        // Stack<Integer> stack =new Stack<>();
        // while(head != null){
        //     stack.push(head.val);
        //     head = head.next;
        // }
        // int res = 0;
        // int i = 0;
        // while (!stack.empty()){
        //     res += stack.pop() * Math.pow(2,i++);
        // }
        // return res;
    }
}
